import React, { Component } from 'react';
import Chart from 'chart.js';
import weightService from './../services/weightService';

class DataChart extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.service = new weightService();
    }

    componentDidMount() {
        var ctx = document.getElementById('myChart').getContext('2d');
        // eslint-disable-next-line
        var myChart = new Chart(ctx, {
            type: 'line',
            maintainAspectRatio: false,
            responsive: true,
            data: {
                labels: this.service.getDaysFromItemList(),
                datasets: [{
                    label: 'Masa ciała',
                    data: this.service.getWeightFromItemList(),
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
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <h2>
                        Chart
                    </h2>
                    <div className="chartWrapper">
                        <div className="chartAreaWrapper">
                            <div className="chartAreaWrapper2">
                                <canvas id="myChart" width="1500" height="500"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DataChart;
