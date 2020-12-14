//MODULES
import React, { Component } from 'react';
import { connect } from 'react-redux';
//STYLING
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
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
                    {/* <button onClick={this.goBack}>Back</button> */}
                    <MuiThemeProvider theme={theme}>
                       <SupportBackButton supportBackProp={this.goBack}/>
                        {/* <button onClick={this.addFeeling}>Next</button> */}
                    </MuiThemeProvider>
                    
                    
                    <input required placeholder="Support" type="number" onChange={this.handleChange} />
                    {/* <button onClick={this.addSupport}>Next</button> */}
                    <MuiThemeProvider theme={theme}>
                       <SupportNextButton addSupportProp={this.addSupport}/>
                        {/* <button onClick={this.addFeeling}>Next</button> */}
                    </MuiThemeProvider>
                </form>
            </section>
        )
    }
}
//export default Support;
const putReduxStateOnProps = (reduxState) => ({reduxState});
export default connect(putReduxStateOnProps)(Support);