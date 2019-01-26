import React, { Component } from 'react';
import CatComponent from './components/cat/Cat';
import CheckList from './components/checkList/CheckList';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <CheckList/>
        <CatComponent/>
      </div>
    );
  }
}



export default App;
