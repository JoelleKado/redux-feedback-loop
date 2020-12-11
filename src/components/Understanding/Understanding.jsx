import React, { Component } from 'react';




class Understanding extends Component {


    state = {
        understanding : ''
        
    }

    

    addCustomer = () => {
        this.props.history.push('/Checkout')
    }

    handleSubmit = () => {
        
    }

    render() {
        return (
            <section>
                <h2>Your Understanding</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>: </label>
                    <input required placeholder="Understanding" type="number" />
                    
                </form>
            </section>
        )
    }
}
export default Understanding;