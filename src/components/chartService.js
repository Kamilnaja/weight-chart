/**
 * Returns configured chat
 */

import Chart from 'chart.js';
import weightService from './../services/weightService';

export default class ChartService {
    constructor() {
        this.weightService = new weightService();
    };

    getConfiguredChart = (ctx) => {
        return new Chart(ctx, {
            type: 'line',
            maintainAspectRatio: false,
            responsive: true,
            data: {
                labels: this.weightService.getDaysFromItemList(),
                datasets: [{
                    label: 'Masa ciała',
                    data: this.weightService.getWeightFromItemList(),
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