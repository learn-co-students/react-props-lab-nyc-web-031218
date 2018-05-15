import React from 'react'
import ReactDOM from 'react-dom'


// Code The Spaceship Component Here
class Spaceship extends React.Component {
  render () {
    return (
      <div className="spaceship">
      <p>Name: {this.props.name}</p>
      <p>Speed: {this.props.speed}</p>
      <p>Has Rockets: {this.props.hasRockets ? "Yes" : "No"}</p>
      <p>Colors: {this.props.colors[0]} and {this.props.colors[1]}</p>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  hasRockets: false,
  speed: 'slow',
  colors: ['black', 'red']
}

export default Spaceship;
