import React from 'react';
import Gender from '../components/Gender';
import Age from '../components/Age';
import City from '../components/City';
import {Row, Col} from 'react-bootstrap';
import '../styles/Dashboards.scss';

const Dashboards = () => {

    return (
        <div>
            <h1 className="mt-4">Contagios en Colombia</h1>
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
        </div>
    )
}

export default Dashboards;