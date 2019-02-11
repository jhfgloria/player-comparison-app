import React from 'react';
import style from './style';
import { cx } from 'emotion';
import { marginBottom, marginTop } from '../common-style/white-space/style';
import { Stats } from '../app';

const PlayerCard = ({ firstName, lastName, club, statistics, picture }: 
  { firstName: string, lastName: string, club: string, statistics: {[key: string]: Stats}, picture: string }) => {
  return (
    <div className={style.card}>
      <section className={style.presentation}>
        <img className={style.picture} src={picture} alt="Player profile picture" />
        
        <header className={style.personal}>
          <h2 className={marginBottom('xx-small')}>{`${firstName} ${lastName}`}</h2>
          <h4 className={marginBottom('x-small')}>{club}</h4>
        </header>
      </section>

      <div className={style.information}>
        <section className={cx(style.stats, marginBottom('small'), marginTop('small'))}>
          <div>
            <p>{statistics['appearances'].value}</p>
            <h1>Games</h1>
          </div>
          <div>
            <p>{statistics['minutesPlayed'].value}</p>
            <h1>Minutes</h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlayerCard;