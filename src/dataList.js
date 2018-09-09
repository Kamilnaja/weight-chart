import React, { Component } from 'react';
import userEntries from './data.json';

class DataList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.parseData();
    }

    parseData() {
        let parsedEntries = [];
        userEntries.forEach(item => {
            let parsedDate = new Date(item.date).toDateString();

            this.saveTemporaryEntries(parsedDate, item, parsedEntries);
        });
    }

    saveTemporaryEntries(parsedDate, item, parsedEntries) {
        let dataToSave = {
            date: parsedDate,
            weight: item.weight
        };
        parsedEntries.push(dataToSave);
        this.saveToState(parsedEntries);
    }

    saveToState(parsedEntries) {
        this.setState({
            parsedEntries: parsedEntries
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <h2>Wyniki</h2>
                    <ul>
                        {
                            this.state.parsedEntries.map((item, idx) => <li key={idx}>
                                {item.date} | {item.weight}
                            </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default DataList;