import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ButtonBase from '@material-ui/core/ButtonBase'
import CardNestList from './CardNestList'
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import CardDialogContent from './CardDialogContent';

const styles = theme => ({
  card: {
    maxWidth: '100%'
    // maxWidth: 345
  },
  cardButton: {
    display: "block",
    textAlign: "initial",
    width: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class PlaylistCard extends Component {
  state = {
    expanded: false,
    open: false
  };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handleClickOpen = () => {
    this.setState({ open: true });    
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    
    const dialog = (
      <div>
        {/* <Button onClick={this.handleClickOpen}>Open full-screen dialog</Button> */}
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Playlist Title
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                play
              </Button>
            </Toolbar>
          </AppBar>
         <CardDialogContent />
        </Dialog>
      </div>
    )

    return (
      <div>
          {dialog}
        <Card className={classes.card}>
          <ButtonBase className={classes.cardButton} onClick={this.handleClickOpen}>
          <CardMedia
            className={classes.media}
            image="https://img.youtube.com/vi/WwhyaqNtNQY/0.jpg"
            title="Playlist title"
          />
          <CardContent>
            <Typography component="p">
              Playlist description.
            </Typography>
          </CardContent>
          </ButtonBase>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <CardNestList />
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

PlaylistCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlaylistCard);
