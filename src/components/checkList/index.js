import React, { Component } from 'react';

class CheckListItem extends Component {
    constructor() {
        super();
        this.state = {
          value: '',
          checked: false,
          itemIsRemoved: false
        }
      }

      updateValue(event) {
        this.setState({ value: event.target.value })
      }
    
      updateChecked(event) {
        this.setState({ checked: event.target.checked })
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
                <input type="text"
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