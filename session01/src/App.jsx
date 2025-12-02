import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import mbdsLogo from "/mbds_logo_transparent.svg";
import "./App.css";

function Header() {
  const title = "Introduction à React";
  const subTitle = "A la découverte des premières notions de React";

  return (
    <header>
      <img src={mbdsLogo} alt="MBDS" />
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </header>
  );
}

function MaintContent() {

  const date = new Date();
  const day = date.getDay();
  const month = date.toLocaleString("fr-FR", { month: "long" });
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const text = `Bonjour, on est le ${day}, ${month}, ${year}, et il est et il est ${hours}:${minutes}:${seconds}.`;

  return (
    <main>
      <p>{text} </p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>© Tous droits réservés - LAFLEUR Stanley</p>
    </footer>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MaintContent />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello With</h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  );
}

export default App;
