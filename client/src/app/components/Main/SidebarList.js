import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PlayArrow from '@material-ui/icons/PlayArrow';
import PlaylistPlay from '@material-ui/icons/PlaylistPlay'
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const getItems = () => {
  const json = {
    "list": [
      {
        "id": 1,
        "title": "videoCategory-1",
        "items": [
          {
            "id": 1,
            "name": "playlist-0.1",
            "subitems": [
              {
                "id": 1,
                "name": "playlistItem-0.1"
              },
              {
                "id": 2,
                "name": "playlistItem-0.2"
              }
            ]
          },
          {
            "id": 2,
            "name": "playlist-1.1",
            "subitems": [
              {
                "id": 1,
                "name": "playlistItem-1.1"
              },
              {
                "id": 2,
                "name": "playlistItem-1.2"
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "title": "videoCategory-2",
        "items": [
          {
            "id": 1,
            "name": "playlist-2.1",
            "subitems": [
              {
                "id": 1,
                "name": "playlistItem-2.1"
              },
              {
                "id": 2,
                "name": "playlistItem-2.2"
              }
            ]
          },
          {
            "id": 2,
            "name": "playlist-3.1",
            "subitems": [
              {
                "id": 1,
                "name": "playlistItem-3.1"
              },
              {
                "id": 2,
                "name": "playlistItem-3.2"
              }
            ]
          }
        ]
      }
    ]
  };
  return json;
}

class SidebarList extends Component {
  state = { open: false };

  // handleClick = () => {
  //   this.setState({ open: !this.state.open });
  // };
  handleClick = (e) => {
    this.setState({ [e]: !this.state[e] });
  };

  render() {
    const { classes } = this.props;

    const items = getItems();

    return (
      <div>
        {items.list.map((list) => {
          return (
            <List className={classes.root} key={list.id} subheader={<ListSubheader>{list.title}</ListSubheader>}>
              {list.items.map((item) => {
                return (

                  <div key={item.id}>
                    {item.subitems != null ? (
                      <div key={item.id}>
                        <ListItem button key={item.id} onClick={this.handleClick.bind(this, item.name)} >
                          <ListItemIcon>
                            <PlaylistPlay />
                          </ListItemIcon>
                          <ListItemText primary={item.name} />
                          {this.state[item.name] ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse key={list.items.id} component="li" in={this.state[item.name]} timeout="auto" unmountOnExit>
                          <List disablePadding>
                            {item.subitems.map((sitem) => {
                              return (
                                <ListItem button key={sitem.id} className={classes.nested}>
                                  <ListItemIcon>
                                    <PlayArrow />
                                  </ListItemIcon>
                                  <ListItemText key={sitem.id} primary={sitem.name} />
                                </ListItem>
                              )
                            })}
                          </List>
                        </Collapse>
                      </div>
                    ) : (
                        <ListItem button onClick={this.handleClick.bind(this, item.name)} key={item.id}>
                          <ListItemIcon>
                            <PlaylistPlay />
                          </ListItemIcon>
                          <ListItemText primary={item.name} />
                        </ListItem>)}
                  </div>
                )
              })}
              <Divider key={list.id} absolute />
            </List>
          )
        })}
      </div>
    );
  }
}

SidebarList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SidebarList);