import React, { Component } from 'react';




class Understanding extends Component {


    state = {
        understanding : ''
        
    }

    

    addUnderstanding = () => {
        this.props.history.push('/Support')
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
                    <button onClick={this.addUnderstanding}>Next</button>

                    
                </form>
            </section>
        )
    }
}
export default Understanding;