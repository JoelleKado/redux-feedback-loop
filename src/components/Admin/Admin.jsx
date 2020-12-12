import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';




class Admin extends Component {

    componentDidMount() {
        this.getHistory();
      }
    
      getHistory = () => {
        // tell axios to make a get call, then dispatch the array results
        axios.get ('/history').then( (response) => {
          console.log (`GET Response:`, response.data);
          // dispatch Array results
          this.props.dispatch ({type: 'GOT_HISTORY', payload: response.data })
    
        }).catch ( (err ) => {
          console.log (`Error in Get`, err);
        })
      }


    

    handleChange = (event) => {
        this.setState({
            comments : event.target.value
        });
        //this.props.history.push('/Understanding');
    }


    showHistory = () => {
        console.log(this.state);

        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state })

        this.props.history.push('/Review')
    }

    handleSubmit = () => {

        
    }

    render() {
        return (
            <section>
                <h2>Hello from Admin</h2>

                {/* <table className="center">
                <tbody>
                    <tr><th>id</th></tr>
                    {this.props.reduxState.map(article =>
                        <tr key={article.id}><td>
                            {article.id}</td>
                        </tr>)}
                </tbody>
            </table> */}

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
  
  export default connect(putReduxStateOnProps)(Admin);