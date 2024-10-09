import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wella from "../../assets/projects/wella-edu.png";
import nasa from "../../assets/projects/nasa.png";
import soutag from "../../assets/projects/soutag.png";
import movieUp from "../../assets/projects/movie-up.png";
import namoraComigo from "../../assets/projects/namora-comigo.png";
import jebbit from "../../assets/projects/jebbit.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Work <strong className="purple">Highlights </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wella}
              isBlog={false}
              title="Wella Education"
              description="I led the development of a white-label educational platform using React, Styled Components, TypeScript, and Ruby on Rails during my time at EVOB. This platform, the largest of its kind in Brazil's beauty market, serves as a flexible, scalable solution for delivering educational content to a wide range of users."
              demoLink="https://wellaedu.com.br/en/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soutag}
              isBlog={false}
              title="SouTag"
              description="My most recent project, from initial commit to deployment, was a complete overhaul of a Kotlin application into React Native for SouTag. The goal was to empower gig economy workers in Brazil by improving user experience and app performance. The project was built using React Native, Styled Components for styling, and Ruby on Rails for the backend API."
              demoLink="https://play.google.com/store/apps/details?id=br.com.tagplus&hl=pt_BR&pli=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jebbit}
              isBlog={false}
              title="Jebbit Builder"
              description="Collaborated on the development of a no-code quiz builder while working at Jebbit, enabling users to capture zero-party data. The project, built with Ember.js and JavaScript, delivers a seamless and interactive quiz-building experience. My primary contribution involved revamping the layout system, significantly enhancing the overall user experience and interface."
              demoLink="https://www.jebbit.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nasa}
              isBlog={false}
              title="NASA Space Apps Hackathon"
              description="My team and I developed a project utilizing Python, Matplotlib, NumPy, and Pandas to filter and compact seismological data efficiently. Our solution earned us second place in the competition and a nomination for the global challenge, showcasing our technical skills and innovative approach to data processing."
              ghLink="https://github.com/brenozuko/pulse_seekers_submission"
              demoLink="https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/pulseseekers/?tab=project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieUp}
              isBlog={false}
              title="Movie UP"
              description="Simple personal project to fetch the latest releases from movie theaters. Built with React and Next.js using the 'The Movie Database' (TMDB) API."
              ghLink="https://github.com/brenozuko/upcoming-movies-q2"
              demoLink="http://upcoming-movies-q2.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={namoraComigo}
              isBlog={false}
              title="Namora Comigo"
              description="A fun website built with React, Next.js and Firebase made for my special one to ask her to be my girlfriend. The catch is, she can't click no, because the button slips away!"
              ghLink="https://github.com/brenozuko/namora-comigo"
              demoLink="https://coelho-zukowski.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
