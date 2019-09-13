import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

class Menu extends Component {
  saveShoppingList() {
    const newList = {
      name: this.props.listTitle
    };

    console.log(newList);
  }

  render() {
    return (
      <div className="container">
        <nav>
          <Link to="/">
            <button> Home </button>
          </Link>
          <button onClick={this.saveShoppingList.bind(this)}>Save</button>
          <button>Share</button>
          <button>Delete</button>
        </nav>
      </div>
    );
  }
}

export default Menu;
