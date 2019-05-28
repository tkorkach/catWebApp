import React, { Component } from 'react';
import CheckListItem from './CheckListItem'
import './CheckList.css';
import CatComponent from './cat/Cat';

class CheckList extends Component{
    constructor(){
        super();
        this.state = {
            numberOfItems: 3, 
            listTitle: '',
            textForCat: '',
          };
    }

    onCheckListItemInput(inputText){
      this.setState({textForCat: inputText})
    }

    addItem = () => {
        this.setState({numberOfItems: this.state.numberOfItems+1})
      }
    
    getItemList = () => {
        let items = []
          for (let i = 0; i < this.state.numberOfItems; i++) {
            items.push(<CheckListItem 
              updateTextForCat={this.onCheckListItemInput.bind(this)} key={i}/>)
          }
          return items
      }

    updateTitle = (event) => {
        this.setState({listTitle: event.target.value})
      }

    render() {
        return (
            <div className="CheckList">
              <div className="List">
                <input type = "text" className = "ListTitle"
                    value = {this.state.listTitle}
                    placeholder = "Shopping list name"
                    onChange = {this.updateTitle.bind(this)}
                />
                {this.getItemList()}
                <button className="AddButton" onClick={this.addItem}>Add more +</button>
            </div>
            <CatComponent textForCat={this.state.textForCat}/>
            </div>
        );
    }
}

export default CheckList;
