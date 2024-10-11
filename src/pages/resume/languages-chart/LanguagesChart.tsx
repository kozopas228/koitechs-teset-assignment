import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';

const chartOptions: ChartOptions<any> = {
    plugins: {
        legend: {
            position: 'right',
        },
    },
};

const languagesData = {
    labels: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'],
    datasets: [
        {
            label: 'Use of languages',
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
                '#ff6384',
                '#36a2eb',
                '#ffce56',
                '#4bc0c0',
                '#9966ff',
            ],
        },
    ],
};

const LanguagesChart = () => {
    return (
        <Pie
            data={languagesData}
            options={chartOptions}
        />
    );
};

export default LanguagesChart;
