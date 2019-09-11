import React, { Component } from 'react';
import CheckList from './components/checkList/CheckList';
import Menu from './components/menu/Menu';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Menu/>
        <CheckList/>
      </div>
    );
  }
}



export default App;
