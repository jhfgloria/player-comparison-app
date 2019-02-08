import React from 'react';
import PlayerCard from '../player-card';

const PlayerComparisonGrid = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div style={{ position: 'relative', width: window.innerWidth / 2.3 }}>
      <PlayerCard {...adrien} />
    </div>

    <div style={{ position: 'relative', width: window.innerWidth / 2.3 }}>
      <PlayerCard {...william} />
    </div>
  </div>
);

const adrien = {
  age: '29',
  club: 'Leicester',
  picture: 'https://cdn-images.rtp.pt/icm/noticias/images/a8/a81ffad540e0f06978ac72724440ded6?860&rect=0,0,1499,822&w=860',
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

const william = {
  age: '29',
  club: 'Real Betis',
  picture: 'https://d2zywfiolv4f83.cloudfront.net/img/players/99911.jpg',
  country: 'Portugal',
  firstName: 'William',
  fullName: 'William Silva de Carvalhoa',
  lastName: 'Carvalho',
  position: 'Defensive Midfielder (Center)',
  statistics: {
    appearances: { key: 'Appearances', value: 42 },
    assists: { key: 'Assists', value: 4 },
    crossesPerGame: { key: 'Crosses per game', value: 0 },
    keyPassesPerGame: { key: 'Key passes per game', value: 0.7 },
    longBallPerGame: { key: 'Long Ball per game', value: 3.9 },
    minutesPlayed: { key: 'Minutes played', value: 2529 },
    passesPerGame: { key: 'Passes per game', value: 65 },
    passSuccessPercentage: { key: 'Pass success percentage', value: 89.2 },
    throughBallPerGame: { key: 'Through ball per game', value: 0.1 },
  },
};

export default PlayerComparisonGrid;
