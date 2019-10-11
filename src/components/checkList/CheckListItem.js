import React, { Component } from "react";
import "./CheckListItem.css";
import { connect } from "react-redux";
import { createItem, deleteItem } from "../../actions/shoppingListActions";
import PropTypes from "prop-types";

class CheckListItem extends Component {
  constructor() {
    super();
    this.timeout = 0;
    this.state = {
      id: "",
      value: "",
      checked: false,
      itemIsRemoved: false,
      textClass: ""
    };
  }

  componentWillMount() {
    this.setState({
      id: this.props.item.id,
      value: this.props.item.name,
      checked: this.props.item.checked
    });
  }

  updateValue(event) {
    this.setState({ value: event.target.value });
    /*setTimeout(() => {
      this.props.updateTextForCat(this.state.value);
    }, 1000);*/

    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.createItem(this.props.listId, { name: this.state.value });
    }, 500);
  }

  updateChecked(event) {
    this.setState({ checked: event.target.checked });
    if (this.state.checked) {
      this.setState({ textClass: "" });
    } else {
      this.setState({ textClass: "CrossedItemText" });
    }
  }

  removeItem = value => {
    this.setState({ itemIsRemoved: true });
    this.props.deleteItem(this.state.id);
  };

  displayItem = () => {
    if (this.state.itemIsRemoved === false) {
      return (
        <form>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.updateChecked.bind(this)}
          />
          <input
            type="text"
            className={this.state.textClass}
            value={this.state.value}
            placeholder="cat food"
            onChange={event => this.updateValue(event)}
          />
          <button onClick={this.removeItem}>-</button>
        </form>
      );
    }
  };

  render() {
    return <div className="ChecklistItem">{this.displayItem()}</div>;
  }
}

CheckListItem.propTypes = {
  createItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default connect(
  null,
  { createItem, deleteItem }
)(CheckListItem);
