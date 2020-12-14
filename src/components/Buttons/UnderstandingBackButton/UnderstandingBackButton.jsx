//***THIS BUTTON WILL TRANSPORT YOU FROM THE UNDERSTANDING PAGE TO THE FEELING PAGE
//MODULES
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  }
});

class UnderstandingBackButton extends Component {
  render() {
    return (<Button onClick={this.props.UnderstandingBackProp} variant="contained" color="secondary">
      BACK
    </Button>)
  }
};//END UnderstandingBackButton
export default withStyles(styles)(UnderstandingBackButton);