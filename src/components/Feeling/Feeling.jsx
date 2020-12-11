import React, { Component } from 'react';
import { connect } from 'react-redux';




class Feeling extends Component {


    state = {
        feeling : ''
        
    }

    

    addCustomer = () => {
        this.props.history.push('/Checkout')
    }

    handleSubmit = () => {
        
    }

    render() {
        return (
            <section>
                <h2>Your Feeling</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>: </label>
                    <input required placeholder="Feeling" type="number" />
                    
                </form>
            </section>
        )
    }
}
export default Feeling;