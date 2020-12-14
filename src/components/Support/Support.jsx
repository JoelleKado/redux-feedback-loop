//MODULES
import React, { Component } from 'react';
import { connect } from 'react-redux';
//STYLING
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
//COMPONENTS
import SupportNextButton from '../Buttons/SupportNextButton/SupportNextButton.jsx'
import SupportBackButton from '../Buttons/SupportBackButton/SupportBackButton.jsx'

const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: red
    }
});

class Support extends Component {
    state = {
        support: ''
    }

    goBack = () => {
        this.props.history.push('/Understanding')
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        })
    }

    addSupport = () => {
        if (this.state.support === '') {
            alert('Please tell your level of support that you are feeling from the company.')
        } else {
            this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state })
            this.props.history.push('/Comments')
        }
    }

    render() {
        return (
            <section>
                <h2>Support Level</h2>
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <MuiThemeProvider theme={theme}>
                        <SupportBackButton supportBackProp={this.goBack} />
                    </MuiThemeProvider>
                    <input required placeholder="Support" type="number" onChange={this.handleChange} />
                    <MuiThemeProvider theme={theme}>
                        <SupportNextButton addSupportProp={this.addSupport} />
                    </MuiThemeProvider>
                </form>
            </section>
        )
    }
}
//export default Support;
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Support);