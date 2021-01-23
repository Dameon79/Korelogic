import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const getStyles = makeStyles({
  root: {
    display: "flex",
    marginBottom: "0.5rem",
  },
});

const Rating = ({ rating }) => {
  const classes = getStyles();
  return <div className={classes.root}>Rating- {rating}</div>;
};
export default Rating;
