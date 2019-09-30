import React, { Component } from "react";
import Menu from "./menu/Menu";
import CheckList from "./checkList/CheckList";

class ShoppingList extends Component {
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
        <Menu listTitle={this.state.listTitle} history={this.props.history} />
        <CheckList
          updateTitle={this.onUpdateTitle.bind(this)}
          initialListTitle={this.state.listTitle}
        />
      </div>
    );
  }
}

export default ShoppingList;
