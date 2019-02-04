import { css } from 'emotion';

const playerCard = css({
  backgroundColor: '#D7D8D9',
  border: '1px solid #D7D8D9',
  borderRadius: '.1rem',
  boxShadow: '1px 2px 5px 0px #cccccc',
  display: 'flex',
  flexDirection: 'column',
});

const playerCardPicture = css({
  borderBottom: '1px solid #D7D8D9',
  width: '100%',
  height: '100%',
  '& source': {
    width: '100%',
    height: '100%',
  },
  '& img': {
    width: '100%',
    height: '100%',
  },
});

const playerCardInformation = css({
  background: 'white',
});

const playerCardPersonal = css({
  background: 'linear-gradient(to bottom,#e6e6e600 0%,#000000 100%);',
  color: 'white',
  marginTop: '-78px',
  padding: '20px 1rem 0.4rem 1rem',
  textAlign: 'center',
  '& h2': {
    fontWeight: '500',
  },
  '& h4': {
    fontWeight: '300',
  },
});

const playerCardStats = css({
  display: 'flex',
  justifyContent: 'space-around',
  '& div': {
    flex: '1',
    textAlign: 'center',
    '&:not(:nth-child(1))': {
      borderLeft: '1px solid #ededed',
    },
    '& p': {
      color: '#4CC0AD',
      fontSize: '2rem',
      fontWeight: '500',
    },
    '& h1': {
      fontWeight: '200',
    },
  },
});

export default {
  playerCard,
  playerCardInformation,
  playerCardStats,
  playerCardPersonal,
  playerCardPicture,
};
