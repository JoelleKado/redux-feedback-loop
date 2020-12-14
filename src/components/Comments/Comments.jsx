//MODULES
import React, { Component } from 'react';
import { connect } from 'react-redux';
//STYLING
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
//COMPONENTS
import CommentsNextButton from '../Buttons/CommentsNextButton/CommentsNextButton.jsx';
import CommentsBackButton from '../Buttons/CommentsBackButton/CommentsBackButton.jsx'

const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: red
    }
});

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
                    <MuiThemeProvider theme={theme}>
                        <CommentsBackButton commentsBackProp={this.goBack} />
                    </MuiThemeProvider>
                    <input required placeholder="Comments" type="text" onChange={this.handleChange} />
                    <MuiThemeProvider theme={theme}>
                        <CommentsNextButton addCommentsProp={this.addComments} />
                    </MuiThemeProvider>
                </form>
            </section>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Comments);