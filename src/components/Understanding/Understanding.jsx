import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    state = {
        understanding : ''
    }

    goBack = () => {
        this.props.history.push('/Feeling')
    }

    handleChange = (event) => {
        this.setState({
            understanding : event.target.value
        })
    }

    addUnderstanding = () => {
        if (this.state.understanding === '') {
        alert('Please tell your level of understanding with the work you have been doing.')
        } else {
            this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state })
            this.props.history.push('/Support')
        }
    }

    handleSubmit = () => {
    }

    render() {
        return (
            <section>
                <h2>Your Understanding</h2>
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <button onClick={this.goBack}>Back</button>
                    <input required placeholder="Understanding" type="number" onChange={this.handleChange}/>
                    <button onClick={this.addUnderstanding}>Next</button>
                </form>
            </section>
        )
    }
};//EXIT Understanding
export default connect()(Understanding);