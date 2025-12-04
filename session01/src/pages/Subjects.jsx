import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../BaseUrls/baseUrls";

const columns = [
  { field: "id", headerName: "ID", width: 220 },
  { field: "name", headerName: "Course", width: 180 },
  { field: "code", headerName: "Code", width: 80 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function Subjects() {
  const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      fetch(`${API_BASE_URL}/courses`)
        .then((response) => response.json())
        .then(
            (data) => {
              
              const formattedData = data.map((course) => ({
                id: course._id,
                name: course.name,
                code: course.code,
              }));
              setCourses(formattedData)
            }
          )
        .catch((error) => console.error("Error fetching courses:", error));
    }, []);

  return (
    <div className="flex flex-col w-hull">
      <h2 className="w-full flex justify-center text-3xl">Courses List</h2>
      <Paper sx={{ maxHeight: "70vh", width: "100%" }}>
        <DataGrid
          rows={courses}
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
