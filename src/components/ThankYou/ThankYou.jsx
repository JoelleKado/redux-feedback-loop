import React, { Component } from 'react';
//import { connect } from 'react-redux';

class ThankYou extends Component {
    state = {
        understanding : ''
    }

    goHome = () => {
        this.props.history.push('/Feeling')
    }

    handleChange = (event) => {
        this.setState({
            understanding : event.target.value
        })
        //this.props.history.push('/Understanding');
    }

    


    // addUnderstanding = () => {
    //     this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state })

    //     this.props.history.push('/Support')
    // }

    // handleSubmit = () => {
        
    // }

    render() {
        return (
            <section>
                <h1>Thank You for your Feedback!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    {/* <button onClick={this.goBack}>Back</button> */}
                    {/* <input required placeholder="Understanding" type="number" onChange={this.handleChange}/> */}
                    <button onClick={this.goHome}>DONE</button>
                </form>
            </section>
        )
    }
};//END ThankYou
export default ThankYou