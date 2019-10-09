import React, { Component } from "react";
import Menu from "./menu/Menu";
import CheckList from "./checkList/CheckList";

class ShoppingList extends Component {
  constructor() {
    super();
    this.state = {
      listTitle: "",
      items: [
        {
          id: 11,
          name: "",
          checked: false
        },
        {
          id: 12,
          name: "",
          checked: false
        },
        {
          id: 13,
          name: "",
          checked: false
        }
      ]
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
          initialItems={this.state.items}
        />
      </div>
    );
  }
}

export default ShoppingList;
