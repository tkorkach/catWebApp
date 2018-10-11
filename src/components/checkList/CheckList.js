import React, { Component } from 'react';
import CheckListItem from './CheckListItem'

class CheckList extends Component{
    constructor(){
        super();
        this.state = {
            numberOfItems: 3, 
            listTitle: ''
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

      updateTitle = (event) => {
        this.setState({listTitle: event.target.value})
      }

      render() {
        return (
            <div className="CheckList">
            <input type = "text"
                    value = {this.state.listTitle}
                    placeholder = "Shopping list name"
                    onChange = {this.updateTitle.bind(this)}
             />
              {this.getItemList()}
              <button onClick={this.addItem}>Add more +</button>
            </div>
        );
      }
}

export default CheckList;
