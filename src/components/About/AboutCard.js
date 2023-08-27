import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Thanks for landing up here, I am <span className="purple">Narasimha </span>
            from <span className="purple"> Charlotte, USA.</span>
            <br /> 
          </p> 
          <p className="home-about-body">I am currently pursuing a <span className="purple">graduate degree </span> in Software Engineering at the University of North Carolina at Charlotte. 
          Before this, I worked at <span className="purple">Syscloud </span> as a Software Development Engineer, where I not only gained significant practical experience but also had the 
          opportunity to interact with remarkable colleagues, learning from their diverse experiences and valuable feedback.`</p>
          <br/>
          <p className="home-about-body">My experience has been shaped through numerous hands-on projects and by leveraging the insights and expertise of others in the field.`</p>
          <br/>
          
          
            <br />
            Apart from coding, some other activities that I love to do!
         
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Narasimha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
