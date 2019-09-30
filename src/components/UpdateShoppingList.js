import React, { Component } from "react";
import Menu from "./menu/Menu";
import CheckList from "./checkList/CheckList";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getList } from "../actions/shoppingListActions";

class UpdateShoppingList extends Component {
  constructor() {
    super();
    this.state = {
      listTitle: ""
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getList(id, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    const { name } = nextProps.list;
    this.setState({
      listTitle: name
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
          updateTitle={this.onUpdateTitle.bind(this)}
          initialListTitle={this.state.listTitle}
        />
      </div>
    );
  }
}

UpdateShoppingList.propTypes = {
  getList: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  list: state.list.list
});

export default connect(
  mapStateToProps,
  { getList }
)(UpdateShoppingList);