import React from "react";
import "./Card.css";
import { Divider } from "antd";

const Card = (props) => {
  return (
    <div className="card">
      <img className="img-style" src={props.meal.recipe.image}></img>
      <div className="container">
        <h3>{props.meal.recipe.label}</h3>
        <Divider style={{ margin: "8px 0" }} />
        <div style={{ textAlign: "center" }}>
          <span>{props.meal.recipe.ingredients.length} Ingredients </span>
          <Divider type="vertical" />
          <span>{Math.round(props.meal.recipe.calories)} CAL</span>
        </div>
        <Divider style={{ margin: "8px 0" }} />
        <h5>Cooking time: {props.meal.recipe.totalTime} min</h5>
      </div>
    </div>
  );
};

export default Card;
