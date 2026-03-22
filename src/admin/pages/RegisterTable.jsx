import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { API_ENDPOINTS } from "../../lib/api";

export default function RegisterTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINTS.GET_REGISTERED_USERS)
      .then((res) => res.json())
      .then((resData) => {
        if (resData?.status === true) {
          setUsers(resData.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="p-2 md:p-4">
      <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
        <DataTable
          value={users}
          loading={loading}
          showGridlines
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 20, 50]}
          tableStyle={{ minWidth: "70rem" }}
          emptyMessage="No registered users found"
        >
          <Column field="id" header="ID" />
          <Column field="full_name" header="Full Name" />
          <Column field="company_name" header="Company Name" />
          <Column field="email" header="Email" />
          <Column field="phone" header="Phone" />
          <Column field="country" header="Country" />
          <Column field="role" header="Role" />
          <Column field="created_at" header="Registered On" />
        </DataTable>
      </div>
    </div>
  );
}
