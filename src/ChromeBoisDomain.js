import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    drawChromeBoiAtCoords(x, y);
  }
  handleMouseClick = (e) => {
    toggleCycling();
  }
  handleKeyPress = (e) => {
    let option;
    if (e.key === "a") {
      option = "+";
    } else if (e.key === "s") {
      option = "-";
    }
    resize(option);
  }

  render() {
    return (
      <canvas
        onClick={this.handleMouseClick}
        onMouseMove={this.handleMouseMove}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
