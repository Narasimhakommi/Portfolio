import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import faceparse from "../../Assets/Projects/faceparse.png";
import library from "../../Assets/Projects/library.png";
import trades from "../../Assets/Projects/trades.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Book Tracker"
              description="The Library Management System simplifies library administration, offering digital access for students and efficient book handling, reservations, and event management. It enhances the library experience for staff and members through user-friendly organization."
              ghLink="https://github.com/Narasimhakommi/BookTracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trades}
              isBlog={false}
              title="TradeXchange"
              description="Tradexchange is an online platform connecting tech enthusiasts for seamless trading of laptops, mobile devices, and accessories. With a user-friendly interface and robust features, it simplifies secure tech exchanges and upgrades."
              ghLink="https://github.com/Narasimhakommi/TradeXchange"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceparse}
              isBlog={false}
              title="Editor.io"
              description="This project utilizes a machine learning model to perform detailed facial parsing, extracting information about facial features and expressions for various applications in computer vision and emotion recognition. It enhances image analysis by providing fine-grained insights into facial attributes."
              ghLink="https://github.com/Narasimhakommi/facepasing"           
            />
          </Col>

        

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
