import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 470,
    height: 470,
    marginTop: 117
  },
  media: {
    height: 470,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} id="Card1">
        <CardMedia
          className={classes.media}
          image={props.img}
        />
        <p>
          {props.info}
        </p>
    </Card>
  );
}
