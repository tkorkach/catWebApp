import React, { Component } from "react";
import "./CheckListItem.css";

class CheckListItem extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      checked: false,
      itemIsRemoved: false,
      textClass: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("items next props: ", nextProps);
    this.setState({
      value: nextProps.item.name,
      checked: nextProps.item.checked
    });
  }

  updateValue(event) {
    this.setState({ value: event.target.value });
    setTimeout(() => {
      this.props.updateTextForCat(this.state.value);
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

export default CheckListItem;
