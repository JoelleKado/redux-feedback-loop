import React, { Component } from 'react';
import { connect } from 'react-redux';




class Understanding extends Component {


    state = {
        understanding : ''
        
    }

    handleChange = (event) => {
        this.setState({
            understanding : event.target.value
        })
        //this.props.history.push('/Understanding');
    }

    addUnderstanding = () => {
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state })

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
                    <input required placeholder="Understanding" type="number" onChange={this.handleChange}/>
                    <button onClick={this.addUnderstanding}>Next</button>

                    
                </form>
            </section>
        )
    }
}
export default connect()(Understanding);