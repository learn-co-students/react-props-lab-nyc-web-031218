// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';
class Spaceship extends React.Component {
  render() {
    return (
      <div>
      <h1>Hello {this.props.name}</h1>
      <h1>Your Speed is {this.props.speed}</h1>
      <h1>Has Rockets: {(this.props.hasRockets ? 'yes' : 'no')}</h1>
      <h1>Colors:</h1>
      <h1><ul> {this.props.colors.map(el => <li>{el}</li>)} </ul></h1>
      </div>
    )
  }
}
Spaceship.defaultProps = {
  name: 'Han Solo',
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
export default Spaceship;
