import React, { useState } from "react";

// Importing Components
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Importing CSS
import "./App.css";

// Importing icons
import { MdCopyright } from "react-icons/md";

const App = () => {
  return (
    <div>
        <Navbar />
        <Heading />
        <About/>
        <Projects />
        <Contact />
      <footer>
        <MdCopyright />
        Ken Steckler 2022
      </footer>
    </div>
  );
};

export default App;
