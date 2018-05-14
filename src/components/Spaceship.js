import React from 'react'

class Spaceship extends React.Component {
  static defaultProps = {
    speed: 'slow',
    colors: ['black', 'red'],
    hasRockets: false
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p><strong>Speed:</strong> {this.props.speed}</p>
        <p><strong>Colors:</strong> {this.props.colors.join(', ')}</p>
        {this.props.hasRockets ? <p>Rockets Available</p> : <p>No Rockets Available</p>}
      </div>
    )
  }
}

export default Spaceship
