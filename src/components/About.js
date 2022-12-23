import React from "react";

const About = () => {
  return (
    <div class="about">
      <p class="title">About Me</p>
      <div class="container-about">
        <table class="about-table">
          <tr>
            <td>
              <img src="images/python_logo.png" />
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
              <img src="images/tailwind_logo.png" />
            </td>
            <td>
              <img src="images/mongodb_logo.png" />
            </td>
          </tr>
        </table>

        <div class="aboutme-info">
          I am a software engineer with a passion for building programs. I am
          also pursuing a Computer Science degree at OSU. In 2020, I started
          building programs with Python and since then have branched out to
          learning other technologies and programming languages such as
          JavaScript/TypeScript, React, Express, databases, and more. <br />
          <br />
          My latest achievement is winning first place in a collaborative team
          during CodePath’s 2022 Mobile Development Hackathon, where I got to
          work with a team of 5 to build an iOS application. <br /> <br />
          My passion in software engineering is driven by my desire to be
          curious and excited about learning new technologies and tackling
          challenging problems. <br /> <br />
          Looking ahead, I'm interested in learning more about AI and machine
          learning. My other interests are photography, exercising and reading.
        </div>
      </div>
    </div>
  );
};

export default About;
