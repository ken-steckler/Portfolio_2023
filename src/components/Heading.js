import React from "react";

const Header = () => {
  return (
    <div class="heading">
      <h1>Ken Steckler</h1>
      <p>Software Enthusiast, Fullstack Developer</p>
      <button class="resume-btn">
        <a href="resources/resume.docx" download="resume.docx">
          Resume
        </a>
      </button>
    </div>
  );
};

export default Header;
