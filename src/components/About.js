import React from "react";

const About = () => {
  return (
    <div class="about" id="About">
      <p class="title">About Me</p>
      <div class="container-about">
        <table class="about-table">
          <tr>
            <td>
              <img id="python" src="images/python_logo.png" />
            </td>
            <td>
              <img src="images/javascript_logo.png" />
            </td>
            <td>
              <img src="images/react_logo.png" />
            </td>
          </tr>
          <tr>
            <td>
              <img src="images/github_logo.png" />
            </td>
            <td>
              <img id="tailwind" src="images/tailwind_logo.png" />
            </td>
            <td>
              <img src="images/mongodb_logo.png" />
            </td>
          </tr>
        </table>

        <div class="aboutme-info">
          I am a software engineer with a passion for building programs. My
          journey began in 2020 with Python and since then I have branched out
          to learning other technologies and programming languages such as
          JavaScript/TypeScript, React, SQL, Express, databases, and more.
          <br />
          <br />
          As someone who is passionate about the field, I decided to pursue a
          Computer Science degree at OSU to build a stronger foundation of
          concepts and am expected to graduate in 2025.
          <br />
          <br />
          My latest achievement is winning first place in a collaborative team
          during CodePath’s 2022 Mobile Development Hackathon, where I got to
          work with a team of 5 to build an iOS application. <br /> <br />
          My passion in software engineering is driven by my desire to be
          curious and excited about learning new technologies and tackling
          challenging problems. <br /> <br />
          Looking ahead, I'm interested in learning more about data engineering.
          My other interests are photography, exercising and reading.
        </div>
      </div>
    </div>
  );
};

export default About;
