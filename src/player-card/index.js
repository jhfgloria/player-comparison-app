import React from 'react';
import { cx } from 'emotion';
import style from './style.js';
import { marginBottom, marginTop } from '../common-style/white-space/style.js';

const PlayerCard = ({ firstName, lastName, club, statistics }) => {
  return (
    <div className={style.playerCard}>
      <img className={style.playerCardPicture} src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p46483.png" alt="Player profile picture" />
      
      <header className={style.playerCardPersonal}>
        <h2 className={marginBottom('xx-small')}>{`${firstName} ${lastName}`}</h2>
        <h4 className={marginBottom('x-small')}>{club}</h4>
      </header>

      <div className={style.playerCardInformation}>
        <section className={cx(style.playerCardStats, marginBottom('medium'), marginTop('medium'))}>
          <div>
            <p>{statistics['appearances'].value}</p>
            <h1>Games</h1>
          </div>
          <div className={style.playerCardStatsSeparator}>
            <p>{statistics['minutesPlayed'].value}</p>
            <h1>Minutes</h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlayerCard;