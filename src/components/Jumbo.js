import React from 'react'
import { Jumbotron, Col, Row, Container } from 'react-bootstrap'

export default function Jumbo() {
    return (
        <Jumbotron fluid className="bg-image">
            <Container>
            <Row>
                <Col>
                    <img src="https://cdn.pixabay.com/photo/2020/04/08/18/35/coronavirus-5018466_960_720.png" 
                    className="w-25 p-3" alt="covid-19"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="text-primary">CASOS DE COVID-19</h1>
                </Col>
            </Row>
            <Row>
                <Col className="mt-4 text-right">
                    <span>Photo by <a href="https://unsplash.com/@joshrh19/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                    Joshua Rawson-Harris </a> on <a href="https://unsplash.com/s/photos/city?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
                    </span>
                </Col>
            </Row>
            </Container>
        </Jumbotron>
    )
}
