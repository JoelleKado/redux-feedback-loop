import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
    state = {
        support: ''
    }

    goBack = () => {
        this.props.history.push('/Understanding')
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        })
    }

    addSupport = () => {
        if (this.state.support === '') {
            alert('Please tell your level of support that you are feeling from the company.')
        } else {
            this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state })
            this.props.history.push('/Comments')
        }
    }

    render() {
        return (
            <section>
                <h2>Support Level</h2>
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <button onClick={this.goBack}>Back</button>
                    <input required placeholder="Support" type="number" onChange={this.handleChange} />
                    <button onClick={this.addSupport}>Next</button>

                </form>
            </section>
        )
    }
}
//export default Support;
const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default connect(putReduxStateOnProps)(Support);