// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>Spaceship:</h1>
        <h3>Name: {this.props.name}</h3>
        <h3>Speed: {this.props.speed}</h3>
        <h3>hasRockets: {this.props.hasRockets}</h3>
        <h3>Colors: {this.props.colors}</h3>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;
