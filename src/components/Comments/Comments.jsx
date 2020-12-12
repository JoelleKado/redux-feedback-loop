import React, { Component } from 'react';
//import { connect } from 'react-redux';




class Comments extends Component {


    state = {
        comments : ''
        
    }

    

    addCustomer = () => {
        this.props.history.push('/Checkout')
    }

    handleSubmit = () => {
        
    }

    render() {
        return (
            <section>
                <h2>Your Comments</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>: </label>
                    <input required placeholder="Comments" type="number" />
                    
                </form>
            </section>
        )
    }
}
export default Comments;