import React from 'react'
import { Container } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { getDataLine, getOptionsLine } from './ChartLine';
import { data as confirmed} from '../../services/who';

export default function DayConfirmed() {
    const values = confirmed.map(c => c.date)
    const text = 'Confirmed cases per day'
    const data =  confirmed.map(c => c.cases)
    const color = 'rgba(54, 162, 235, 0.5)'

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
