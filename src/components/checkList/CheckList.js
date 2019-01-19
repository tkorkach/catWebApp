import React, { Component } from 'react';
import CheckListItem from './CheckListItem'
import './CheckList.css';

class CheckList extends Component{
    constructor(){
        super();
        this.state = {
            numberOfItems: 3, 
            listTitle: '',
            textForCat: 'default cat text'
          }
    }
    //Checklist - App
    alertTextForCat(){
      this.props.alertCat(this.state.textForCat);
    }


    //CheckListItem - > CheckList
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
              alertText={this.onCheckListItemInput.bind(this)}
              onChange={this.alertTextForCat.bind(this)}/>)
          }
          return items
      }

    updateTitle = (event) => {
        this.setState({listTitle: event.target.value})
      }

      onTitleChange(event) {
        this.updateTitle(event);
        this.alertTitle()
      }

      render() {
        return (
            <div className="CheckList">
            <input type = "text" className = "ListTitle"
                    value = {this.state.listTitle}
                    placeholder = "Shopping list name"
                    onChange = {this.onTitleChange.bind(this)}
             />
              {this.getItemList()}
              <button className="AddButton" onClick={this.addItem}>Add more +</button>
            </div>
        );
      }
}

export default CheckList;
