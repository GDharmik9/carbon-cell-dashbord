import { Flag } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'

const useViewModel = () => {
    const [populationData, setPopulationData] = useState([]);

    useEffect(() => {
        fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            .then((response) => response.json())
            .then((data) => {
                // console.log('Population data:', data.data)
                setPopulationData(data.data);
            })
            .catch((error) => {
                console.error('Error fetching population data:', error);
            });
    }, []);

    const DATA_COUNT = populationData.length;
    const labels = populationData.map((data) => data.Year);
    labels.reverse();
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Population',
                data: populationData.map((data) => data.Population),
                borderColor: '#59b240',
                fill: false,
                tension: 0.7,
                pointBackgroundColor: '#59b240',
                pointRadius: 0,
            },

        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugin: {
            title: {
                display: true,
                text: 'Population Growth',
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            x: {
                stacked: true,
                grid: {

                    display: false,
                    color: 'grey',
                },
                title: {
                    display: false,
                    text: 'Year',
                },
            },
            y: {

                ticks: {
                    // Abbreviate the millions
                    stepSize: 4000000,
                    callback: function (value, index, values) {
                        return Math.floor(value / 1e6) + 'M';
                    }
                },
                stacked: false,
                grid: {
                    display: true,
                    color: 'grey',
                    Linewidth: 0.1,
                },
                title: {
                    display: false,
                    text: 'Population',
                },
                suggestedMin: 310000000,
                suggestedMax: 330000000,
            },
        },

    }


    return (
        {
            populationData,
            DATA_COUNT,
            data,
            options
        }
    )
}

export default useViewModel