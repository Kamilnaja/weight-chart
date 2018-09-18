import React, { Component } from 'react';
import ChartService from './chartService';

class DataChart extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.chartService = new ChartService();

    }

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas = () => {
        const ctx = this.refs.canvas.getContext('2d');
        var myChart = this.chartService.getConfiguredChart(
            ctx,
            this.props.userEntriesDays,
            this.props.userEntriesWeight
        );
    }

    render() {
        return (
            <div className="row" >
                <div className="col">
                    <h2>
                        Chart
                    </h2>
                    <div className="chartWrapper">
                        <div className="chartAreaWrapper">
                            <div className="chartAreaWrapper2">
                                <canvas ref="canvas" width="1500" height="500"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default DataChart;
