import React, { Component } from 'react';
import DataChart from './dataChart';
import DataList from './dataList';
import WeightService from './../services/weightService';

class Tabbed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'chart',
            userEntriesObject: [],
            userEntriesDays: [],
            userEntriesWeight: []
        };
        this.weightService = new WeightService();
    }

    componentWillMount() {
        this.setState({
            userEntriesObject: this.weightService.getParsedDataObject(),
            userEntriesWeight: this.weightService.getWeightFromItemList(),
            userEntriesDays: this.weightService.getDaysFromItemList()
        })
    }

    handleClick = (e) => {
        this.setState({
            active: e.target.innerHTML
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <ul className="tabbed col">
                        {
                            this.props.tabs.map((item, idx) => (
                                <li
                                    key={idx}
                                    onClick={this.handleClick}
                                    className={this.state.active === item ? 'active' : 'not-active'}>
                                    {item}
                                </li>)
                            )}
                    </ul>
                </div>
                {this.state.active === 'chart' && <DataChart
                    userEntriesWeight={this.state.userEntriesWeight}
                    userEntriesDays={this.state.userEntriesDays}
                ></DataChart>}
                {this.state.active === 'list' && <DataList userEntriesObject={this.state.userEntriesObject}></DataList>}
            </div>
        );
    }
}

export default Tabbed;