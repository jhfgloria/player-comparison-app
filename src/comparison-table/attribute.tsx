import React from "react";
import style from "./style";

const calcPercentages = (valueOne: number, valueTwo: number): [number, number] => {
  // I made this delta in order to make the graph not so flat in terms of max values
  const delta = Math.floor(Math.random() * (99 - 88 + 1) + 88) / 100;
  if (valueOne > valueTwo) { return [80 * delta, ((valueTwo / valueOne) * 80) * delta]; }
  if (valueTwo > valueOne) { return [((valueOne / valueTwo) * 80) * delta, 80 * delta]; }
  if (valueOne === 0 && valueTwo === 0) { return [0, 0]; }
  return [80 * delta, 80 * delta];
};

interface IProps {
  attributeName: string;
  valueOne: number;
  valueTwo: number;
}

const Attribute = (props: IProps) => {
  const [p1, p2] = calcPercentages(props.valueOne, props.valueTwo);
  return (
    <section className={style.attributeContainer}>
      <p>{props.attributeName}</p>
      <section className={style.graphContainer}>
        <table>
          <tbody>
            <tr>
              <td className="value">{props.valueOne}</td>
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
              <td className="value">{props.valueTwo}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Attribute;
