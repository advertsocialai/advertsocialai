import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './Users.css';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const [lazyState, setLazyState] = useState({
        first: 0,
        rows: 10,
        sortField: null,
        sortOrder: null,
        filters: {},
    });

    useEffect(() => {
        console.log("Fetching Users...");
        
        fetch("https://bohrx.ai/backendadmin/api/contacts/getall", {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        })
        .then((res) => res.json())
        .then((result) => {
            console.log("API RESULT:", result);

            if (!result.data) {
                setUsers([]);
                setLoading(false);
                return;
            }

            const formatted = result.data.map((item) => ({
                id: item.contactid,
                name: item.Firstname,
                email: item.Emailaddress,
                company: item.Location,
                phone: item.Phoneno
            }));

            setUsers(formatted);
            setLoading(false);
        })
        .catch((err) => {
            console.error("API ERROR:", err); // handling errors 
            setLoading(false);
        });
    }, []);

    const onPage = (event) => {
        setLazyState({ ...lazyState, first: event.first, rows: event.rows }); //pagination
    };

    const onSort = (event) => {
        setLazyState({ ...lazyState, sortField: event.sortField, sortOrder: event.sortOrder }); //sorting
    };

    const onFilter = (event) => {
        const updatedFilters = event.filters;
        setLazyState((prevState) => ({ ...prevState, filters: updatedFilters })); //filtering
    };

    return (
        <div className="table-card">
            <DataTable
                value={users}
                loading={loading}
                paginator
                first={lazyState.first}
                rows={lazyState.rows}
                totalRecords={users.length}
                onPage={onPage}
                sortField={lazyState.sortField}
                sortOrder={lazyState.sortOrder}
                onSort={onSort}
                filterDisplay="row"
                filters={lazyState.filters} // Pass filters directly to DataTable
                onFilter={onFilter}
                className="custom-datatable"
                dataKey="id"
            >

                <Column field="name" header="Name" sortable filter filterPlaceholder="Search"
                    filterStyle={{ width: "160px" }} style={{ minWidth: "220px" }} />

                <Column field="email" header="Email" sortable filter filterPlaceholder="Search"
                    filterStyle={{ width: "160px" }} style={{ minWidth: "260px" }} />

                <Column field="company" header="Company" sortable filter filterPlaceholder="Search"
                    filterStyle={{ width: "160px" }} style={{ minWidth: "230px" }} />

                <Column field="phone" header="Phone" sortable filter filterPlaceholder="Search"
                    filterStyle={{ width: "160px" }} style={{ minWidth: "180px" }} />

            </DataTable>
        </div>
    );
}
