import React from "react";
import { Pagination, Row, Col } from "antd";
import "./RecipeContainer.css";
import Card from "../FoodCard/index.js";

const RecipeContainer = (props) => {
  return (
    <>
      <Row gutter={[16, 16]}>
        {props.foodData.map((meal) => {
          return (
            <Col md={6} xs={8}>
              <Card meal={meal} />
            </Col>
          );
        })}
      </Row>
      <div className="pagination-style">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </>
  );
};

export default RecipeContainer;
