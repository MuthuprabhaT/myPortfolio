import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Profile/Profile.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              GETTING TO <span className="purple"> KNOW </span> ME
            </h1>
            <p className="home-about-body">
              A motivated and detail-oriented fresher with expertise as a
              <i>
                <b className="purple"> MERN Stack Developer </b>
              </i>
              , skilled in building efficient and user-friendly web
              applications.
              <br />
              <br />
              Proficient in frontend technologies like
              <i>
                <b className="purple"> HTML, CSS, JavaScript, React.js </b>
              </i>
              and
              <i>
                <b className="purple"> Bootstrap</b>
              </i>
              , along with backend development using
              <i>
                <b className="purple"> Node.js, Express.js </b>
              </i>
              and database management with
              <i>
                <b className="purple"> MySQL </b>
              </i>
              and
              <i>
                <b className="purple"> MongoDB. </b>
              </i>
              <br />
              <br />
              Dedicated to learning new technologies, creating innovative
              solutions, and delivering smooth and reliable user experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              <span className="purple">Connect </span> with me via
            </h1>
            <p>
              Always happy to <span className="purple">connect! </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:prabhathangam507@hotmail.com"
                  title="Email"
                  className="icon-colour home-social-icons"
                >
                  <IoMdMailOpen />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/MuthuprabhaT"
                  target="_blank"
                  rel="noreferrer"
                  title="github"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muthuprabha"
                  target="_blank"
                  rel="noreferrer"
                  title="linkedin"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
