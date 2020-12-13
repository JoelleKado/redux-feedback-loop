import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Admin extends Component {

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

    // deleteArticle = () => {
    //     console.log(this);
    //     let idToDelete = [(this).closest('tr').data('id')]
    //     axios.delete('/history', {data: idToDelete}).then((response) => {
    //     }).catch((err) => {
    //         console.log(`Error in Get`, err);
    //     })
    // }

    render() {
        return (
            <section>
                <h2>ADMIN MODE</h2>
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
                                    {/* <button onClick={this.deleteArticle}>DELETE</button> */}
                                </tr>)
                        })}
                    </tbody>
                </table>

                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <button onClick={this.getHistory}>GET HISTORY</button>
                </form>

                REDUX STATE: {JSON.stringify(this.props.reduxState)}
            </section>
        )
    }
};//EXIT Admin
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Admin);