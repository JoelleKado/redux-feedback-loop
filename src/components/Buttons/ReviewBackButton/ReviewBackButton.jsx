//***THIS BUTTON WILL TRANSPORT YOU FROM THE REVIEW PAGE TO THE COMMENTS PAGE
//MODULES
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';


const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  }
});



class ReviewBackButton extends Component {
    render() {
        const {classes} = this.props;
        return ( <Button onClick={this.props.reviewBackProp} variant="contained" color="secondary" /*className={classes}*/ >
            BACK
        </Button>)
    }
}

export default withStyles(styles)(ReviewBackButton);