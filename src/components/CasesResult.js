import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function CasesResult({ result, country, today }) {
    const res = result?.dates?.[today].countries?.[country];

    return (
        <>
            {result && res ? (
                <Container>
                    <Row>
                        <Col>
                            <p>
                                Resultados obtidos através do site{" "}
                                {result.metadata.by}
                            </p>
                            <p>Fonte: {res.source} </p>
                            <p>País: {res.name}</p>
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm>
                            <h4 className='text-danger'> TOTAL</h4>
                            <p>Confirmados: {res.today_confirmed} </p>
                            <p>Recuperados: {res.today_recovered} </p>
                            <p>Ativos/Recuperando: {res.today_open_cases} </p>
                            <p>Mortes: {res.today_deaths} </p>
                            <br />
                        </Col>
                        <Col sm>
                            <h4 className='text-danger'> HOJE</h4>
                            <p>Confirmados: {res.today_new_confirmed}</p>
                            <p>Recuperados: {res.today_new_recovered}</p>
                            <p>Ativos: {res.today_new_open_cases}</p>
                            <p>Mortos: {res.today_new_deaths}</p>
                        </Col>
                    </Row>
                </Container>
            ) : null}
        </>
    );
}