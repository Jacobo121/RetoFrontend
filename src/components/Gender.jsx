import React from 'react';
import useRequest from '../hooks/useRequest';
import Chart from 'react-google-charts';

const Gender = () => {
    const API = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';
    const persons = useRequest(API);

    const personsFeminine = [];
    const personsMasculine = [];

    persons.map(gender => { return gender.sexo === 'F' ? personsFeminine.push(gender.sexo) : personsMasculine.push(gender.sexo) });

    const sumPersonsFeminine = ['Femenino', personsFeminine.length];
    const sumPersonsMasculine = ['Masculino',personsMasculine.length];

    /* <Container>
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
        </Container> */

    return(
        <div>
            <Chart
                className="chart"
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Task', 'Hours per Day'],
                    sumPersonsFeminine,
                    sumPersonsMasculine
                ]}
                options={{
                    title: 'Contagios por genero',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default Gender;