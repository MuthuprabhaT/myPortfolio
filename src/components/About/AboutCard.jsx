import React from "react";
import Card from "react-bootstrap/Card";
import { FaRegHandPointRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there! I am <span className="purple">Muthuprabha </span>
            from <span className="purple"> Tenkasi, Tamilnadu.</span>
            <br />
            I completed my bachelor's degree in Mathematics at VVV College for
            Women, Virudhunagar, and my master's degree in Mathematics at
            Thiagarajar College, Madurai.
            <br />I successfully completed a{" "}
            <span className="purple">Full Stack Developer</span> program at GUVI
            to enhance my skills.
            <br />
            <br />
            Beyond coding, here are some activities I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <FaRegHandPointRight /> Dancing
            </li>
            <li className="about-activity">
              <FaRegHandPointRight /> Gardening
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
