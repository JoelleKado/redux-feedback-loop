import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import UnderstandingNextButton from '../Buttons/UnderstandingNextButton/UnderstandingNextButton.jsx';

const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: green,
      error: red,
      contrastThreshold: 3,
      tonalOffset: 0.2,
    }
  });




class Understanding extends Component {
    state = {
        understanding : ''
    }

    goBack = () => {
        this.props.history.push('/Feeling')
    }

    handleChange = (event) => {
        this.setState({
            understanding : event.target.value
        })
    }

    addUnderstanding = () => {
        if (this.state.understanding === '') {
        alert('Please tell your level of understanding with the work you have been doing.')
        } else {
            this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state })
            this.props.history.push('/Support')
        }
    }

    handleSubmit = () => {
    }

    render() {
        return (
            <section>
                <h2>Your Understanding</h2>
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <button onClick={this.goBack}>Back</button>
                    <input required placeholder="Understanding" type="number" onChange={this.handleChange}/>
                    <MuiThemeProvider theme={theme}>
                       <UnderstandingNextButton addUnderstandingProp={this.addUnderstanding}/>
                        {/* <button onClick={this.addFeeling}>Next</button> */}
                    </MuiThemeProvider>
                    
                    {/* <button onClick={this.addUnderstanding}>Next</button> */}
                </form>
            </section>
        )
    }
};//EXIT Understanding
export default connect()(Understanding);