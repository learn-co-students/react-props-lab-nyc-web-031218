import React from 'react';
import ReactDOM from 'react-dom';


// Code The Spaceship Component Here
export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="name">{this.props.name}
        <div className="speed">{this.props.speed}</div>
        <div className="rockets">{this.props.hasRockets}</div>
        <div className="colors">{this.props.colors}</div>
      </div>
    )
  }
}

// refer to the props NOT THE CLASS NAME!!!!!!! //
Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors : ['black','red']
};
