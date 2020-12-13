import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    state = {
        comments: ''
    }

    goBack = () => {
        this.props.history.push('/Support')
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        });
    }

    addComments = () => {
        console.log(this.state);
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state })
        this.props.history.push('/Review')
    }

    handleSubmit = () => {
    }

    render() {
        return (
            <section>
                <h2>Your Comments</h2>
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <button onClick={this.goBack}>Back</button>
                    <input required placeholder="Comments" type="text" onChange={this.handleChange} />
                    <button onClick={this.addComments}>Next</button>
                </form>
            </section>
        )
    }
}
//export default Comments;
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Comments);