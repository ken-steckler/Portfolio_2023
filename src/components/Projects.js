import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div class="proj">
      <p class="title" id="proj-title">
        My Projects
      </p>
      <div class="projects">
        <Project
          image="images/giftu_demo.png"
          demo="https://giftu-app.herokuapp.com/"
          git="https://github.com/ken-steckler/wishlist"
        />
        <Project
          image="images/qrchive_demo.png"
          demo="https://qrchive-2ce99.web.app/"
          git="https://github.com/Raptor2k1/QRchive"
        />
        <Project
          image=""
          demo=""
          git="https://github.com/ken-steckler/restaurant"
        />
        <Project
          image="images/spotme_demo.png"
          demo=""
          git="https://github.com/ken-steckler/spotme"
        />
      </div>
    </div>
  );
};

export default Projects;
