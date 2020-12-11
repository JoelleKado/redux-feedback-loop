import React, { Component } from 'react';
import { connect } from 'react-redux';




class Feeling extends Component {


    state = {
        feeling : ''
        
    }

    

    addFeeling = () => {
        this.props.history.push('/Understanding');
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
                    <button onClick={this.addFeeling}>Next</button>

                </form>
            </section>
        )
    }
}
export default Feeling;