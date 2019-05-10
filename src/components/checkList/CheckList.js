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
            textForCat: 'default cat text',
          };
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
              alertTextForCat={this.onCheckListItemInput.bind(this)}/>)
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
              <div className="List">
                <input type = "text" className = "ListTitle"
                    value = {this.state.listTitle}
                    placeholder = "Shopping list name"
                    onChange = {this.onTitleChange.bind(this)}
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
