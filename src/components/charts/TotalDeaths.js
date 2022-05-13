import React from 'react'
import { Container } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { getDataLine, getOptionsLine } from './ChartLine';
import { data as deaths } from '../../services/who';

export default function TotalDeaths() {
    const values = deaths.map(c => c.date)
    const text = 'Deaths cases'
    const data =  deaths.map(d => d.cumulative_deaths)
    const color = 'rgba(255, 99, 132, 0.5)'

    return (
        <Container>
            <Line data={getDataLine(values, text, data, color)} 
            width={200} 
            height={70} 
            options={getOptionsLine()} />
            <br/>
        </Container>
    )
}
