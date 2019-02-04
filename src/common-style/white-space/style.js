import { css } from 'emotion';

const marginTop = (size) => {
  switch (size) {
    case 'xx-small': return css({ marginTop: '2.5px' });
    case 'x-small': return css({ marginTop: '5px' });
    case 'small': return css({ marginTop: '10px' });
    case 'medium': return css({ marginTop: '20px' });
    case 'large': return css({ marginTop: '40px' });
    case 'x-large': return css({ marginTop: '60px' });
    default: throw new Error('Invalid size');
  }
};

const marginBottom = (size) => {
  switch (size) {
    case 'xx-small': return css({ marginBottom: '2.5px' });
    case 'x-small': return css({ marginBottom: '5px' });
    case 'small': return css({ marginBottom: '10px' });
    case 'medium': return css({ marginBottom: '20px' });
    case 'large': return css({ marginBottom: '40px' });
    case 'x-large': return css({ marginBottom: '60px' });
    default: throw new Error('Invalid size');
  }
};

export {
  marginBottom,
  marginTop,
};
