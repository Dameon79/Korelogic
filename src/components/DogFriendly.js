import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import YesIcon from "@material-ui/icons/Check";
import NoIcon from "@material-ui/icons/Clear";

const getStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
  },

  noIcon: {
    color: "red",
  },
  yesIcon: {
    color: "green",
  },
});

const DogFriendly = ({ dogFriendly }) => {
  const classes = getStyles();
  return (
    <div className={classes.root}>
      Dog friendly:
      {dogFriendly ? (
        <YesIcon className={classes.yesIcon} />
      ) : (
        <NoIcon className={classes.noIcon} />
      )}
    </div>
  );
};
export default DogFriendly;
