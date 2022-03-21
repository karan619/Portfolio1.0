import React from "react";
import "../css/Project.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { ProjectData1 } from "../Data/ProjectData";
import { ProjectData2 } from "../Data/ProjectData";

const Projects = () => {
  return (
    <>
      <section id="project" className="project__wrapper">
        <div className="project__headingwrapper">
          <i class="fas fa-laptop-code project__innericon project__briefcase"></i>
          <h1 className="project__heading">PROJECTS</h1>
        </div>

        <div className="project__cardwrapper">
          {ProjectData1.length > 0 &&
            ProjectData1.map((data) => (
              <Card className="project__card">
                <CardImg
                  className="project__image"
                  src={data.image}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5" className="project__title">
                    {data.title}
                  </CardTitle>

                  <CardText className="project__description">
                    {data.description}
                  </CardText>
                  <a
                    href={data.link}
                    className="project__links"
                    rel="noreferrer"
                    target="_blank"
                  >
                    DEMO
                  </a>

                  <a
                    href={data.github}
                    className="project__links"
                    rel="noreferrer"
                    target="_blank"
                  >
                    CODE
                  </a>
                </CardBody>
              </Card>
            ))}
        </div>
        <div className="project__cardwrapper">
          {ProjectData2.length > 0 &&
            ProjectData2.map((data) => (
              <Card className="project__card">
                <CardImg
                  className="project__image"
                  src={data.image}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5" className="project__title">
                    {data.title}
                  </CardTitle>

                  <CardText className="project__description">
                    {data.description}
                  </CardText>
                  <a
                    href={data.link}
                    className="project__links"
                    rel="noreferrer"
                    target="_blank"
                  >
                    DEMO
                  </a>

                  <a
                    href={data.github}
                    className="project__links"
                    rel="noreferrer"
                    target="_blank"
                  >
                    CODE
                  </a>
                </CardBody>
              </Card>
            ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
