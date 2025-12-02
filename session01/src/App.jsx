import { useState } from "react";
import "./App.css";
import MaintContent from "./components/MaintContent";
import Footer from "./components/Footer";
import Header from "./components/Header";





function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <MaintContent />
      <Footer />
    </>
  );
}

export default App;
