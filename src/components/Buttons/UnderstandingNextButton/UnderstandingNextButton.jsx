//THIS BUTTON WILL TRANSPORT YOU FROM THE UNDERSTANDING PAGE TO THE SUPPORT PAGE
//MODULES
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  }
});

class UnderstandingNextButton extends Component {
    render() {
        const {classes} = this.props;
        return ( <Button onClick={this.props.addUnderstandingProp} variant="contained" color="primary" /*className={classes}*/ >
            NEXT
        </Button>)
    }
};//END UnderstandingNextButton
export default withStyles(styles)(UnderstandingNextButton);