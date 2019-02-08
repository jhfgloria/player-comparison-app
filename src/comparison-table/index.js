import React from 'react';
import style from './style.js';
import Attribute from './attribute.js';

const ComparisonTable = (props) => (
  <section className={`${style.table} ${props.className}`}>
    <Attribute 
      name={props.player1.statistics['assists'].key}
      player1Value={props.player1.statistics['assists'].value}
      player2Value={props.player2.statistics['assists'].value}
    />

    <Attribute 
      name={props.player1.statistics['passesPerGame'].key}
      player1Value={props.player1.statistics['passesPerGame'].value}
      player2Value={props.player2.statistics['passesPerGame'].value}
    />

    <Attribute 
      name={props.player1.statistics['passSuccessPercentage'].key}
      player1Value={props.player1.statistics['passSuccessPercentage'].value}
      player2Value={props.player2.statistics['passSuccessPercentage'].value}
    />

    <Attribute 
      name={props.player1.statistics['keyPassesPerGame'].key}
      player1Value={props.player1.statistics['keyPassesPerGame'].value}
      player2Value={props.player2.statistics['keyPassesPerGame'].value}
    />
  </section>
);

export default ComparisonTable;
