//***THIS BUTTON WILL POST REDUXSTATE TO THE DB, 
//***AND TRANSPORT YOU FROM THE REVIEW PAGE TO THE THANKYOU PAGE
//MODULES
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
//import PropTypes from 'prop-types';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  }
});

class SubmitButton extends Component {
    render() {
        const {classes} = this.props;
        return ( <Button onClick={this.props.submitProp} variant="contained" color="primary" /*className={classes}*/ >
            SUBMIT FEEDBACK
        </Button>)
    }
}

export default withStyles(styles)(SubmitButton);