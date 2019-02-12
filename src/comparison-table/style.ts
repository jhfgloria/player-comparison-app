import { css } from 'emotion';

const table = css({
  width: '100%',
  border: '1px solid #D7D8D9',
  borderRadius: '.1rem',
  boxShadow: '1px 2px 5px 0px #cccccc',
  boxSizing: 'border-box',
  padding: '10px 1rem',
});

const attributeContainer = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
});

const graphContainer = css({
  width: '100%',
  '& table': {
    width: '100%',
    '& tr': {
      textAlign: 'center',
      '& .value': {
        width: '15%',
      },
      '& .left-bar': {
        width: '30%',
        '> div': {
          backgroundColor: '#ededed',
          height: '10px',
          marginBottom: '4px',
          border: '1px solid #dedede',
          borderRadius: '10px 0 0 10px',
          marginTop: '4px',
          marginRight: '-2px',
          borderRight: '0',
          position: 'relative',
          '> div': {
            backgroundColor: '#6CBDAD',
            position: 'absolute',
            height: '100%',
            right: '0',
          },
        },
      },
      '& .right-bar': {
        width: '30%',
        '> div': {
          backgroundColor: '#ededed',
          height: '10px',
          marginBottom: '4px',
          border: '1px solid #dedede',
          borderRadius: '0 10px 10px 0',
          marginTop: '4px',
          marginLeft: '-2px',
          borderLeft: '0',
          position: 'relative',
          '> div': {
            backgroundColor: '#8A4F7D',
            position: 'absolute',
            height: '100%',
          },
        },
      },
    },
  },
});

export default {
  attributeContainer,
  graphContainer,
  table,
};
