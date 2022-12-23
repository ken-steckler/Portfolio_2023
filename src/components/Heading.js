import React from "react";

const Header = () => {
  return (
    <div class="heading">
      <h1>Ken Steckler</h1>
      <p>Software Enthusiast || Fullstack Developer</p>
      <button>
        <a href="resources/resume.pdf" download="resume.pdf">
          Resume
        </a>
      </button>
    </div>
  );
};

export default Header;
