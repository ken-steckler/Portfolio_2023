import React from "react";

const Project = ({ image, technology, demo, git }) => {
  return (
    <div class="card">
      <div class="container">
        <div class="preview">
          <img src={image} class="proj-img" />
        </div>
        <div class="description">
        <h3>Technologies used:</h3>
        <h4>{technology}</h4>
          <form class="proj-form">
            {/* formtaget="_blank" to open new tab */}
            <button formaction={demo} formtarget="_blank">
              Live Demo
            </button>
          </form>
          <form>
            <button formaction={git} formtarget="_blank" class="github">
              GitHub
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Project;
