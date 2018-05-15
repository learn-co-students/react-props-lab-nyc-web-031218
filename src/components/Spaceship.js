// Code The Spaceship Component Here
import React from 'react'


export default class Spaceship extends React.Component {
  static defaultProps = {
    name: "SomeShit",
    speed: "slow",
    hasRockets: false,
    colors: ["black", "red"]
  }

  render(){
    return(
      <div>
        <p>name: {this.props.name}</p>
        <p>speed: {this.props.speed}</p>
        <p>Rockets?: {this.props.hasRockets}</p>
        <p>colors: {this.props.colors}</p>
      </div>
    );
  }
}


// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])
