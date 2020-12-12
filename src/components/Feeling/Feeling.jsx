import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {


    state = {
        feeling : ''
        
    }

    handleChange = (event) => {
        this.setState({
            feeling : event.target.value
        })
        //this.props.history.push('/Understanding');
    }

    addFeeling = () => {
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state })

        
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
                    <input required placeholder="Feeling" type="number" onChange={this.handleChange}/>
                    <button onClick={this.addFeeling}>Next</button>

                </form>
            </section>
        )
    }
}

  
  
  

  const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
  export default connect(putReduxStateOnProps)(Feeling);
   // export default Feeling;
 