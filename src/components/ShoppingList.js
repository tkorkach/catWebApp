import React, { Component } from "react";
import Menu from "./menu/Menu";
import CheckList from "./checkList/CheckList";

export default class ShoppingList extends Component {
  constructor() {
    super();
    this.state = {
      listTitle: ""
    };
  }

  onUpdateTitle(inputText) {
    this.setState({ listTitle: inputText });
  }

  render() {
    return (
      <div>
        <Menu listTitle={this.state.listTitle} />
        <CheckList updateTitle={this.onUpdateTitle.bind(this)} />
      </div>
    );
  }
}
