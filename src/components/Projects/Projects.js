import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wella from "../../assets/projects/wella-edu.png";
import nasa from "../../assets/projects/nasa.png";
import soutag from "../../assets/projects/soutag.png";

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
              imgPath={"leaf"}
              isBlog={false}
              title="Jebbit Builder"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
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
              imgPath={"suicide"}
              isBlog={false}
              title="Up Movies"
              description="Simple personal project to fetch the latest releases from the theaters ."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"emotion"}
              isBlog={false}
              title="Namora Comigo"
              description="blablablablabla."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
