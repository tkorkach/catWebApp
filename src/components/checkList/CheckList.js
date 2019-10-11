import React, { Component } from "react";
import CheckListItem from "./CheckListItem";
import "./CheckList.css";
import CatComponent from "./cat/Cat";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createOrUpdateList } from "../../actions/shoppingListActions";

class CheckList extends Component {
  constructor() {
    super();
    this.timeout = 0;
    this.state = {
      listTitle: "",
      listId: "",
      textForCat: "",
      errors: {},
      items: []
      //items: props.initialItems
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors, textForCat: "error" });
    }
    this.setState({
      listTitle: nextProps.initialListTitle,
      listId: nextProps.id,
      textForCat: "",
      items: nextProps.initialItems
    });
  }

  onCheckListItemInput(inputText) {
    this.setState({ textForCat: inputText });
  }

  addItem = () => {
    const items = this.state.items;
    var uniqueId = "x" + items.length;
    this.setState({
      items: items.push({
        id: uniqueId,
        name: "",
        checked: false
      })
    });
    console.log("items after add: ", items);
  };

  getItemList = () => {
    const items = this.state.items;
    while (items.length < 3) {
      var uniqueId = "x" + items.length;
      items.push({ id: uniqueId, name: "", checked: false });
    }
    return (
      <div className="itemList">
        {items.map(item => (
          <CheckListItem key={item.id} item={item} listId={this.state.listId} />
        ))}
      </div>
    );
  };

  updateTitle = event => {
    this.setState({ listTitle: event.target.value });

    setTimeout(() => {
      this.props.updateTitle(this.state.listTitle);
    }, 500);

    const list = {
      name: this.state.listTitle
    };

    if (this.props.update) {
      list.id = this.props.id;
    }

    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.createOrUpdateList(list);
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

CheckList.propTypes = {
  createOrUpdateList: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createOrUpdateList }
)(CheckList);
