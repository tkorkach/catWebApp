import React, { Component } from 'react';
import './CheckListItem.css';

class CheckListItem extends Component {
    constructor() {
        super();
        this.state = {
          value: '',
          checked: false,
          itemIsRemoved: false,
          textClass: ''
        }
      }

      updateValue(event) {
        this.setState({ value: event.target.value })
      }
    
      updateChecked(event) {
        this.setState({ checked: event.target.checked })
        if(this.state.checked){
            this.setState({'textClass': ''})
        }
        else{
            this.setState({'textClass': 'CrossedItemText'})
        }
      }

      removeItem = (value) => {
        this.setState({itemIsRemoved: true})
      }
      
      displayItem = () => {
        if (this.state.itemIsRemoved === false) {
            return (
                <form>
                <input type="checkbox"
                    checked={this.state.checked}
                    onChange={this.updateChecked.bind(this)}
                />
                <input type="text" className = {this.state.textClass}
                    value={this.state.value}
                    placeholder = "cat food"
                    onChange={this.updateValue.bind(this)}
                />
                <button onClick={this.removeItem}>-</button>
            </form>
            )
        }
      }

    render() {
            return (
                <div className="ChecklistItem">
                    {this.displayItem()}
                </div>
            )
        }
}

export default CheckListItem;