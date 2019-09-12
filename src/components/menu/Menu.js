import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div class="container">
        <nav>
          <Link to="/">
            <button> Home </button>
          </Link>
          <button>Save</button>
          <button>Share</button>
          <button>Delete</button>
        </nav>
      </div>
    );
  }
}

export default Menu;
