import { useState } from "react";
import "./App.css";
import MaintContent from "./components/MaintContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";





function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <Header/>
      <Menu activeMenu={activePage} setActiveMenu={setActivePage} />
      <MaintContent activePage={activePage} />
      <Footer />
    </>
  );
}

export default App;
