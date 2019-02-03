import React from "react";
import PlayerWidget from "./player-widget";
import './global.style.js';

const player = {
  fullName: 'Adrien Sébastien Perruchet da Silva',
  firstName: 'Adrien',
  lastName: 'Silva',
  age: '29',
  nationality: 'Potuguese',
};

const App = () => <PlayerWidget {...player} />;

export default App;
