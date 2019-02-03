import { css } from 'emotion';

const marginTop = (size) => {
  switch (size) {
    case 'small': return css({ marginTop: '10px' });
    case 'medium': return css({ marginTop: '20px' });
    case 'large': return css({ marginTop: '40px' });
    default: throw new Error('Invalid size');
  }
};

const marginBottom = (size) => {
  switch (size) {
    case 'small': return css({ marginBottom: '10px' });
    case 'medium': return css({ marginBottom: '20px' });
    case 'large': return css({ marginBottom: '40px' });
    default: throw new Error('Invalid size');
  }
};

export {
  marginBottom,
  marginTop,
};
