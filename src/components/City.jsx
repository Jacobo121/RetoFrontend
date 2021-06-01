import React from 'react';
/* import {Table, Container} from 'react-bootstrap';  */
import Chart from "react-google-charts";
import useRequest from '../hooks/useRequest';

const City = () => {
    const API = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';
    const persons = useRequest(API);

    const towns = {
        ciudadesRep: [],
        ciudad: [],
        all: [],
    };

    persons.map((item) => {
        towns.ciudadesRep.push(item.ciudad_municipio_nom);
    })

    const orderTowns = towns.ciudadesRep.sort();

    var count = 0;
    var arr = orderTowns[0];


    for(let i = 0; i < orderTowns.length; i++) {
        if(arr === orderTowns[i]) {
            count = count + 1;
        } else {
            if(count > 50) {
                /* createObj(arr, count); */
                const ar = new Array(arr, count, 'silver', null);
                towns.all.push(ar);
            }
            count = 1;
            arr = orderTowns[i];
        }
    }



    return (
        <div>
            {
                towns.all.map(citys => (
                    <div>
                        <p>{citys.ciudad}</p>
                        <p>{citys.contagios}</p>
                    </div>
                ))
            }
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    [
                    'Element',
                    'Cantidad',
                    { role: 'style' },
                    {
                        sourceColumn: 0,
                        role: 'annotation',
                        type: 'string',
                        calc: 'stringify',
                    },
                    ],
                    ...towns.all,
                ]}
                options={{
                    title: 'Top ciudades más contagiadas',
                    width: 600,
                    height: 400,
                    bar: { groupWidth: '95%' },
                    legend: { position: 'none' },
                }}
                // For tests
                rootProps={{ 'data-testid': '6' }}
            />
        </div>
    )
}

export default City;