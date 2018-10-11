import React, { Component } from 'react';
import CatComponent from './components/cat';
import CheckListItem from './components/checkList';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      numberOfItems: 3
    }
  }


  addItem = () => {
    this.setState({numberOfItems: this.state.numberOfItems+1})
    console.log("numberOfItems: " + this.state.numberOfItems)
  }

  getItemList = () => {
    let items = []
      for (let i = 0; i < this.state.numberOfItems; i++) {
        items.push(<CheckListItem/>)
      }
      return items
  }


  render() {
    return (
      <div className="App">
        <div className="CheckList">
          <h3>Cats Shopping List</h3>
          {this.getItemList()}
          <button onClick={this.addItem}>Add more +</button>
        </div>
        <CatComponent/>
      </div>
    );
  }
}



export default App;
