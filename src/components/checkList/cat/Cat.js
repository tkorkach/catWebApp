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
        if (this.props.textForCat === 'beer'){
            this.setState({'mouthClass': 'Cat-mouth-smile'})
        }
    }  

    getMouthClassName() {
        if (this.props.textForCat === 'beer'){   
            return 'Cat-mouth-smile';
        }
        else{
            return 'Cat-mouth';
        }
    }

    getPawImageSource() {
        if (this.props.textForCat === 'beer'){   
            return require('../../../images/catPawWithBeer.png');
        }
        else{
            return require('../../../images/catPaw.png');
        }
    }

    getPawClassName() {
        if (this.props.textForCat === 'beer'){   
            return 'Cat-left-paw-with-beer Move-left-paw';
        }
        else{
            return 'Cat-left-paw';
        }
    }

    getIrisClassName(initialClassName) {
        if (this.props.textForCat === 'beer'){   
            return initialClassName + ' Look-at-left-paw';
        }
        else{
            return initialClassName;
        }
    }


    render() {
        return (
            <div className="Cat" onClick={this.smile.bind(this)}>
                <img className="Cat-body" src={require('../../../images/catBody.png')}></img> 
                <img className="Cat-left-eye" src={require('../../../images/catEye.png')}></img>
                <img className="Cat-right-eye" src={require('../../../images/catEye.png')}></img>
                <img className={this.getIrisClassName("Cat-left-iris")} src={require('../../../images/catIris.png')}></img>
                <img className={this.getIrisClassName("Cat-right-iris")} src={require('../../../images/catIris.png')}></img>
                <img className={this.getMouthClassName()} src={require('../../../images/catMouth.png')}></img>
                <img className={this.getPawClassName()} src={this.getPawImageSource()}></img>
                <img className="Cat-right-paw" src={require('../../../images/catPaw.png')}></img>
                <img className="Cat-tail" src={require('../../../images/catTail.png')}></img>
            </div>
        )  
    }
}

export default Cat;