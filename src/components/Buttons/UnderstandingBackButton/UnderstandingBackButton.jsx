//this button will transport you from the Understanding page to the Feeling page
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';


const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  }
});



class UnderstandingBackButton extends Component {
    render() {
        const {classes} = this.props;
        return ( <Button onClick={this.props.UnderstandingBackProp} variant="contained" color="secondary" /*className={classes}*/ >
            BACK
        </Button>)
    }
}

export default withStyles(styles)(UnderstandingBackButton);