import React from "react";
import { Col, Row } from "react-bootstrap";
import html from "../../Assets/Icons/html.svg";
import css from "../../Assets/Icons/css.svg";
import js from "../../Assets/Icons/js.svg";
import react from "../../Assets/Icons/react.svg";
import redux from "../../Assets/Icons/redux.svg";
import bootstrap from "../../Assets/Icons/bootstrap.svg";
import node from "../../Assets/Icons/node.svg";
import express from "../../Assets/Icons/express.svg";
import mysql from "../../Assets/Icons/mysql.svg";
import mongodb from "../../Assets/Icons/mongodb.svg";

function Techstack() {
  const icons = [
    { id: 1, title: "HTML", src: html },
    {
      id: 2,
      title: "CSS",
      src: css,
    },
    {
      id: 3,
      title: "Js",
      src: js,
    },
    {
      id: 4,
      title: "React",
      src: react,
    },
    {
      id: 5,
      title: "Redux",
      src: redux,
    },
    {
      id: 6,
      title: "Bootstrap",
      src: bootstrap,
    },
    {
      id: 7,
      title: "Node",
      src: node,
    },
    {
      id: 8,
      title: "Express",
      src: express,
    },
    {
      id: 9,
      title: "MongoDB",
      src: mongodb,
    },
    {
      id: 10,
      title: "MySQL",
      src: mysql,
    },
  ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((icon) => (
        <Col key={icon.id} xs={4} md={2} className="tech-icons">
          <img src={icon.src} alt={icon.title} width="80" height="80" />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
