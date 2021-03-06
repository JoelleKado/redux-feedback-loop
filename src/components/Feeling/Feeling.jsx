//MODULES
import React, { Component } from 'react';
import { connect } from 'react-redux';
//STYLING
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
//import { ThemeProvider } from '@material-ui/core/styles/';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
//COMPONENTS
import FeelingNextButton from '../Buttons/FeelingNextButton/FeelingNextButton';

const theme = createMuiTheme({
    palette: {
        primary: green,
        //   secondary: red,
        //   error: yellow,
        //   contrastThreshold: 3,
        //   tonalOffset: 0.2,
    }
});

class Feeling extends Component {
    state = {
        feeling: ''
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    addFeeling = () => {
        if (this.state.feeling === '') {
            alert('Please tell us how you are feeling today.')
        } else {
            this.props.dispatch({ type: 'ADD_FEELING', payload: this.state })
            this.props.history.push('/Understanding');
        }
    }

    render() {
        return (
            <section>
                <h2>Your Feeling</h2>
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <input required placeholder="Feeling" type="number" onChange={this.handleChange} />
                    <MuiThemeProvider theme={theme}>
                        <FeelingNextButton addFeelingProp={this.addFeeling} />
                    </MuiThemeProvider>
                </form>
            </section>
        )
    }
};//END Feeling
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Feeling);
