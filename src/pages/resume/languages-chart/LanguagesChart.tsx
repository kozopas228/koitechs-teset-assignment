import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import { TopLanguages } from '../../../types/programming-laguages';

const chartOptions: ChartOptions<any> = {
    plugins: {
        legend: {
            position: 'right',
        },
    },
};

interface IProps {
    topLanguages: TopLanguages[];
}

const LanguagesChart = ({ topLanguages }: IProps) => {
    const languagesData = {
        labels: topLanguages.map((l) => l.language),
        datasets: [
            {
                label: 'Bytes used',
                data: topLanguages.map((l) => l.count),
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

    return (
        <Pie
            data={languagesData}
            options={chartOptions}
        />
    );
};

export default LanguagesChart;
