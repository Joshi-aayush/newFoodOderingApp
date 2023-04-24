import { Fragment } from "react";
import MealImg from "../../assets/meals.jpg";
import className from "./Header.module.css";
import HeaderCardButton from "./HeaderCard";

const Header = (props) => {
  return (
    <Fragment>
      <header className={className.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <div className={className["main-image"]}>
        <img src={MealImg} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
