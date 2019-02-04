import React from 'react';
import PlayerCard from '../player-card';

const player = {
  age: '29',
  club: 'Leicester',
  country: 'Portugal',
  firstName: 'Adrien',
  fullName: 'Adrien Sébastien Perruchet da Silva',
  lastName: 'Silva',
  position: 'Midfielder (Centre)',
  statistics: {
    appearances: { key: 'Appearances', value: 11 },
    assists: { key: 'Assists', value: 1 },
    crossesPerGame: { key: 'Crosses per game', value: 0 },
    keyPassesPerGame: { key: 'Key passes per game', value: 0.3 },
    longBallPerGame: { key: 'Long Ball per game', value: 4 },
    minutesPlayed: { key: 'Minutes played', value: 262 },
    passesPerGame: { key: 'Passes per game', value: 42.3 },
    passSuccessPercentage: { key: 'Pass success percentage', value: 82.8 },
    throughBallPerGame: { key: 'Through ball per game', value: 0 },
  },
};

const PlayerComparisonGrid = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div style={{ width: window.innerWidth / 2.3 }}>
      <PlayerCard {...player} />
    </div>

    <div style={{ width: window.innerWidth / 2.3 }}>
      <PlayerCard {...player} />
    </div>
  </div>
);

export default PlayerComparisonGrid;
