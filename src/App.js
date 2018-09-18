import React, { Component } from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import savedEntries from './data.json';
import Form from './components/form';
import Tabbed from './components/tabbed';

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
    // todo - serve user data by service
    saveTemporaryEntries(parsedDate, item, parsedEntries) {
        let dataToSave = {
            date: parsedDate,
            weight: parseInt(item.weight, 10)
        }
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

        this.setState({
            userEntries: [...this.state.userEntries, dataToSave]
        });

    }

    render() {
        return (
            <React.Fragment>
                <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}></Form>
                <Tabbed tabs={['chart', 'list']} userEntries={this.state.userEntries}></Tabbed>
            </React.Fragment>
        );
    }
}

export default App;
