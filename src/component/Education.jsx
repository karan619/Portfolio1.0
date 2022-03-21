import React from "react";
import "../css/Education.css";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
const Education = () => {
  return (
    <>
      <section id="experience" className="education__wrapper">
        <div className="education__headingwrapper">
          <i class="fas fa-book-open education__innericon education__book"></i>
          <h1 className="education__heading">EXPERIENCE</h1>
        </div>

        <div className="education__timelinewrapper">
          <div className="education__timeline">
            <div className="education__timelinedots left">
              <div className="content">
                <h2 className="education__company">Scotts Miracle-Gro</h2>
                <h2 className="education__postion">
                  Industrial Web App Developer
                </h2>
                <h2 className="education__date">2021-Present</h2>

                <p>
                  ⚡Developed and designed a dashboard for the inhouse
                  industrial operation team using HTML5, CSS, JavaScript, and
                  React.js.To monitor, the status of various industrial
                  equipment such as printers, cisco switches, and ups.
                </p>
              </div>
            </div>
            <div className="education__timelinedots right">
              <div className="content">
                <h2 className="education__company">
                  Freelancing Web Designert
                </h2>
                <h2 className="education__postion">Maaviwanderer</h2>
                <p>
                  ⚡ Responsible for the graphic design and implementation of
                  the company website including navigation, writing HTML and
                  JavaScript, and optimization of web graphics.
                </p>
              </div>
            </div>
            <div className="education__timelinedots left">
              <div className="content">
                <h2 className="education__company">Reena.org</h2>
                <h2 className="education__postion">
                  IT System Analyst Level 2
                </h2>
                <h2 className="education__date">Nov 2018- Jun 2021</h2>
                <p>
                  ⚡Serving as a team leads backup on Windows server, corporate
                  network, and infrastructure. Also, mentoring and training new
                  employees.
                </p>
              </div>
            </div>
            <div className="education__timelinedots right">
              <div className="content">
                <h2 className="education__company">York University</h2>
                <h2 className="education__date">IT System Analyst Level 2</h2>
                <p>⚡Completed my Full Stack Web Development Course.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
