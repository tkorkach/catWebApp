import React, { Component } from 'react';
import './Cat.css';


class Cat extends Component {
    constructor() {
        super();
        this.state = {
          mouthClass: 'Cat-mouth'
        }
      }

    smile(){
        this.setState({'mouthClass': 'Cat-mouth-smile'})
    }  

    render() {
        return (
            <div className="Cat" onClick={this.smile.bind(this)}>
                <img className="Cat-body" src={require('../../../images/catBody.png')}></img> 
                <img className="Cat-left-eye" src={require('../../../images/catEye.png')}></img>
                <img className="Cat-right-eye" src={require('../../../images/catEye.png')}></img>
                <img className="Cat-left-iris" src={require('../../../images/catIris.png')}></img>
                <img className="Cat-right-iris" src={require('../../../images/catIris.png')}></img>
                <img className={this.state.mouthClass} src={require('../../../images/catMouth.png')}></img>
                <img className="Cat-left-paw" src={require('../../../images/catPaw.png')}></img>
                <img className="Cat-right-paw" src={require('../../../images/catPaw.png')}></img>
                <img className="Cat-tail" src={require('../../../images/catTail.png')}></img>
            </div>
        )  
    }
}

export default Cat;