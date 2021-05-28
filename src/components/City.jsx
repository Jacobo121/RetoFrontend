import React from 'react';
import {Table, Container} from 'react-bootstrap'; 
import useRequest from '../hooks/useRequest';

const City = () => {
    const API = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';
    const persons = useRequest(API);

    const towns = {
        ciudadesRep: [],
        ciudad: []
    };

    persons.map((item) => {
        towns.ciudadesRep.push(item.ciudad_municipio_nom);
        if(!towns.ciudad.includes(item.ciudad_municipio_nom)){
    		towns.ciudad.push(item.ciudad_municipio_nom); 
    	}
    })
    const orderTowns = towns.ciudadesRep.sort();

    var count = 0;
    var arr = orderTowns[0];
    var contador = 0;

    for(let i = 0; i < orderTowns.length; i++) {
        if(arr == orderTowns[i]) {
            count = count + 1;
        } else {
            count = 1;
            arr = orderTowns[i];
        }
    }

    towns.ciudad.sort();

    console.log(towns)

    /* result.contagios.forEach(con => {
        console.log(con);
        if(con > 100) {
            result.topCity.push();
            result.topContagios.push(con);
        }
    }) */


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
                    {/* {orderTowns.map(town => {
                        if(arr == orderTowns[contador]) {
                            contador++;
                            count = count + 1;
                        } else {
                            console.log(`La ciudad ${arr} se repite ${count}`);
                            contador++
                            count = 1;
                            arr = orderTowns[contador];
                        }
                    })}  */}
                </tbody>
            </Table>
        </Container>
    )
}

export default City;