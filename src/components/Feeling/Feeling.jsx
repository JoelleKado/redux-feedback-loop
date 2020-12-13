import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
    state = {
        feeling: ''
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    addFeeling = () => {
        if (this.state.feeling === '') {
            alert('Please tell us how you are feeling today.')
        } else {
            this.props.dispatch({ type: 'ADD_FEELING', payload: this.state })
            this.props.history.push('/Understanding');
        }
    }

    render() {
        return (
            <section>
                <h2>Your Feeling</h2>
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <input required placeholder="Feeling" type="number" onChange={this.handleChange} />
                    <button onClick={this.addFeeling}>Next</button>

                </form>
            </section>
        )
    }
};//END Feeling
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Feeling);
