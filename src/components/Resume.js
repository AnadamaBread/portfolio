import React, { Component, useEffect, useState } from "react";
import winter23 from "../assets/winter23resume.pdf";
import { Button, Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import {Document, Page, pdfjs} from "react-pdf";


export default function Resume() {
    const[width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return(
        <div>
            <container fluid className="resume-section">
                <Row className="resume">
                    <Document file={resLink} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width> 786 ? 1.7 : 0.6}/>
                    </Document>
                </Row>
                <Row style={{justifyContent:"center", position:"relative"}}>
                    <Button variant="primary" href="winter23" target="_blank" style={{ maxWidth:"350px"}}>
                        <AiOutlineDownload/>
                        &nbsp;Download Resume
                    </Button>
                    
                </Row>
            </container>
        </div>
    )

}