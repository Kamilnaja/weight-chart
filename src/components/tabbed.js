import React, { Component } from 'react';
import DataChart from './dataChart';
import DataList from './dataList';

class Tabbed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'chart'
        }
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
                {this.state.active === 'chart' && <DataChart></DataChart>}
                {this.state.active === 'list' && <DataList {...this.props}></DataList>}
            </div>
        );
    }
}

export default Tabbed;