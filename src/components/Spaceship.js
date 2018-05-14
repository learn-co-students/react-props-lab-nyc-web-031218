// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <p> {this.props.name}</p>
        <p> {this.props.speed}</p>
        <p> {this.props.hasRockets}</p>
        <p> {this.props.colors.join(', ')}</p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png',
  name: '',
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
