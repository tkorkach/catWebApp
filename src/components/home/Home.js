import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ListOverview from "./ListOverview";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Cat's shopping list</h1>
        <div className="listsOverview">
          <ListOverview />
          <ListOverview />
          <ListOverview />
          <ListOverview />
        </div>
        <Link to="/newList">
          <button className="AddButton">+ Add new shopping list</button>
        </Link>
      </div>
    );
  }
}

export default Home;
