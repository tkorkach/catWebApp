import React, { Component } from "react";
import Menu from "./menu/Menu";
import CheckList from "./checkList/CheckList";

export default class ShoppingList extends Component {
  render() {
    return (
      <div>
        <Menu />
        <CheckList />
      </div>
    );
  }
}
