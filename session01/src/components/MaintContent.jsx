import { useEffect, useMemo, useState } from "react";

import Grades from "../pages/Grades";
import Home from "../pages/Home";
import About from "../pages/About";
import Subjects from "../pages/Subjects";
import Students from "../pages/Students";

function MaintContent({ activePage }) {
  const date = new Date();
  const day = date.getDate(); // (plus logique que getDay)
  const month = date.toLocaleString("fr-FR", { month: "long" });
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const text = `Bonjour, on est le ${day} ${month} ${year}, et il est ${hours}:${minutes}:${seconds}.`;

  // 1) Page réellement affichée (on la retarde pour faire fade-out)
  const [shownPage, setShownPage] = useState(activePage);
  // 2) Etat d'animation
  const [phase, setPhase] = useState("in"); // "in" | "out"

  useEffect(() => {
    if (activePage === shownPage) return;

    setPhase("out"); // fade-out
    const t = setTimeout(() => {
      setShownPage(activePage); // switch page
      setPhase("in"); // fade-in
    }, 180); // durée du fade-out

    return () => clearTimeout(t);
  }, [activePage, shownPage]);

  const page = useMemo(() => {
    if (shownPage === "home") return <Home />;
    if (shownPage === "grades") return <Grades />;
    if (shownPage === "students") return <Students />;
    if (shownPage === "subjects") return <Subjects />;
    if (shownPage === "about") return <About />;
    return null;
  }, [shownPage]);

  return (
    <main className="w-full flex flex-col items-center mb-8">
      <h2 className="p-2">{text}</h2>

      <div className="w-auto mx-auto">
        <div
          className={[
            "transition-all duration-200 ease-out",
            phase === "in"
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-2 blur-[1px]",
          ].join(" ")}
        >
          {page}
        </div>
      </div>
    </main>
  );
}

export default MaintContent;

