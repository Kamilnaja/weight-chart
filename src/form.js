import React, { Component } from 'react';
import DataList from './dataList';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weight: undefined,
            date: undefined
        }
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

        let weightInfo = [];
        weightInfo.push({
            weight: this.state.weight,
            date: this.state.date

        });
        localStorage.setItem('weightInfo', weightInfo);
        console.log(weightInfo);
    }

    render() {
        return (
            <div className="App container">
                <div className="row">
                    <div className="col">
                        <h2>
                            Please add data
                        </h2>
                    </div>
                </div>
                <form className="form-group">
                    <label htmlFor="date">
                        Data
                    </label>
                    <input className="form-control" type="date" name="date" onChange={(e) => this.handleChange(e)} />
                    <label htmlFor="weight">
                        Data
                    </label>
                    <input className="form-control" type="number" name="weight" onChange={(e) => this.handleChange(e)} />
                    <br></br>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit" onClick={(e) => this.handleSubmit(e)} >
                            Submit
                        </button>
                    </div>
                </form>
                <DataList></DataList>
            </div>
        );
    }
}

export default Form;