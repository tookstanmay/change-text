import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import BottomNav from "./components/BottomNav";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import TextForms from "./components/TextForms";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // false -> light
  // true -> dark

  const [mode, setMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === false) {
      // presentState: "light mode" entering into "dark mode"
      setMode(true);
    } else {
      // presentState: "dark mode" entering into "light mode"
      setMode(false);
    }
  };
  return (
    <>
      <Router>
        <div
          className={`App bg-${mode === false ? "light" : "dark"} text-${
            mode === false ? "dark" : "light"
          }`}
        >
          <Navbar title="changeTexts" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <Routes>
            <Route
              exact
              path="/"
              element={<TextForms mode={mode} showAlert={showAlert} />}
            />

            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/contact" element={<Contact mode={mode} />} />
          </Routes>
          <BottomNav mode={mode} />
        </div>
      </Router>
    </>
  );
}

export default App;
