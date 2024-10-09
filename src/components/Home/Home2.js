import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Full Stack Software Engineer focused on
              <i>
                <b className="purple"> React</b> and{" "}
                <b className="purple">Ruby on Rails.</b>
              </i>
              <br />
              <br />I have a Bachelor's degree by{" "}
              <b className="purple">Fatec, Ribeirão Preto</b> and I'm based in
              Brazil.
              <br />
              <br />
              Deeply passionate about
              <b className="purple"> Computer Science, AI </b> and{" "}
              <b className="purple">Data Science.</b> I also love creating
              beautiful UI's and products that scale.
              <br />
              <br />
              My main skills are: React, React Native, Cypress, Jest, Rspec,
              Ruby on Rails, Next.js, Typescript, Python, Docker, PostgreSQL and
              AWS.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                style={{ maxWidth: "300px" }}
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/brenozuko"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/breno-zukowski/"
                  target="_blank"
                  rel="noreferrer"
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
