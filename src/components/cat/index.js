import React, { Component } from 'react';
import './Cat.css';


class Cat extends Component {
    render() {
        return (
            <div className="Cat">
                <img className="Cat-body" src={require('../../images/catBody.png')}></img> 
                <img className="Cat-left-eye" src={require('../../images/catEye.png')}></img>
                <img className="Cat-right-eye" src={require('../../images/catEye.png')}></img>
                <img className="Cat-left-iris" src={require('../../images/catIris.png')}></img>
                <img className="Cat-right-iris" src={require('../../images/catIris.png')}></img>
                <img className="Cat-mouth" src={require('../../images/catMouth.png')}></img>
                <img className="Cat-left-paw" src={require('../../images/catPaw.png')}></img>
                <img className="Cat-right-paw" src={require('../../images/catPaw.png')}></img>
                <img className="Cat-tail" src={require('../../images/catTail.png')}></img>
            </div>
        )  
    }
}

export default Cat;