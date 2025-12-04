import DisplayGradeRecord from "../components/DisplayGradeRecord";
import data from "../assets/data.json";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../BaseUrls/baseUrls";

export default function Home() {

  // const setCourses = new Set();
  // data.forEach((record) => {
  //   setCourses.add(record.course);
  // });

  // const arrCourses = Array.from(setCourses);

  // const courses = arrCourses.map((course, index) => {
  //   return {
  //     code: `C-${index + 1}`,
  //     name: course,
  //   };
  // });

  const [grades, setGrades] = useState([]);
      
        useEffect(() => {
          fetch(`${API_BASE_URL}/grades`)
            .then((response) => response.json())
            .then(
                (data) => {
                  setGrades(data)
                }
              )
            .catch((error) => console.error("Error fetching grades:", error));
        }, []);

  return (
    <div className="w-hull">
      <h2 className="w-full flex justify-center text-3xl">HOME</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length === 0 ? (
          <p>Pas de données disponibles.</p>
        ) : (
          grades.map((gradeRecord,index) => (
            <DisplayGradeRecord
              key={index}
              gradeRecord={gradeRecord}
            />
          ))
        )}
      </div>
    </div>
  );
}
