//***THIS BUTTON WILL TRANSPORT YOU FROM THE FEELING PAGE TO THE UNDERSTANDING PAGE
//MODULES
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  }
});

class FeelingNextButton extends Component {
  render() {
    const { classes } = this.props;
    return (<Button onClick={this.props.addFeelingProp} variant="contained" color="primary" /*className={classes}*/>
      NEXT
    </Button>)
  }
};//END FeelingNextButton
export default withStyles(styles)(FeelingNextButton);