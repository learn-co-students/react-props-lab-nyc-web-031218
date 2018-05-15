// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render () {
    console.log(this.props.hasRockets)
    return (
      <div className="spaceship">
        <p>Name: {this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets? {this.props.hasRockets.toString()}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;
