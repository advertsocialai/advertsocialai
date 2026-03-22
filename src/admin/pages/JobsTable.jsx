import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../../lib/api";

export default function JobsTable() {
    const [jobs, setJobs] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch(API_ENDPOINTS.GET_ALL_JOBS)
            .then((res) => res.json())
            .then((data) => setJobs(data?.data || []));
    }, []);

    const header = (
        <div className="flex items-center gap-4 mb-4">
            <Button
                label="Add Jobs"
                icon="pi pi-plus"
                className="bg-indigo-500 border-none"
                onClick={() => navigate("/admin/jobpost")}
            />

            <span className="p-input-icon-left border border-gray-300 rounded-md px-2 py-1">
                <i className="pi pi-search text-gray-500" />
                <InputText
                    placeholder="Search All"
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="border-none shadow-none focus:ring-0"
                />
            </span>
        </div>
    );

    const actionTemplate = (rowData) => (
        <div className="flex gap-4">
            <i
                className="pi pi-pencil cursor-pointer text-gray-700"
                onClick={() => navigate(`/admin/jobpost/${rowData.jobid}`)}
            />
            <i className="pi pi-trash cursor-pointer text-gray-700" />
        </div>
    );

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            {header}

            <DataTable
                value={jobs}
                paginator
                rows={5}
                globalFilter={globalFilter}
                tableStyle={{ minWidth: "100%" }}
                paginatorTemplate="PrevPageLink PageLinks NextPageLink"
                paginatorClassName="flex justify-center mt-6"
                className="text-sm"
            >
                <Column field="Positionname" header="Positionname" />
                <Column field="JobLocation" header="JobLocation" />
                <Column field="JobType" header="JobType" />
                <Column field="Experience" header="Experience" />
                <Column header="Action" body={actionTemplate} />
            </DataTable>
        </div>
    );
}
