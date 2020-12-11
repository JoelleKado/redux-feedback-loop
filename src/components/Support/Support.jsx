import React, { Component } from 'react';
import { connect } from 'react-redux';




class Support extends Component {


    state = {
        support : ''
        
    }

    

    addCustomer = () => {
        this.props.history.push('/Checkout')
    }

    handleSubmit = () => {
        
    }

    render() {
        return (
            <section>
                <h2>Support Level</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>: </label>
                    <input required placeholder="Support" type="number" />
                    
                </form>
            </section>
        )
    }
}
export default Support;