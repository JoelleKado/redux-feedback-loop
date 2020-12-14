//MODULES
import React, { Component } from 'react';
//STYLING
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
//COMPONENTS
import DoneButton from '../Buttons/DoneButton/DoneButton.jsx'

const theme = createMuiTheme({
    palette: {
      primary: blue
    }
  });

class ThankYou extends Component {
    state = {
        understanding: ''
    }

    goHome = () => {
        this.props.history.push('/Feeling')
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    render() {
        return (
            <section>
                <h1>Thank You for your Feedback!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    {/* <button onClick={this.goHome}>DONE</button> */}
                    <MuiThemeProvider theme={theme}>
                       <DoneButton doneProp={this.goHome}/>
                    </MuiThemeProvider>
                </form>
            </section>
        )
    }
};//END ThankYou
export default ThankYou