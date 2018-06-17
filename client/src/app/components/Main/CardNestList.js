import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  }
});

const getItems = () => {
  const json = {
    "list": [
      {
        "id": 1,
        "name": "playlistItem-0.1"
      },
      {
        "id": 2,
        "name": "playlistItem-0.2"
      },
      {
        "id": 3,
        "name": "playlistItem-0.3"
      },
      {
        "id": 4,
        "name": "playlistItem-0.4"
      }
    ]
  };
  return json;
}
const items = getItems();

const CardNestList = ({ classes }) => {
    return (
      <div>
        <List disablePadding>
          {items.list.map((sitem) => {
            return (
              <ListItem button key={sitem.id} className={classes.nested}>
                <ListItemIcon>
                  <PlayCircleOutline />
                </ListItemIcon>
                <ListItemText key={sitem.id} primary={sitem.name} />
              </ListItem>
            )
          })}
        </List>
      </div>
    );
  }


CardNestList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardNestList);