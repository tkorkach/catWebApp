import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  createOrUpdateList,
  deleteList
} from "../../actions/shoppingListActions";

class Menu extends Component {
  deleteShoppingList() {
    this.props.deleteList(this.props.id, this.props.history);
  }

  render() {
    return (
      <div className="container">
        <nav>
          <Link to="/">
            <button> Home </button>
          </Link>
          <button>Share</button>
          <button onClick={this.deleteShoppingList.bind(this)}>Delete</button>
        </nav>
      </div>
    );
  }
}

Menu.propTypes = {
  createOrUpdateList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired
};

export default connect(
  null,
  { createOrUpdateList, deleteList }
)(Menu);
