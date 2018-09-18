/**
 * Returns configured chart
 */
import Chart from 'chart.js';
import WeightService from './../services/weightService';

export default class ChartService {
    constructor() {
        this.weightService = new WeightService();
    };

    getConfiguredChart = (ctx, days, weight) => {
        return new Chart(ctx, {
            type: 'line',
            maintainAspectRatio: false,
            responsive: true,
            data: {
                labels: days,
                datasets: [{
                    label: 'Masa ciała',
                    data: weight,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                }
            }
        })
    }
}