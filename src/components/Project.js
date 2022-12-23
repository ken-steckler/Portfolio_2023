import React from "react";

const Project = ({ image, demo, git }) => {
  return (
    <div class="card">
      <div class="container">
        <div class="preview">
          <img src={image} class="proj-img" />
        </div>
        <div class="description">
          <form>
            <button formaction={demo} formtarget="_blank">
              Live Demo
            </button>
          </form>
          <form>
            <button formaction={git} class="github">
              GitHub
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Project;
