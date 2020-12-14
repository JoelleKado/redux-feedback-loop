//***THIS BUTTON WILL TRANSPORT YOU FROM THE SUPPORT PAGE TO THE COMMENTS PAGE
//MODULES
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  }
});

class SupportNextButton extends Component {
  render() {
    const { classes } = this.props;
    return (<Button onClick={this.props.addSupportProp} variant="contained" color="primary">
      NEXT
    </Button>)
  }
};//END SupportNextButton
export default withStyles(styles)(SupportNextButton);