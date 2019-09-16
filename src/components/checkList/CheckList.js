import React, { Component } from "react";
import CheckListItem from "./CheckListItem";
import "./CheckList.css";
import CatComponent from "./cat/Cat";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createList } from "../../actions/shoppingListActions";

class CheckList extends Component {
  constructor() {
    super();
    this.state = {
      numberOfItems: 3,
      listTitle: "",
      textForCat: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors, textForCat: "error" });
    }
  }

  onCheckListItemInput(inputText) {
    this.setState({ textForCat: inputText });
  }

  addItem = () => {
    this.setState({ numberOfItems: this.state.numberOfItems + 1 });
  };

  getItemList = () => {
    let items = [];
    for (let i = 0; i < this.state.numberOfItems; i++) {
      items.push(
        <CheckListItem
          updateTextForCat={this.onCheckListItemInput.bind(this)}
          key={i}
        />
      );
    }
    return items;
  };

  updateTitle = event => {
    this.setState({ listTitle: event.target.value });

    setTimeout(() => {
      this.props.updateTitle(this.state.listTitle);
    }, 500);
  };

  getTitleClassName() {
    if (this.state.errors.name) {
      return "ListTitleInvalid";
    } else {
      return "ListTitle";
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="CheckList">
        <div className="List">
          <input
            type="text"
            className={this.getTitleClassName.bind(this)()}
            value={this.state.listTitle}
            name="name"
            placeholder="Shopping list name"
            onChange={this.updateTitle.bind(this)}
          />
          <div className="inputError">{errors.name}</div>
          {this.getItemList()}
          <button className="AddButton" onClick={this.addItem}>
            Add more +
          </button>
        </div>
        <CatComponent textForCat={this.state.textForCat} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createList }
)(CheckList);
