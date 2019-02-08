import { css } from 'emotion';
import { media } from 'glamor';

const card = css({
  backgroundColor: '#D7D8D9',
  border: '1px solid #D7D8D9',
  borderRadius: '.1rem',
  boxShadow: '1px 2px 5px 0px #cccccc',
  display: 'flex',
  flexDirection: 'column',
  height: window.innerHeight / 2,
  width: '100%',
  '@media (max-width: 375px)': {
    height: '400px',
  },
});

const presentation = css({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  position: 'relative',
});

const picture = css({
  borderBottom: '1px solid #D7D8D9',
  height: '100%',
  objectFit: 'cover',
  width: '100%',
  '& img': {
    width: '100%',
    height: '100%',
  },
});

const information = css({
  background: 'white',
});

const personal = css({
  position: 'absolute',
  width: '100%',
  bottom: '0',
  background: 'linear-gradient(to bottom,#e6e6e600 0%,#000000 100%)',
  color: 'white',
  textAlign: 'center',
  '& h2': {
    fontWeight: '500',
  },
  '& h4': {
    fontWeight: '300',
  },
});

const stats = css({
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
      '@media (max-width: 375px)': {
        fontSize: '1.5rem',
      },
    },
    '& h1': {
      fontWeight: '200',
      '@media (max-width: 375px)': {
        fontSize: '1rem',
        fontWeight: '300',
      },
    },
  },
});

export default {
  card,
  presentation,
  information,
  stats,
  personal,
  picture,
};
