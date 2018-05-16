// Code The Spaceship Component Here
import React from 'react';


class Spaceship extends React.Component{


  render(){
    console.log(this.props)
    return(
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors}</p>
      </div>
    )

  }

}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']

}

export default Spaceship
// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])

// class MovieCard extends React.Component {
//   render() {
//     return (
//       <div className="movie-card">
//         <img
//           src={this.props.poster}
//           alt={this.props.title}
//         />
//         <h2>{this.props.title}</h2>
//         <small>Genres: {this.props.genres.join(', ')}</small>
//       </div>
//     );
//   }
// }
