import React, { Component } from 'react';

class ThankYou extends Component {
    state = {
        understanding: ''
    }

    goHome = () => {
        this.props.history.push('/Feeling')
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    render() {
        return (
            <section>
                <h1>Thank You for your Feedback!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <button onClick={this.goHome}>DONE</button>
                </form>
            </section>
        )
    }
};//END ThankYou
export default ThankYou