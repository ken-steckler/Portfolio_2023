import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  return (
    <div class="contact" id="Contact">
      <p class="title">Let's Connect!</p>
      <table class="icons">
        <tr>
          <td>
            <a href="https://www.linkedin.com/in/ken-steckler/" target="_blank">
              <BsLinkedin />
            </a>
          </td>
          <td>
            <a href="https://github.com/ken-steckler" target="_blank">
              <BsGithub />
            </a>
          </td>
          <td>
            <a href="mailto:steckler92ken@gmail.com?">
              <GrMail />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.linkedin.com/in/ken-steckler/" target="_blank">
              <p>LinkedIn</p>
            </a>
          </td>
          <td>
            <a href="https://github.com/ken-steckler" target="_blank">
              <p>GitHub</p>
            </a>
          </td>
          <td>
            <a href="mailto:steckler92ken@gmail.com?">
              <p>Email</p>
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Contact;
