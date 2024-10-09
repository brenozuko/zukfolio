import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../assets/Breno Zukowski - Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            maxWidth: "1320px",
            margin: "0 auto",
            marginTop: "20px",
            height: "95vh",
          }}
        >
          <iframe
            src={pdf}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Resume PDF"
          />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
