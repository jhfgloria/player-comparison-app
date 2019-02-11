import React from 'react';
import PlayerCard from '../player-card';
import style from './style';
import { Player } from '../app';

interface Props {
  playerOne: Player,
  playerTwo: Player,
};

const PlayerComparisonGrid = (props: Props) => (
  <div className={style.grid}>
    <div className={style.slot}>
      <PlayerCard {...props.playerOne} />
    </div>

    <div className={style.slot}>
      <PlayerCard {...props.playerTwo} />
    </div>
  </div>
);

export default PlayerComparisonGrid;
