import React, { Component } from 'react';
import DataList from './dataList';

class Form extends Component {

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
                    <input className="form-control" type="date" name="date" onChange={(e) => this.props.handleChange(e)} />
                    <label htmlFor="weight">
                        Weight
                    </label>
                    <input className="form-control" type="number" name="weight" onChange={(e) => this.props.handleChange(e)} />
                    <br></br>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit" onClick={(e) => this.props.handleSubmit(e)} >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;