import React from 'react';
import {Table, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useRequest from '../hooks/useRequest';

const Age = () => {
    const API = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';
    const persons = useRequest(API);

    const personsBabys = [];
    const personsAdults = [];
    const personsOld = [];

    persons.map(age => {
        if(age.edad <= 20) {
            personsBabys.push(age.edad);
        } if(age.edad > 20 && age.edad <= 40 ) {
            personsAdults.push(age.edad);
        } else if(age.edad > 40) {
            personsOld.push(age.edad);
        }
    })

    const sumPersonsBaby = personsBabys.length;
    const sumPersonsAdults = personsAdults.length;
    const sumPersonsOld = personsOld.length;

    

    return(
        <Container>
            <h3 className="mt-4">Numero De Contagios Por Edades</h3>
            <Table className="mt-4" striped bordered hover>
                <thead>
                    <tr>
                        <th>Edad</th>
                        <th># de Contagios</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0-20</td>
                        <td>{sumPersonsBaby}</td>
                    </tr>
                    <tr>
                        <td>20-40</td>
                        <td>{sumPersonsAdults}</td>
                    </tr>
                    <tr>
                        <td>40-Más</td>
                        <td>{sumPersonsOld}</td>
                    </tr>
                </tbody>
            </Table>
        </Container> 
    )
}

export default Age;