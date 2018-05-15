import React from 'react'

class Spaceship extends React.Component{

  render () {
    return (
      <ul>
        <h1> Name: {this.props.name} </h1>
        <li>{this.props.speed}</li>
        <li>{this.props.hasRockets}</li>
        <li>{this.props.colors}</li>
      </ul>
    )
  }

}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["red", "black"]
}

export default Spaceship
