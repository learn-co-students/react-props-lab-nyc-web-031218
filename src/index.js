import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

const colors = ['black', 'red']

Spaceship.defaultProps = {
  name:"",
  speed: "Slow",
  hasRockets: false,
  colors:['black', 'red']
}

ReactDOM.render(
  <Spaceship
    name="Millennium Falcon"
     />,
  document.getElementById('global')
);
