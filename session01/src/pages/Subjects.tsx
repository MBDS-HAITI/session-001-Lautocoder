import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import data from "../assets/data.json";

const columns = [
  { field: "id", headerName: "#", width: 90 },
  { field: "subject", headerName: "Course", width: 180 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function Subjects() {
  const [rows, setRows] = useState<{ id: number; subject: string }[]>([]);

  useEffect(() => {
    const distinctCourses = new Set(data.map((record: any) => record.course));

    const arrCourses = [...distinctCourses];

    const computedRows = arrCourses.map((course, index) => ({
      id: index + 1,
      subject: course,
    }));

    setRows(computedRows);
  }, []);

  return (
    <div className="flex flex-col w-hull">
      <h2 className="w-full flex justify-center text-3xl">Courses List</h2>
      <Paper sx={{ maxHeight: "70vh", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
}
