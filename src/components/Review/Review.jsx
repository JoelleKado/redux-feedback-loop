import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Review extends Component {


    state = {
        feeling : ''
        
    }

    handleChange = (event) => {
        this.setState({
            feeling : event.target.value
        })
        //this.props.history.push('/Understanding');
    }

    submitFeedback = () => {
        console.log('reduxState being submitted:', this.props.reduxState);



        
       // this.props.dispatch({ type: 'ADD_FEELING', payload: this.props.reduxState })

        
       // this.props.history.push('/Understanding');
    }

    handleSubmit = () => {
        
    }
    //{this.props.reduxState.feelingReducer}
    render() {
        return (
            <>
                <h2>Review</h2>
                <table className="center"> 
                     <tbody>
    <tr>
        <th>Feeling</th>
        <th>Understanding</th>
        <th>Support</th>
        <th>Comments</th>
    </tr>
  <tr>
    <td>{this.props.reduxState.feelingReducer.feeling}</td>
    <td>{this.props.reduxState.understandingReducer.understanding}</td>
    <td>{this.props.reduxState.supportReducer.support}</td>
    <td>{this.props.reduxState.commentsReducer.comments}</td>
    </tr>
  </tbody>
        </table>
      

                {/* <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <input required placeholder="Feeling" type="number" onChange={this.handleChange}/>
                    <button onClick={this.submitFeedback}>Next</button>

                </form> */}
            </>
        )
    }
}

  
  
  

  const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
  export default connect(putReduxStateOnProps)(Review); 