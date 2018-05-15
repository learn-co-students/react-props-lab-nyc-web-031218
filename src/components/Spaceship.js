import React, { Component } from 'react';
class Spaceship extends React.Component{
  render(){
    Spaceship.defaultProps = {speed: "slow", hasRockets: false, colors:['black', 'red']}
    return (
      <div>
      <h1>{this.props.name} {this.props.speed} {this.props.hasRockets} {this.props.colors}</h1>
      </div>
    )
  }
}

export default Spaceship
