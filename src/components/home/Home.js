import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ListOverview from "./ListOverview";
import { connect } from "react-redux";
import { getLists } from "../../actions/shoppingListActions";
import PropTypes from "prop-types";

class Home extends Component {
  componentDidMount() {
    this.props.getLists();
  }

  render() {
    return (
      <div className="home">
        <h1>Cat's shopping list</h1>
        <div className="listsOverview">
          <ListOverview />
          <ListOverview />
          <ListOverview />
          <ListOverview />
        </div>
        <Link to="/newList">
          <button className="AddButton">+ Add new shopping list</button>
        </Link>
      </div>
    );
  }
}

Home.propTypes = {
  list: PropTypes.object.isRequired,
  getLists: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  list: state.list
});

export default connect(
  mapStateToProps,
  { getLists }
)(Home);
