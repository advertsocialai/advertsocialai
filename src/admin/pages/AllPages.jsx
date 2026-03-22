import React, { useState, useEffect } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Swal from "sweetalert2";
import { API_ENDPOINTS } from "../../lib/api";

export default function PagesTable() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [subCategoryFilter, setSubCategoryFilter] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    async function fetchPages() {
      try {
        setLoading(true);
        setFetchError(null);

        const res = await fetch(API_ENDPOINTS.GET_ALL_SERVICES);
        const data = await res.json();

        let normalized = [];

        if (Array.isArray(data)) normalized = data;
        else if (data && Array.isArray(data.data)) normalized = data.data;
        else if (data && Array.isArray(data.result)) normalized = data.result;
        else if (data && Array.isArray(data.items)) normalized = data.items;
        else if (data && typeof data === "object") {
          const firstArray = Object.values(data).find((v) => Array.isArray(v));
          normalized = firstArray || [data];
        }

        if (!cancelled) {
          setPages(normalized);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setFetchError(err.message);
          setPages([]);
          setLoading(false);
        }
      }
    }

    fetchPages();
    return () => (cancelled = true);
  }, []);

  if (loading) return <div className="p-10 text-center">Loading pages...</div>;
  if (fetchError)
    return (
      <div className="p-6 bg-white rounded shadow text-red-600">
        Failed to load pages: {fetchError}
      </div>
    );

  const safePages = Array.isArray(pages) ? pages : [];

  const filteredPages = safePages.filter((p) => {
    const title = (p.ServicesTitle || p.servicesTitle || "").toString();
    const nav = (p.navbarText || p.navbartext || "").toString();

    return (
      (search === "" ||
        title.toLowerCase().includes(search.toLowerCase()) ||
        nav.toLowerCase().includes(search.toLowerCase())) &&
      (categoryFilter === "" || p.pagecategory === categoryFilter) &&
      (subCategoryFilter === "" || p.pagesubcategory === subCategoryFilter)
    );
  });

  const getPageId = (page) => page.Serviceid ?? page.serviceid ?? page.serviceId ?? page.id ?? null;

  const formatValue = (value) => {
    if (value === null || value === undefined || value === "" || value === "null") {
      return "N/A";
    }
    return String(value);
  };

  const editBodyTemplate = (rowData) => {
    const realId = getPageId(rowData);

    return (
      <button
        onClick={() => {
          if (!realId) {
            alert("Invalid ID - cannot edit");
            return;
          }
          navigate(`/admin/page-update/${realId}`);
        }}
        className="text-blue-600 hover:text-blue-800"
      >
        <FiEdit size={20} />
      </button>
    );
  };

  const titleBodyTemplate = (rowData) => formatValue(rowData.ServicesTitle);
  const urlBodyTemplate = (rowData) => formatValue(rowData.servicesUrl);
  const navbarBodyTemplate = (rowData) => formatValue(rowData.navbarText ?? rowData.navbartext);
  const categoryBodyTemplate = (rowData) => formatValue(rowData.pagecategory);
  const subCategoryBodyTemplate = (rowData) => formatValue(rowData.pagesubcategory);
  const handleDelete = async (rowData) => {
    const realId = getPageId(rowData);
    if (!realId) {
      Swal.fire({
        icon: "error",
        title: "Invalid ID",
        text: "Cannot delete this record because ID is missing.",
      });
      return;
    }

    const confirmation = await Swal.fire({
      title: "Delete page?",
      text: "Do you want to confirm delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      reverseButtons: true,
    });

    if (!confirmation.isConfirmed) return;

    try {
      const adminToken = localStorage.getItem("admin_token");
      if (!adminToken) {
        throw new Error("Admin token not found. Please login again.");
      }

      const deleteUrl = API_ENDPOINTS.DELETE_SERVICE(realId);
      const response = await fetch(deleteUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${adminToken}`,
          admin_token: adminToken,
        },
      });

      let payload = null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }

      if (!response.ok || payload?.status === false) {
        throw new Error(payload?.message || "Failed to delete page.");
      }

      setPages((prev) =>
        Array.isArray(prev) ? prev.filter((p) => String(getPageId(p)) !== String(realId)) : prev
      );

      Swal.fire({
        icon: "success",
        title: "Deleted",
        text: "Page deleted successfully.",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Delete failed",
        text: err.message || "Something went wrong while deleting.",
      });
    }
  };

  const deleteBodyTemplateWithAction = (rowData) => (
    <button
      onClick={() => handleDelete(rowData)}
      className="text-red-600 hover:text-red-800"
      title="Delete"
    >
      <FiTrash2 size={20} />
    </button>
  );

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow">
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded bg-gray-100 w-full md:w-1/3"
        />

        <select
          className="px-4 py-2 border rounded bg-gray-100 w-full md:w-1/3"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">Select Page Category</option>
          <option value="readingroom">Reading Room</option>
          <option value="policy">Policy</option>
          <option value="aboutus">About Us</option>
          <option value="Medical Education">Medical Education</option>
        </select>

        <select
          className="px-4 py-2 border rounded bg-gray-100 w-full md:w-1/3"
          value={subCategoryFilter}
          onChange={(e) => setSubCategoryFilter(e.target.value)}
        >
          <option value="">Select Subcategory</option>
        </select>
      </div>

      <div className="rounded-xl overflow-hidden border border-gray-200">
        <DataTable
          value={filteredPages}
          paginator
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          showGridlines
          tableStyle={{ minWidth: "70rem" }}
          emptyMessage="No pages found."
        >
          <Column field="ServicesTitle" header="Title" body={titleBodyTemplate} />
          <Column field="servicesUrl" header="URL" body={urlBodyTemplate} />
          <Column field="navbarText" header="Navbar" body={navbarBodyTemplate} />
          <Column field="pagecategory" header="Category" body={categoryBodyTemplate} />
          <Column field="pagesubcategory" header="Subcategory" body={subCategoryBodyTemplate} />
          <Column header="Edit" body={editBodyTemplate} bodyClassName="text-center" />
          <Column header="Delete" body={deleteBodyTemplateWithAction} bodyClassName="text-center" />
        </DataTable>
      </div>
    </div>
  );
}
