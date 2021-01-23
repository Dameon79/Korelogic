import React, { useState } from "react";
import {
  Card,
  Button,
  Checkbox,
  CardContent,
  FormControlLabel,
  FormGroup,
  Typography,
  CardActions,
  Switch,
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
  switchState,
  setSwitchState,
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
    // Check if the filter item is already in state, if it is remove it else push into state
    const holdingArray = [...restaurantFilters];
    holdingArray.indexOf(event.target.name) === -1
      ? holdingArray.push(event.target.name)
      : holdingArray.splice(holdingArray.indexOf(event.target.name), 1);
    setRestaurantFilters([...holdingArray]);
  };

  const handleChecked = (event) => {
    toggleChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  const handleSwitchChecked = (event) => {
    setSwitchState({
      ...switchState,
      [event.target.name]: event.target.checked,
    });
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
        <div className={classes.switchContainer}>
          <FormGroup row>
            <FormControlLabel
              control={<Switch name="dog-friendly" />}
              label="Dog Friendly"
              checked={switchState["dog-friendly"]}
              onChange={handleSwitchChecked}
            />
            <FormControlLabel
              control={<Switch name="vegan-options" />}
              label="Vegan Options"
              checked={switchState["vegan-options"]}
              onChange={handleSwitchChecked}
            />
          </FormGroup>
        </div>
        <Button variant="contained" onClick={resetFilters}>
          Clear Filters
        </Button>
      </CardActions>
    </Card>
  );
};

export default FilterMenu;
