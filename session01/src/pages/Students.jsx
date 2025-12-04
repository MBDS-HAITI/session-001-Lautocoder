import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { API_BASE_URL } from "../BaseUrls/baseUrls";
import { useEffect, useState } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 220 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "firstName", headerName: "First name", width: 130 },
];


const paginationModel = { page: 0, pageSize: 10 };

export default function Students(props) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/students`)
      .then((response) => response.json())
      .then(
          (data) => {
            
            const formattedData = data.map((student) => ({
              id: student._id,
              firstName: student.firstName,
              lastName: student.lastName,
            }));
            setStudents(formattedData)
          }
        )
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  return (
    <div className="flex flex-col w-hull ">
      <h2 className="w-full flex justify-center text-3xl">Students List</h2>
      <Paper sx={{ maxHeight: "80vh", width: "100%", }}>
        <DataGrid
          rows={students}
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
