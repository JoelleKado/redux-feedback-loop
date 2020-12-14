import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';


//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
//import { ThemeProvider } from '@material-ui/core/styles/';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import FeelingNextButton from '../FeelingNextButton/FeelingNextButton';

const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: green,
      error: red,
      contrastThreshold: 3,
      tonalOffset: 0.2,
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
                       <FeelingNextButton addFeelingProp={this.addFeeling}/>
                        {/* <button onClick={this.addFeeling}>Next</button> */}
                    </MuiThemeProvider>
        {/* <SearchButton /> */}


                </form>
            </section>
        )
    }
};//END Feeling
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Feeling);
