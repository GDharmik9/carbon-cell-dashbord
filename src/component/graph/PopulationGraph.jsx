import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from "chart.js";
import useViewModel from './viewModel';
import { Line } from 'react-chartjs-2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './PopulationGraph.css';

const DemoPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    backgroundColor: '#171717',
    marginTop: theme.spacing(4),

}));


ChartJS.register(
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,

);

const PopulationGraph = () => {
    const { data, options } = useViewModel();


    return (
        <>
            <DemoPaper className='graph-container' square={false} variant="elevation">
                <Line options={options} data={data} />
            </DemoPaper>
        </>

    )
}

export default PopulationGraph