import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { API_ENDPOINTS } from "../../lib/api";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(API_ENDPOINTS.GET_ALL_CONTACTS);

      let finalData = [];
      if (Array.isArray(res.data)) {
        finalData = res.data;
      } else if (res.data && Array.isArray(res.data.data)) {
        finalData = res.data.data;
      } else if (res.data && Array.isArray(res.data.result)) {
        finalData = res.data.result;
      }

      setContacts(finalData);
    } catch (err) {
      setError("Failed to fetch contacts.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-10 text-xl text-center text-gray-500">Loading contacts...</div>;
  if (error) return <div className="p-10 text-xl text-center text-red-500">{error}</div>;

  const hiddenColumns = ['updated_at', 'created_at', 'qualification', 'visa_status', 'visastatus', 'lastname', 'passportno', 'description', 'whatsapp', 'country'];
  const headers = contacts.length > 0 ? Object.keys(contacts[0]).filter(k => !hiddenColumns.includes(k.toLowerCase())) : [];

  const filteredContacts = contacts.filter((contact) => {
    if (!search) return true;
    return headers.some((h) => {
      const val = String(contact[h] || "").toLowerCase();
      return val.includes(search.toLowerCase());
    });
  });

  const formatCellValue = (value) => {
    if (value === "null" || value === null || value === undefined || value === "") {
      return "N/A";
    }
    return typeof value === "object" ? JSON.stringify(value) : String(value);
  };

  const dynamicBodyTemplate = (field, isIdColumn, isMessageColumn) => (rowData, options) => {
    const rawValue = isIdColumn ? options.rowIndex + 1 : rowData[field];
    const cellValue = formatCellValue(rawValue);

    if (isMessageColumn) {
      return (
        <span
          className="inline-block max-w-[150px] truncate cursor-pointer hover:text-blue-600"
          title={cellValue}
          onClick={() => {
            if (cellValue !== "N/A") {
              Swal.fire({
                title: "Full Message",
                text: cellValue,
                confirmButtonText: "Close",
              });
            }
          }}
        >
          {cellValue}
        </span>
      );
    }

    return <span title={cellValue}>{cellValue}</span>;
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Contacts</h2>
        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full">
          Total: {filteredContacts.length}
        </span>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded bg-gray-100 w-full md:w-1/3"
        />
      </div>

      <div className="rounded-xl overflow-hidden border border-gray-200">
        <DataTable
          value={filteredContacts}
          paginator
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          showGridlines
          tableStyle={{ minWidth: "70rem" }}
          emptyMessage="No contacts found."
        >
          {headers.map((h) => {
            const lower = h.toLowerCase();
            const isIdColumn = lower === "id" || lower === "contactid";
            const isMessageColumn = lower === "message";
            const headerName = isIdColumn ? "ID" : h.replace(/_/g, " ");

            return (
              <Column
                key={h}
                field={h}
                header={headerName}
                body={dynamicBodyTemplate(h, isIdColumn, isMessageColumn)}
                headerClassName="capitalize"
                bodyClassName="text-sm text-gray-600 whitespace-nowrap"
              />
            );
          })}
        </DataTable>
      </div>
    </div>
  );
}
