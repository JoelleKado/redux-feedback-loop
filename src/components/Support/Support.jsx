import React, { Component } from 'react';
//import { connect } from 'react-redux';




class Support extends Component {


    state = {
        support : ''
        
    }

    

    addSupport = () => {
        this.props.history.push('/Comments')
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
                    <button onClick={this.addSupport}>Next</button>

                </form>
            </section>
        )
    }
}
export default Support;