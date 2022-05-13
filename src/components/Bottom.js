import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonMedia from "./ButttonMedia";

export default function Bottom() {
    return (
        <Container className='text-center justify-content-center'>
            <Row></Row>
            <Row className='py-4'>
                <Col sm>
                    <i className='fab fa-react fa-3x mt-2' />
                    H&M-IT
                </Col>
            </Row>
            <Row>
                <Col sm>
                    <ButtonMedia
                        id={"facebook"}
                        link={"https://pt-br.facebook.com/"}
                        elementWithHover={
                            "fab fa-facebook-square fa-spin fa-3x"
                        }
                        elementWithoutHover={"fab fa-facebook-square fa-3x"}
                    />
                    Facebook
                </Col>
                <Col sm>
                    <ButtonMedia
                        id={"linkedIn"}
                        link={"https://br.linkedin.com/"}
                        elementWithHover={"fab fa-linkedin fa-spin fa-3x"}
                        elementWithoutHover={"fab fa-linkedin fa-3x"}
                    />
                    LinkedIn
                </Col>
                <Col sm>
                    <ButtonMedia
                        id={"twitter"}
                        link={"https://twitter.com/login?lang=pt"}
                        elementWithHover={"fab fa-twitter-square fa-spin fa-3x"}
                        elementWithoutHover={"fab fa-twitter-square fa-3x"}
                    />
                    Twitter
                </Col>
                <Col sm>
                    <ButtonMedia
                        id={"instagram"}
                        link='https://www.instagram.com/?hl=pt-br'
                        elementWithHover={
                            "fab fa-instagram-square fa-spin fa-3x"
                        }
                        elementWithoutHover={"fab fa-instagram-square fa-3x"}
                    />
                    Instagram
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col sm>
                    <p> 
                        Desenvolvido por{" "}
                        <a href="https://github.com/Alice7H" target="_blank" rel="noopener noreferrer">Alice Hata</a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
