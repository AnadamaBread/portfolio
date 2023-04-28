import React, { Component, useEffect, useState } from "react";
import winter23 from "../assets/winter23resume.pdf";
import { Button, Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

const resLink =
"https://raw.githubusercontent.com/AnadamaBread/portfolio/main/src/assets/winter23resume.pdf";

export default function Resume() {

  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  //

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container>
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <Button
            variant="primary"
            href={winter23}
            target="_blank"
            className="resume-button"
          >
            <AiOutlineDownload />
          </Button>
        </Row>

        <div style={{ paddingBottom:"50px" }}>
          <Document
            file={resLink}
            options={{ workerSrc: "pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={1} scale={width > 700 ? 3.0 : 0.5 } renderTextLayer={false} renderAnnotationLayer={false} />
          </Document>
          </div>
          <Row>

          </Row>
      </Container>
    </div>
  );
}
