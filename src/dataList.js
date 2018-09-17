import React, { Component } from 'react';

class DataList extends Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <h2>Wyniki</h2>
                    <ul>
                        {this.props.userEntries.map((item, idx) => (
                            <li key={idx}>
                                {item.date} | {item.weight}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default DataList;