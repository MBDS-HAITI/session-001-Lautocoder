import Grades from "../pages/Grades";
import Home from "../pages/Home";
import About from "../pages/About";
import Subjects from "../pages/Subjects";
import Students from "../pages/Students";



function MaintContent({ activePage }) {
  const date = new Date();
  const day = date.getDay();
  const month = date.toLocaleString("fr-FR", { month: "long" });
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const text = `Bonjour, on est le ${day}, ${month}, ${year}, et il est et il est ${hours}:${minutes}:${seconds}.`;


  return (
    <main className="w-full flex flex-col items-center mb-8">
      <h2 className="p-2">{text} </h2>
      {activePage === "home" && <Home />}
      {activePage === "grades" && <Grades />}
      {activePage === "students" && <Students />}
      {activePage === "subjects" && <Subjects />}
      {activePage === "about" && <About />}
    </main>
  );
}

export default MaintContent;
