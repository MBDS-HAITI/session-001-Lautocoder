import DisplayGradeRecord from "../components/DisplayGradeRecord";
import data from "../assets/data.json";

export default function Home() {
  // const students = data.map(record => {
  //   return {
  //     firstName: record.student.firstname,
  //     lastName: record.student.lastname,
  //   };
  // });

  // console.log(students);

  const setCourses = new Set();
  data.forEach((record) => {
    setCourses.add(record.course);
  });

  const arrCourses = Array.from(setCourses);

  const courses = arrCourses.map((course, index) => {
    return {
      code: `C-${index + 1}`,
      name: course,
    };
  });

  console.log(courses);

  return (
    <div className="w-hull">
      <h2 className="w-full flex justify-center text-3xl">HOME</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length === 0 ? (
          <p>Pas de données disponibles.</p>
        ) : (
          data.map((gradeRecord) => (
            <DisplayGradeRecord
              key={gradeRecord.student.id}
              gradeRecord={gradeRecord}
            />
          ))
        )}
      </div>
    </div>
  );
}
