import React from 'react';
import PlayerCard from '../player-card';
import style from './style';

const PlayerComparisonGrid = (props) => (
  <div className={style.grid}>
    <div className={style.slot}>
      <PlayerCard {...props.player1} />
    </div>

    <div className={style.slot}>
      <PlayerCard {...props.player2} />
    </div>
  </div>
);

export default PlayerComparisonGrid;
