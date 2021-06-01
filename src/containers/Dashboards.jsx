import React from 'react';
import Gender from '../components/Gender';
import Age from '../components/Age';
import City from '../components/City';
import {Row, Col, Container} from 'react-bootstrap';

const Dashboards = () => {

    return (
        <Container>
            <h1 className="mt-4 title">Contagios en Colombia</h1>
            <Row>
                <Col>
                    <Gender />
                </Col>
                <Col>
                    <Age /> 
                </Col>
                <Col>
                    <City />
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboards;