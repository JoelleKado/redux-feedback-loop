//***THIS BUTTON WILL TRANSPORT YOU FROM THE SUPPORT PAGE TO THE UNDERSTANDING PAGE
//MODULES
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  }
});

class SupportBackButton extends Component {
  render() {
    return (<Button onClick={this.props.supportBackProp} variant="contained" color="secondary">
      BACK
    </Button>)
  }
};//END supportBackButton
export default withStyles(styles)(SupportBackButton);