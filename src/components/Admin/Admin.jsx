import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Admin extends Component {

    // componentDidMount() {
    //     this.getHistory();
    // }

    getHistory = () => {
        // tell axios to make a get call, then dispatch the array results
        axios.get('/history').then((response) => {
            let history = response.data
            console.log(`GET Response:`, history);
            // dispatch Array results
            this.props.dispatch({ type: 'GOT_HISTORY', payload: history })
        }).catch((err) => {
            console.log(`Error in Get`, err);
        })
    }

    // handleChange = (event) => {
    //     this.setState({
    //         comments: event.target.value
    //     });
    //     //this.props.history.push('/Understanding');
    // }

    // showHistory = () => {
    //     console.log(this.state);

    //     this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state })

    //     this.props.history.push('/Review')
    // }

    // handleSubmit = () => {
    // }

    render() {
        return (
            <section>
                <h2>Hello from Admin</h2>

                <table className="center">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Flagged</th>
                            <th>date</th>

                        </tr>
                        {this.props.reduxState.adminReducer.map((article, i) => {
                            return (
                                <tr key={i}>
                                    <td>{article.id}</td>
                                    <td>{article.feeling}</td>
                                    <td>{article.understanding}</td>
                                    <td>{article.support}</td>
                                    <td>{article.comments}</td>
                                    <td>{article.flagged}</td>
                                    <td>{article.date}</td>
                                   
                                </tr>)
                        })}
                    </tbody>
                </table>

                 <form onSubmit={this.handleSubmit}>
                    <label></label>
                    {/* <input required placeholder="Comments" type="text" onChange={this.handleChange}/> */}
                    <button onClick={this.getHistory}>GET HISTORY</button>

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