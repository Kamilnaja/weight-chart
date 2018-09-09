import React, { Component } from 'react';

class DataList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Wyniki</h2>
                        <ul>
                            {
                                this.props.userEntries.map((item, idx) => <li key={idx}>
                                    {item.date} | {item.weight}
                                </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DataList;