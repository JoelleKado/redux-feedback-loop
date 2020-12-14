//***THIS BUTTON WILL TRANSPORT YOU FROM THE REVIEW PAGE TO THE COMMENTS PAGE
//MODULES
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  }
});

class ReviewBackButton extends Component {
  render() {
    const { classes } = this.props;
    return (<Button onClick={this.props.reviewBackProp} variant="contained" color="secondary">
      BACK
    </Button>)
  }
};//END ReviewBackButton
export default withStyles(styles)(ReviewBackButton);