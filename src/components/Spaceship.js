// Code The Spaceship Component Here
import React from 'react';


class Spaceship extends React.Component {
  render() {
    return (
      <div className ="space-ship">
        <h3>{this.props.name}</h3>
        <h4>{this.props.speed}</h4>
        <h4>{this.props.hasRockets}</h4>
        <h4>{this.props.colors}</h4>
      </div>
    );
  }
}


Spaceship.defaultProps = {
  name:"",
  speed: "slow",
  hasRockets: false,
  colors:['black', 'red']
}


export default Spaceship;
