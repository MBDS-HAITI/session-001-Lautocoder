import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import data from "../assets/data.json";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "course", headerName: "Course", width: 130 },
  { field: "grade", headerName: "Grade", width: 90 },
  { field: "date", headerName: "Date", width: 120 },
];

const rows = [
  ...data.map((record) => ({
    id: record.unique_id,
    firstName: record.student.firstname,
    lastName: record.student.lastname,
    course: record.course,
    grade: record.grade,
    date: record.date,
  })),
];

const paginationModel = { page: 0, pageSize: 10 };

export default function Notes() {
  return (
    <div className="flex flex-col w-hull">
      <h2 className="w-full flex justify-center text-3xl">Grades List</h2>
      <Paper sx={{ width: "100%", maxHeight: "80vh" }}>
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
