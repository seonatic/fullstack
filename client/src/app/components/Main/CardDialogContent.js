import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Player from './Player';

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 0,
    paddingRight: 0,
    margin: 0
  },
  viewer: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1900px',
    margin: '0 auto'
  },
  viewerSelector: {
    display: 'flex',
    // flex: '1 1 30%',
    flex: '1 1 400px',
    flexDirection: 'column'
  }
});

const CardDialogContent = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.viewer}>
        <Player />
        <div className={classes.viewerSelector}>
          <List>
            <ListItem button>
              <ListItemText primary="Playlist item" secondary="Description" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Playlist item" secondary="Description" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Playlist item" secondary="Description" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Playlist item" secondary="Description" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Playlist item" secondary="Description" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Playlist item" secondary="Description" />
            </ListItem>
            <Divider />
          </List>
        </div>
      </div>
    </div>
  );
};

CardDialogContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardDialogContent);
