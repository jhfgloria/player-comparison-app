import React from "react";
import { IPlayer } from "../app";
import Attribute from "./attribute";
import style from "./style";

interface IProps {
  className: string;
  playerOne: IPlayer;
  playerTwo: IPlayer;
}

const ComparisonTable = (props: IProps) => (
  <section className={`${style.table} ${props.className}`}>
    <Attribute
      attributeName={props.playerOne.statistics.assists.key}
      valueOne={props.playerOne.statistics.assists.value}
      valueTwo={props.playerTwo.statistics.assists.value}
    />

    <Attribute
      attributeName={props.playerOne.statistics.passesPerGame.key}
      valueOne={props.playerOne.statistics.passesPerGame.value}
      valueTwo={props.playerTwo.statistics.passesPerGame.value}
    />

    <Attribute
      attributeName={props.playerOne.statistics.passSuccessPercentage.key}
      valueOne={props.playerOne.statistics.passSuccessPercentage.value}
      valueTwo={props.playerTwo.statistics.passSuccessPercentage.value}
    />

    <Attribute
      attributeName={props.playerOne.statistics.keyPassesPerGame.key}
      valueOne={props.playerOne.statistics.keyPassesPerGame.value}
      valueTwo={props.playerTwo.statistics.keyPassesPerGame.value}
    />
  </section>
);

export default ComparisonTable;
