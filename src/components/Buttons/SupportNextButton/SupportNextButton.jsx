//***THIS BUTTON WILL TRANSPORT YOU FROM THE SUPPORT PAGE TO THE COMMENTS PAGE
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

class SupportNextButton extends Component {
    render() {
        const {classes} = this.props;
        return ( <Button onClick={this.props.addSupportProp} variant="contained" color="primary" /*className={classes}*/ >
            NEXT
        </Button>)
    }
}

export default withStyles(styles)(SupportNextButton);