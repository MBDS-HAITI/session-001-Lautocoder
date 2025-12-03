import DisplayGradeRecord from "../components/DisplayGradeRecord";
import data from "../assets/data.json";

export default function Home() {
  return (
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
  );
}
