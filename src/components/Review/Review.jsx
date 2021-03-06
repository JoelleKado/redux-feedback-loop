//MODULES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
//STYLING
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
//COMPONENTS
import ReviewBackButton from '../Buttons/ReviewBackButton/ReviewBackButton.jsx'
import SubmitButton from '../Buttons/SubmitButton/SubmitButton.jsx'

const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: red
    }
});

class Review extends Component {

    goBack = () => {
        this.props.history.push('/Comments')
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    submitFeedback = () => {
        console.log('reduxState being submitted:', this.props.reduxState);
        axios.post('/history', this.props.reduxState).then((response) => {
            console.log('back from POST:', response.data);
        }).catch((err) => {
            console.log(err);
        }) //end axios
        this.props.history.push('/ThankYou');
    }

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
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <MuiThemeProvider theme={theme}>
                        <ReviewBackButton reviewBackProp={this.goBack} />
                    </MuiThemeProvider>
                    <MuiThemeProvider theme={theme}>
                        <SubmitButton submitProp={this.submitFeedback} />
                    </MuiThemeProvider>
                </form>
            </>
        )
    }
};//END Review
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Review); 