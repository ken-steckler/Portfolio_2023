import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div class="proj" id="Proj">
      <p class="title" id="proj-title">
        My Projects
      </p>
      <div class="projects">
        <Project
          technology="Python"
          image="images/duplicatechecker.png"
          demo="https://github.com/ken-steckler/duplicate-patient-checker"
          git="https://github.com/ken-steckler/duplicate-patient-checker"
        />
        <Project
          technology="Python"
          image="images/hashmap_demo.png"
          demo="https://github.com/ken-steckler/Hashmap-Implementation"
          git="https://github.com/ken-steckler/Hashmap-Implementation"
        />
        <Project
          technology="Swift, XCode"
          image="images/fuud_demo.png"
          demo="https://github.com/ken-steckler/restaurant"
          git="https://github.com/ken-steckler/restaurant"
        />
        <Project
          technology="Next.JS, TailwindCSS, Firestore"
          image="images/noteery_demo.png"
          demo="https://noteery.netlify.app/"
          git="https://github.com/ken-steckler/noteapp"
        />
      </div>
    </div>
  );
};

export default Projects;
