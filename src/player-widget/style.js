import { css } from 'glamor';

const playerWidget = css({
  border: '1px solid #e6e6e6',
  borderRadius: '.2rem',
  boxShadow: '0px 2px 4px 1px #cccccc',
  display: 'flex',
  flexDirection: 'column',
});

const playerWidgetPicture = css({
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

const playerWidgetInformation = css({
  backgroundColor: '#ebebeb',
  padding: '0.2rem 1rem 0.4rem 1rem',
});

const playerWidgetPersonalInformation = css({
  textAlign: 'center',
});

const playerWidgetStatsList = css({
  listStyle: 'none',
  padding: '0',
});

export default {
  playerWidget,
  playerWidgetInformation,
  playerWidgetStatsList,
  playerWidgetPersonalInformation,
  playerWidgetPicture,
};
