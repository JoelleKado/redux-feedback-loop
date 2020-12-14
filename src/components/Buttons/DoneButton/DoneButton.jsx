//***THIS BUTTON WILL TRANSPORT YOU FROM THE THANKYOU PAGE TO THE HOMEPAGE
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

class DoneButton extends Component {
    render() {
        const {classes} = this.props;
        return ( <Button 
                    onClick={this.props.doneProp} 
                    variant="contained" 
                    color="primary" /*className={classes}*/ >
                  DONE
                </Button>)
    }
}

export default withStyles(styles)(DoneButton);