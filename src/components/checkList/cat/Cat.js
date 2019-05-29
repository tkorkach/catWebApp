import React, { Component } from 'react';
import './Cat.css';


class Cat extends Component {

    getMouthClassName() {
        if (this.props.textForCat === 'beer'){   
            return 'Cat-mouth-smile';
        }
        if (this.props.textForCat === 'broccoli') {
            return  'Cat-mouth Open-mouth'
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
        if (this.props.textForCat === 'broccoli'){
            return initialClassName + '-unwell'
        }
        else{
            return initialClassName;
        }
    }

    getEyeImageSource(){
        if (this.props.textForCat === 'broccoli'){   
            return require('../../../images/catEyeFeelingBad.png');
        }
        else{
            return require('../../../images/catEye.png');
        }
    }

    getMouthImageSource(){
        if (this.props.textForCat === 'broccoli'){   
            return require('../../../images/catMouthFeelingUneasy.png');
        }
        else{
            return require('../../../images/catMouth.png');
        }
    }



    render() {
        return (
            <div className="Cat">
                <img className="Cat-body" src={require('../../../images/catBody.png')}></img> 
                <img className="Cat-left-eye" src={this.getEyeImageSource()}></img>
                <img className="Cat-right-eye" src={this.getEyeImageSource()}></img>
                <img className={this.getIrisClassName("Cat-left-iris")} src={require('../../../images/catIris.png')}></img>
                <img className={this.getIrisClassName("Cat-right-iris")} src={require('../../../images/catIris.png')}></img>
                <img className={this.getMouthClassName()} src={this.getMouthImageSource()}></img>
                <img className={this.getPawClassName()} src={this.getPawImageSource()}></img>
                <img className="Cat-right-paw" src={require('../../../images/catPaw.png')}></img>
                <img className="Cat-tail" src={require('../../../images/catTail.png')}></img>
            </div>
        )  
    }
}

export default Cat;