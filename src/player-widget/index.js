import React from 'react';
import { cx } from 'emotion';
import style from './style.js';
import useResponsive from '../hooks/useResponsive';
import { marginBottom } from '../common-style/white-space/style.js';

const PlayerWidget = ({ firstName, lastName, nationality, age }) => {
  const [width] = useResponsive(window.innerWidth / 3, window.innerHeight/ 3, 200, 200);

  return (
    <div style={{ width }} className={style.playerWidget}>
      <picture className={style.playerWidgetPicture}>
        <source media="(min-width: 650px)" srcSet="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p46483.png" />
        <source media="(min-width: 465px)" srcSet="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p46483.png" />
        <img src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p46483.png" alt="Player profile picture" />
      </picture>

      <div className={style.playerWidgetInformation}>
        <header className={cx(style.playerWidgetPersonalInformation, marginBottom('medium'))}>
          <h3 className={marginBottom('small')}>{`${firstName} ${lastName}`}</h3>
          <h5 className={marginBottom('small')}>Medio defensivo</h5>
          <h5>{`${nationality} | ${age} y.o.`}</h5>
        </header>

        <section>
          <ul className={style.playerWidgetStatsList}>
            <li>Relevant stat 1</li>
            <li>Relevant stat 2</li>
            <li>Relevant stat 3</li>
            <li>Relevant stat 4</li>
            <li>Relevant stat 5</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PlayerWidget;