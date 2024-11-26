import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blendCart from "../../Assets/Images/BlendCart.png";
import beatFlow from "../../Assets/Images/BeatFlow.png";
import quikNote from "../../Assets/Images/QuikNote.png";
import todo from "../../Assets/Images/ToDo.png";
import dictionary from "../../Assets/Images/Dictionary.png";
import guvi from "../../Assets/Images/GUVI.png";
import joke from "../../Assets/Images/Joke.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "BlendCart",
      src: blendCart,
      link: "https://blend-cart.vercel.app",
      repository: "https://github.com/rahulkarda/Web-Postman",
      description:
        "Created a shopping cart application using React.js and Bootstrap for a responsive and interactive user interface. Built the backend with Express.js and MongoDB to manage data efficiently and integrated PayPal for secure payment processing. Designed to deliver a smooth and reliable shopping experience.",
    },
    {
      id: 2,
      title: "QuikNote",
      src: quikNote,
      link: "https://quik-notes-client.vercel.app",
      repository: "https://github.com/MuthuprabhaT?tab=repositories",
      description:
        "Built a notes application with React.js and Tailwind CSS, offering a modern and responsive interface for effortless note management. Utilized Express.js and MongoDB to ensure efficient backend functionality and secure data storage. Designed to simplify the process of creating, editing, and organizing notes.",
    },
    {
      id: 3,
      title: "BeatFlow",
      src: beatFlow,
      link: "https://online-music-player-frontend.vercel.app",
      repository: "https://github.com/MuthuprabhaT?tab=repositories",
      description:
        "Created a music player application with React.js and Bootstrap, featuring a visually appealing and responsive design. Leveraged Express.js and MongoDB to handle backend operations and manage user data effectively. Designed to provide an intuitive experience for streaming, organizing, and exploring music playlists.",
    },
    {
      id: 4,
      title: "React - Todo",
      src: todo,
      link: "https://my2do.vercel.app",
      repository: "https://github.com/MuthuprabhaT/React-Todo-Task",
      description:
        "Developed a to-do application using React.js and Bootstrap, offering a sleek and responsive interface for task management. Enabled users to efficiently add, edit, and organize tasks with a focus on simplicity. Designed to enhance productivity with a user-friendly experience.",
    },
    {
      id: 5,
      title: "Guvi - Clone",
      src: guvi,
      link: "https://guviclone.vercel.app",
      repository: "https://github.com/MuthuprabhaT/React-Router-Task",
      description:
        "Cloned the GUVI website using React.js and Bootstrap, with a focus on building a responsive and user-friendly interface. Utilized React Router for seamless navigation and efficient routing between different pages. Designed to replicate the core features of the original website while ensuring smooth user interactions.",
    },
    {
      id: 6,
      title: "Dictionary",
      src: dictionary,
      link: "https://myhand-dictionary.vercel.app",
      repository: "https://github.com/MuthuprabhaT/Day-20-Task-Dictionary",
      description:
        "Created a dictionary application using HTML, JavaScript, and Bootstrap, featuring a clean and responsive design. Integrated a dictionary API to provide quick and accurate word definitions.",
    },
    {
      id: 7,
      title: "Joke",
      src: joke,
      link: "https://nerdyjoke.vercel.app",
      repository: "https://github.com/MuthuprabhaT/Day-20-Task-Joke",
      description:
        "Developed a joke website using HTML, JavaScript, and Bootstrap, featuring a responsive and engaging design. Integrated a joke API to fetch and display random jokes instantly for user entertainment. Designed to provide a fun and interactive browsing experience.",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Project </strong>Overview
        </h1>
        <p style={{ color: "white" }}>
          Take a look at some projects I’ve developed.
        </p>

        <Row
          xs={1}
          md={2}
          lg={3}
          className="g-4"
          style={{ justifyContent: "center", paddingBottom: "10px" }}
        >
          {projects.map((project) => (
            <Col key={project.id} className="project-card">
              <ProjectCard
                imgPath={project.src}
                isBlog={false}
                title={project.title}
                description={project.description}
                repository={project.repository}
                link={project.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
