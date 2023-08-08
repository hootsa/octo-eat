import React, { useState } from "react";
import "./Home.css";
import Filter from "../../components/Filter/Filter";
import { Layout, Row, Input } from "antd";
import data from "../../fakeData";
import RecipeContainer from "../../components/RecipeContainer/RecipeContainer";
const { Header, Footer, Content } = Layout;
const { Search } = Input;

const DefaultSelectedUsersFilter = {
  diet: ["blanced", "high-fiber"],
  health: [],
  cuisineType: ["American"],
};

export default function Layouts() {
  const [selectedFilters, setSelectedFilters] = useState(
    DefaultSelectedUsersFilter
  );
  const [foodData, setFoodData] = useState(data);

  const onChangeFilter = (diet, health, cuisineType) => {
    const newState = { ...DefaultSelectedUsersFilter };
    //     if(newState.diet !== diet || newState.health !== health || newState.cuisineType !== cuisineType){
    // return()

    setSelectedFilters(newState);
  };
  console.log(foodData);
  return (
    <Layout>
      <Header className="header-style">
        <Row justify="center">
          <img
            className="logo-img"
            src="https://inneroctopus.files.wordpress.com/2010/04/octopus20with20tm20symbol.jpg?w=320&h=232"
          ></img>
        </Row>
        <Row justify="center">
          <h2 className="logo-name">OctoEat</h2>
        </Row>
      </Header>
      <Content className="content-style">
        <Search
          className="search-style"
          placeholder="Search recipe or ingredients"
          allowClear
          enterButton="Search"
          size="large"
          // onSearch={onSearch}
        />
        <Filter
          selectedFilters={selectedFilters}
          onChangeFilter={onChangeFilter}
        />
        <RecipeContainer foodData={foodData.hits} />
      </Content>
      <Footer className="footer-style">Copy Rigth@</Footer>
    </Layout>
  );
}
