import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createList } from "../../actions/shoppingListActions";

class Menu extends Component {
  saveShoppingList() {
    const newList = {
      name: this.props.listTitle
    };

    this.props.createList(newList, this.props.history);
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

Menu.propTypes = {
  createList: PropTypes.func.isRequired
};

export default connect(
  null,
  { createList }
)(Menu);
