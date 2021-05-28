import React from 'react';
import {Table, Container} from 'react-bootstrap'; 
import useRequest from '../hooks/useRequest';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gender = () => {
    const API = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';
    const persons = useRequest(API);
    console.log(persons);

    const personsFeminine = [];
    const personsMasculine = [];

    persons.map(gender => { return gender.sexo === 'F' ? personsFeminine.push(gender.sexo) : personsMasculine.push(gender.sexo) });

    const sumPersonsFeminine = personsFeminine.length;
    const sumPersonsMasculine = personsMasculine.length;

    return(
        <Container>
            <h3 className="mt-4">Numero De Contagios Por Genero</h3>
            <Table className="mt-4" striped bordered hover>
                <thead>
                    <tr>
                        <th>Genero</th>
                        <th># de Contagios</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Masculino</td>
                        <td>{sumPersonsMasculine}</td>
                    </tr>
                    <tr>
                        <td>Femenino</td>
                        <td>{sumPersonsFeminine}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Gender;