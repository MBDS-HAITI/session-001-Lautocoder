import DisplayGradeRecord from "./DisplayGradeRecord";
import data from "../assets/data.json";

function MaintContent() {
  const date = new Date();
  const day = date.getDay();
  const month = date.toLocaleString("fr-FR", { month: "long" });
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const text = `Bonjour, on est le ${day}, ${month}, ${year}, et il est et il est ${hours}:${minutes}:${seconds}.`;
  const gradeRecord = data[Math.floor(Math.random() * data.length)] 
 
  return (
    <main className="w-full flex flex-col items-center mb-8">
      <h2>{text} </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          data.length === 0 ? <p>Pas de données disponibles.</p> : data.map((gradeRecord) => (
            <DisplayGradeRecord key={gradeRecord.student.id} gradeRecord={gradeRecord} />
          ) )
        }
      </div>
    </main>
  );
}

export default MaintContent;
