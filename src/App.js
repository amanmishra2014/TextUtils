import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-primary");
  };
  const toggleMode = (cls) => {
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // document.title = "textutils-Dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.title = "textutils-Light";
    }
  };
  return (
    <>
      <Navbar title={"TextTutils"} mode={mode} toggleMode={toggleMode} />

      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm mode={mode} />}></Route>

          <Route path="/about" element={<About mode={mode} />}></Route>
        </Routes>
        {/* <TextForm mode={mode} /> */}
      </div>
    </>
  );
}
export default App;
