import React, { Component } from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import UpdateShoppingList from "./components/UpdateShoppingList";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/newList" component={ShoppingList} />
            <Route
              exact
              path="/updateList/:id"
              component={UpdateShoppingList}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
