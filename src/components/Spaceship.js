// Code The Spaceship Component Here
import React from 'react'
import ReactDOM from 'react-dom'

class SpaceShip extends React.Component{
  render() {
    return (
      <div name={this.props.name}>
      <p>Name: {this.props.name}</p>
      <p>Speed: {this.props.speed}</p>
      <p>Has Rockets?: {this.props.hasRockets}</p>
      <p>colors: {this.props.colors}</p>
      </div>
    )
  }
}

SpaceShip.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black','red']
};

export default SpaceShip;
