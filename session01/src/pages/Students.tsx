import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import data from "../assets/data.json";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
];

const rows = [
  ...new Set(
    data.map((record) => ({
      id: record.student.id,
      firstName: record.student.firstname,
      lastName: record.student.lastname,
    }))
  ),
];

const paginationModel = { page: 0, pageSize: 10 };

export default function Students() {
  return (
    <div className="flex flex-col w-hull">
      <h2 className="w-full flex justify-center text-3xl">Students List</h2>
      <Paper sx={{ maxHeight: "80vh", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10, 15]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
}
