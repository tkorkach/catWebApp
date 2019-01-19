import React, { Component } from 'react';
import CatComponent from './components/cat/Cat';
import CheckList from './components/checkList/CheckList';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
        textForCat: ''
      }
  }

  alertCatText(inputText){
    this.setState({textForCat: inputText})
    alert(this.state.textForCat);
  }

  render() {
    return (
      <div className="App">
        <CheckList alertCat={this.alertCatText.bind(this)}/>
        <CatComponent/>
      </div>
    );
  }
}



export default App;
