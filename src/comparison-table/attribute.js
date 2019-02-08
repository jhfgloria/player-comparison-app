import React from 'react';
import style from './style.js';

const calcPercentages = (value1, value2) => {
  // I made this in order to make the graph not so flat in terms of max values
  const delta = Math.floor(Math.random() * (99 - 88 + 1) + 88) / 100;
  if (value1 > value2) return [80 * delta, ((value2 / value1) * 80) * delta];  
  if (value2 > value1) return [((value1 / value2) * 80) * delta, 80 * delta];
  if (value1 === 0 && value2 === 0) return [0, 0];
  return [80 * delta, 80 * delta];
};

const Attribute = (props) => {
  const [p1, p2] = calcPercentages(props.player1Value, props.player2Value);
  return (
    <section className={style.attributeContainer}>
      <p>{props.name}</p>
      <section className={style.graphContainer}>
        <table>
          <tbody>
            <tr>
              <td className="value">{props.player1Value}</td>
              <td className="left-bar">
                <div>
                  <div style={{ width: `${p1}%` }}></div>
                </div>
              </td>
              <td className="right-bar">
                <div>
                  <div style={{ width: `${p2}%` }}></div>
                </div>
              </td>
              <td className="value">{props.player2Value}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Attribute;
