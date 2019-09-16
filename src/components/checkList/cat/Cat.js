import React, { Component } from "react";
import "./Cat.css";

class Cat extends Component {
  getMouthClassName() {
    if (this.props.textForCat === "beer") {
      return "Cat-mouth-smile";
    }
    if (this.props.textForCat === "broccoli") {
      return "Cat-mouth Shrink-mouth";
    } else {
      return "Cat-mouth";
    }
  }

  getPawImageSource() {
    if (this.props.textForCat === "beer") {
      return require("../../../images/catPawWithBeer.png");
    } else if (this.props.textForCat === "error") {
      return require("../../../images/catPawError.png");
    } else {
      return require("../../../images/catPaw.png");
    }
  }

  getRightPawImageSource() {
    if (this.props.textForCat === "error") {
      return require("../../../images/catPawError.png");
    } else {
      return require("../../../images/catPaw.png");
    }
  }

  getPawClassName() {
    if (this.props.textForCat === "beer") {
      return "Cat-left-paw-with-beer Move-left-paw";
    } else if (this.props.textForCat === "error") {
      return "Cat-left-paw-with-beer";
    } else {
      return "Cat-left-paw";
    }
  }

  getRightPawClassName() {
    if (this.props.textForCat === "error") {
      return "Cat-right-paw-error";
    } else {
      return "Cat-right-paw";
    }
  }

  getIrisClassName(initialClassName) {
    if (this.props.textForCat === "beer") {
      return initialClassName + " Look-at-left-paw";
    }
    if (this.props.textForCat === "broccoli") {
      return initialClassName + "-unwell";
    } else {
      return initialClassName;
    }
  }

  getEyeImageSource() {
    if (this.props.textForCat === "broccoli") {
      return require("../../../images/catEyeFeelingBad.png");
    } else {
      return require("../../../images/catEye.png");
    }
  }

  getMouthImageSource() {
    if (this.props.textForCat === "broccoli") {
      return require("../../../images/catMouthFeelingUneasy.png");
    } else if (this.props.textForCat === "error") {
      return require("../../../images/catMouthOpen.png");
    } else {
      return require("../../../images/catMouth.png");
    }
  }

  render() {
    let throwUpCmp = "";
    if (this.props.textForCat === "broccoli") {
      throwUpCmp = (
        <div>
          <img
            className="Throw-up"
            src={require("../../../images/throwUp2.png")}
          ></img>
          <img
            className="Throw-up-drop"
            src={require("../../../images/throwUp1.png")}
          ></img>
        </div>
      );
    }

    return (
      <div className="Cat">
        <img
          className="Cat-body"
          src={require("../../../images/catBody.png")}
        ></img>
        <img className="Cat-left-eye" src={this.getEyeImageSource()}></img>
        <img className="Cat-right-eye" src={this.getEyeImageSource()}></img>
        <img
          className={this.getIrisClassName("Cat-left-iris")}
          src={require("../../../images/catIris.png")}
        ></img>
        <img
          className={this.getIrisClassName("Cat-right-iris")}
          src={require("../../../images/catIris.png")}
        ></img>
        <img
          className={this.getMouthClassName()}
          src={this.getMouthImageSource()}
        ></img>
        <img
          className={this.getPawClassName()}
          src={this.getPawImageSource()}
        ></img>
        <img
          className={this.getRightPawClassName()}
          src={this.getRightPawImageSource()}
        ></img>
        <img
          className="Cat-tail"
          src={require("../../../images/catTail.png")}
        ></img>
        {throwUpCmp}
      </div>
    );
  }
}

export default Cat;
