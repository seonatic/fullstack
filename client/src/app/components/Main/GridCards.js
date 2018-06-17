import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PlaylistCard from './PlaylistCard';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const GridCards = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PlaylistCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PlaylistCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PlaylistCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PlaylistCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PlaylistCard />
        </Grid>
      </Grid>
    </div>
  );
};

GridCards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GridCards);
