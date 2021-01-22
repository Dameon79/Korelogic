import React, { useState } from "react";
import {
  Card,
  Button,
  Checkbox,
  CardContent,
  FormControlLabel,
  Typography,
  CardActions,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const getStyles = makeStyles({
  root: {
    display: "flex",
    marginBottom: "0.5rem",
    padding: "0.5rem",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "88vw",
  },
  filterHeading: {
    minWidth: "100%",
    margin: "0 auto",
  },
  filterContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
});

const FilterMenu = ({
  filterList,
  setRestaurantFilters,
  restaurantFilters,
}) => {
  const defaultFilterValues = {
    Indian: false,
    Asian: false,
    Balti: false,
    Pakistani: false,
    Cafe: false,
    British: false,
    International: false,
    Steakhouse: false,
    Argentinian: false,
    Vietnamese: false,
    Bar: false,
    Pub: false,
  };

  const classes = getStyles();
  const [checked, toggleChecked] = useState(defaultFilterValues);

  const handleChange = (event) => {
    setRestaurantFilters([...restaurantFilters, event.target.name]);
  };

  const handleChecked = (event) => {
    toggleChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  const resetFilters = () => {
    toggleChecked(defaultFilterValues);
    setRestaurantFilters([]);
  };

  return (
    <Card className={classes.root}>
      <Typography className={classes.filterHeading} variant="h5">
        Filter Options
      </Typography>
      <CardContent className={classes.filterContainer}>
        {filterList.map((filter) => (
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => {
                  handleChecked(event);
                  handleChange(event);
                }}
                name={filter}
                checked={checked[filter]}
              />
            }
            label={filter}
            key={filter}
          />
        ))}
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={resetFilters}>
          Clear Filters
        </Button>
      </CardActions>
    </Card>
  );
};

export default FilterMenu;
