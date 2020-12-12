import React, { Component } from 'react';
import { connect } from 'react-redux';




class Comments extends Component {


    state = {
        comments : ''
        
    }

    handleChange = (event) => {
        this.setState({
            comments : event.target.value
        });
        //this.props.history.push('/Understanding');
    }


    addComments = () => {
        console.log(this.state);

        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state })

        //this.props.history.push('/Checkout')
    }

    handleSubmit = () => {
        
    }

    render() {
        return (
            <section>
                <h2>Your Comments</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>: </label>
                    <input required placeholder="Comments" type="text" onChange={this.handleChange}/>
                    <button onClick={this.addComments}>Next</button>

                </form>
            </section>




        )
    }
}
//export default Comments;
const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
  export default connect(putReduxStateOnProps)(Comments);