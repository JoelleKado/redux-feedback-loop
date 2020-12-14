//this button will transport you from the Comments page to the Support page
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';


const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  }
});



class CommentsBackButton extends Component {
    render() {
        const {classes} = this.props;
        return ( <Button onClick={this.props.commentsBackProp} variant="contained" color="secondary" /*className={classes}*/ >
            BACK
        </Button>)
    }
}

export default withStyles(styles)(CommentsBackButton);