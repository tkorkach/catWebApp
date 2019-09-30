import React, { Component } from "react";
import "./ListOverview.css";
import { Link } from "react-router-dom";

class ListOverview extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="listTile">
        <Link to={`/updateList/${list.id}`}>
          <h2>{list.name}</h2>
        </Link>
      </div>
    );
  }
}

export default ListOverview;
