import { useState } from "react";
import { data } from "./data.js";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

import Cuisines from "./components/Cuisines";
import Rating from "./components/Rating";
import VeganOptions from "./components/VeganOptions";
import DogFriendly from "./components/DogFriendly";
import FilterMenu from "./components/FilterMenu";

const getStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "lightGrey",
    paddingTop: "1rem",
    display: "flex",
    boxSizing: "border-box",
    flexWrap: "wrap",
    alignContent: "start",
    justifyContent: "center",
    overflow: "auto",
  },
  restaurantCard: {
    width: "20vw",
    margin: "0.5rem",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

function App() {
  const classes = getStyles();

  const [restaurantFilters, setRestaurantFilters] = useState([]);
  const restaurantFilterArray = [];

  // Get all of the cuisines available and push to holding Array
  data.forEach((restaurant) => {
    restaurant.cuisine.map((cuisine) => restaurantFilterArray.push(cuisine));
  });

  // Filter to only have unique values
  const uniqueFilters = [...new Set(restaurantFilterArray)];

  return (
    <div className={classes.root}>
      <FilterMenu
        filterList={uniqueFilters}
        setRestaurantFilters={setRestaurantFilters}
        restaurantFilters={restaurantFilters}
      />
      {data.map((restaurant) => {
        return (
          // Only render the Resaurant Cards where their cuisines include all of the selected filter values
          restaurantFilters.every((filterValue) =>
            restaurant.cuisine.includes(filterValue)
          ) && (
            <Card className={classes.restaurantCard} key={restaurant.name}>
              <Typography variant="h5">{restaurant.name}</Typography>
              <CardContent>
                Address: {restaurant.address}
                <Cuisines cuisineList={restaurant.cuisine} />
                <VeganOptions hasVeganOptions={restaurant["vegan-options"]} />
                <DogFriendly dogFriendly={restaurant["dog-friendly"]} />
                <Rating rating={restaurant.rating} />
              </CardContent>
            </Card>
          )
        );
      })}
    </div>
  );
}

export default App;
