import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

function DoughnutChartComponent() {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        async function fetchChartData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/chart/data');
                setChartData(response.data);
            } catch (error) {
                console.error('Error fetching chart data:', error);
            }
        }

        fetchChartData();
    }, []);

    useEffect(() => {
        if (chartData) {
            const ctx = document.getElementById('doughnutChart').getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        data: chartData.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(255, 0, 255, 0.2)', //
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(46, 204, 113, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(0, 255, 255, 0.2)',

                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(255, 0, 255, 1)', //
                            'rgba(153, 102, 255, 1)',
                            'rgba(46, 204, 113, 1)',
                            'rgba(0, 255, 255, 1)',
                            'rgba(75, 192, 192, 1)',


                        ],
                        borderWidth: 1,
                    }],
                },
            });
        }
    }, [chartData]);

    return <canvas id="doughnutChart" width="400" height="400"></canvas>;
}

export default DoughnutChartComponent;