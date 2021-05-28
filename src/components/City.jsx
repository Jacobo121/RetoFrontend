import React from 'react';
import {Table, Container} from 'react-bootstrap'; 
import useRequest from '../hooks/useRequest';

const City = () => {
    const API = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';
    const persons = useRequest(API);

    const towns = [];
    persons.forEach(i => {return towns.push(i.ciudad_municipio) }); 
    const orderTowns = towns.sort();

    const result = [];
    persons.map((item) => {
        if(!result.includes(item.ciudad_municipio_nom)){
    		result.push(item.ciudad_municipio_nom); 
    	}
    })
    const orderResult = result.sort();

    var count = 0;
    var arr = orderTowns[0];

    for(let i = 0; i < orderTowns.length; i++) {
        if(arr == orderTowns[i]) {
            count++
        } else {
            console.log(`La ciudad ${arr} se repite ${count} veces`);
            count = 1;
            arr = orderTowns[i];
        }
    }

    return (
        <Container>
            <h3 className="mt-4">Numero de contagios por ciudades</h3>
            <Table className="mt-4" striped bordered hover>
                <thead>
                    <tr>
                        <th>Top Ciudades Más Contagiadas</th>
                        <th># de Contagios</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map(town => (
                        <tr key={town.ciudad_municipio}>
                            <td>{town}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default City;