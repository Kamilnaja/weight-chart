import React, { Component } from 'react';
import Form from './form';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import savedEntries from './data.json';
import DataList from './dataList';

class App extends Component {
    constructor() {
        super()
        this.state = {
            userEntries: []
        }
    }

    componentWillMount() {
        this.parseData();
    }

    parseData() {
        let parsedEntries = [];
        savedEntries.forEach(item => {
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
            userEntries: parsedEntries
        });
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let weightInfo = {};

        weightInfo.weight = this.state.weight;
        weightInfo.date = this.state.date; // todo - parse data

        let dataToSave = {
            date: this.state.date,
            weight: this.state.weight
        };

        this.setState((previousState) => {
            previousState.userEntries.push(dataToSave)
        });

    }

    render() {
        return (
            <React.Fragment>
                <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}></Form>
                <DataList userEntries={this.state.userEntries}></DataList>
            </React.Fragment>
        );
    }
}

export default App;
