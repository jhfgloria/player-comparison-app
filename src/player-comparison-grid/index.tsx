import React from "react";
import { IPlayer } from "../app";
import PlayerCard from "../player-card";
import style from "./style";

interface IProps {
  playerOne: IPlayer;
  playerTwo: IPlayer;
}

const PlayerComparisonGrid = (props: IProps) => (
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
