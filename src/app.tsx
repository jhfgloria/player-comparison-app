import React from "react";
import { marginTop } from "./common-style/white-space/style";
import ComparisonTable from "./comparison-table";
import "./global.style";
import PlayerComparisonGrid from "./player-comparison-grid";

interface IStats {
  key: string;
  value: number;
}

interface IPlayer {
  age: number;
  club: string;
  picture: string;
  country: string;
  firstName: string;
  fullName: string;
  lastName: string;
  position: string;
  statistics: { [key: string]: IStats };
}

const adrien: IPlayer = {
  age: 29,
  club: "Leicester",
  country: "Portugal",
  firstName: "Adrien",
  fullName: "Adrien Sébastien Perruchet da Silva",
  lastName: "Silva",
  picture: "https://cdn-images.rtp.pt/icm/noticias/images/a8/a81ffad540e0f06978ac72724440ded6?860&rect=0,0,1499,822&w=860",
  position: "Midfielder (Centre)",
  statistics: {
    appearances: { key: "Appearances", value: 11 },
    assists: { key: "Assists", value: 1 },
    crossesPerGame: { key: "Crosses per game", value: 0 },
    keyPassesPerGame: { key: "Key passes per game", value: 0.3 },
    longBallPerGame: { key: "Long Ball per game", value: 4 },
    minutesPlayed: { key: "Minutes played", value: 262 },
    passSuccessPercentage: { key: "Pass success percentage", value: 82.8 },
    passesPerGame: { key: "Passes per game", value: 42.3 },
    throughBallPerGame: { key: "Through ball per game", value: 0 },
  },
};

const william: IPlayer = {
  age: 29,
  club: "Real Betis",
  country: "Portugal",
  firstName: "William",
  fullName: "William Silva de Carvalhoa",
  lastName: "Carvalho",
  picture: "https://www.mcfcwatch.com/wp-content/uploads/2016/12/william-carvalho-sporting.jpg",
  position: "Defensive Midfielder (Center)",
  statistics: {
    appearances: { key: "Appearances", value: 42 },
    assists: { key: "Assists", value: 4 },
    crossesPerGame: { key: "Crosses per game", value: 0 },
    keyPassesPerGame: { key: "Key passes per game", value: 0.7 },
    longBallPerGame: { key: "Long Ball per game", value: 3.9 },
    minutesPlayed: { key: "Minutes played", value: 2529 },
    passSuccessPercentage: { key: "Pass success percentage", value: 89.2 },
    passesPerGame: { key: "Passes per game", value: 65 },
    throughBallPerGame: { key: "Through ball per game", value: 0.1 },
  },
};

const App = () => (
  <React.Fragment>
    <PlayerComparisonGrid playerOne={adrien} playerTwo={william} />
    <ComparisonTable playerOne={adrien} playerTwo={william} className={marginTop("small")} />
  </React.Fragment>
);

export default App;
export { IPlayer, IStats };
