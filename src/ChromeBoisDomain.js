import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {


  handleMouseMove = (e) => {
    let x = e.clientX
    let y = e.clientY
    return drawChromeBoiAtCoords(x, y)
  //this function is being called in the canvas element THAT is being created
  //by this component's render() (& return())
  }

  handleOnClick = () => {
    return toggleCycling()
  }
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */

   handleOnKeyDown = (e) => {
     let arg;
     if (e.key === "a") {
       console.log(e.key)
       arg = "+"
       return resize(arg);
     } else if (e.key === "s") {
       console.log(e.key)
       arg = "-"
       return resize(arg);
     }
   }
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-'
   */

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleOnClick}
        onKeyDown={this.handleOnKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
