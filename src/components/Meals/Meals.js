import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeal";
import { Fragment } from "react";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
