import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wella from "../../assets/Projects/wella-edu.png";
import nasa from "../../assets/Projects/nasa.png";

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
              description="I led the development of a white-label educational platform using React, Styled Components, TypeScript, and Ruby on Rails during my time at EVOB. This platform, the largest of its kind in Brazil's beauty market, serves as a flexible, scalable solution for delivering educational content to a wide range of users. "
              demoLink="https://wellaedu.com.br/en/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"editor"}
              isBlog={false}
              title="SouTag"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
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
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"emotion"}
              isBlog={false}
              title="Namora Comigo"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
