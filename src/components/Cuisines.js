import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const getStyles = makeStyles({
  root: {
    display: "flex",
  },
  cuisineType: {
    margin: "1rem 0.2rem 1rem 0rem",
  },
});

const Cuisines = ({ cuisineList }) => {
  const classes = getStyles();
  return (
    <div className={classes.root}>
      {cuisineList.map((cuisine, index) => (
        <div
          key={`${cuisine.cuisineType}${index}`}
          className={classes.cuisineType}
        >
          {index === 0 && `Cuisine:`} {cuisine},
        </div>
      ))}
    </div>
  );
};
export default Cuisines;
