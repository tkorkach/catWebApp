import React, { Component } from 'react';
import './Menu.css';


class Menu extends Component {
    render() {
        return (
            <div class="container">
                <nav>
                    <button>Open</button>
                     <button>Save</button>
                     <button>Share</button> 
                </nav>
            </div>
        );
    }
}

export default Menu;