import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

const colors = ['yellow', 'pink']

Spaceship.defaultProps = {
  name: "SpeedRacer",
  speed: "slow",
  hasRockets: false,
  color: ['black', 'red']
}

ReactDOM.render(
  <div>
    <Spaceship
      name="Millennium F"
      speed = "5"
      hasRockets = "true"
      color = {colors}
    />
  </div>,
  document.getElementById('global')
);
