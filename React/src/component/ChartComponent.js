import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

function SampleChartComponent() {
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
            const ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: 'Sample Chart',
                        data: chartData.data,
                        backgroundColor:'rgba(255, 0, 255, 0.2)'    ,
                        borderColor:   'rgba(255, 0, 255, 1)',
                        borderWidth: 1,
                    }],
                },
            });
        }
    }, [chartData]);

    return <canvas id="myChart" width="400" height="400"></canvas>;
}

export default SampleChartComponent;
