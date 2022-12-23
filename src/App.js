import React, { useState } from "react";

// Importing Components
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import About from "./components/About";
import Projects from "./components/Projects";

// Importing CSS
import "./App.css";

// Importing icons
import { MdCopyright } from "react-icons/md";

const App = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <About />
      <Projects />
      <footer>
        <MdCopyright />
        Ken Steckler 2022
      </footer>
    </div>
  );
};

export default App;
