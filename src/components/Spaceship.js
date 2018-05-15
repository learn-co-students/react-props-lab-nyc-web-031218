import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component{
  render(){
    return (

      <div>

        <h1>Hi {this.props.name}</h1>
        <h1>{this.props.speed}</h1>
        <h1>{this.props.hasRockets}</h1>
        <h1>Colors: {this.props.colors.join(", ")}</h1>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  name: "SpeedRacer",
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
