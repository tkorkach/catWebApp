import React, { Component } from "react";
import Menu from "./menu/Menu";
import CheckList from "./checkList/CheckList";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getList, getItems } from "../actions/shoppingListActions";

class UpdateShoppingList extends Component {
  constructor() {
    super();
    this.state = {
      listTitle: "",
      items: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getList(id, this.props.history);
    this.props.getItems(id);
  }

  componentWillReceiveProps(nextProps) {
    const { name } = nextProps.list;
    this.setState({
      listTitle: name,
      items: nextProps.items
    });
  }

  onUpdateTitle(inputText) {
    this.setState({ listTitle: inputText });
  }

  render() {
    return (
      <div>
        <Menu
          listTitle={this.state.listTitle}
          history={this.props.history}
          id={this.props.match.params.id}
          update={true}
        />
        <CheckList
          id={this.props.match.params.id}
          updateTitle={this.onUpdateTitle.bind(this)}
          initialListTitle={this.state.listTitle}
          initialItems={this.state.items}
          update={true}
        />
      </div>
    );
  }
}

UpdateShoppingList.propTypes = {
  getList: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  list: state.list.list,
  items: state.list.items
});

export default connect(
  mapStateToProps,
  { getList, getItems }
)(UpdateShoppingList);
