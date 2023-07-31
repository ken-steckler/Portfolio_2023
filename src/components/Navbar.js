import React from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div class="nav">
      <p class="logo">Ken Steckler / Software Engineer</p>
      <ul class="nav-links">
        <li class="nav-item">
          <HashLink smooth to="#About">
            About
          </HashLink>
        </li>
        <li class="nav-item">
          <HashLink smooth to="#Proj">
            Project
          </HashLink>
        </li>
        <li class="nav-item">
          <HashLink smooth to="#Proj">
            Contact
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
