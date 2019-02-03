import { injectGlobal } from 'emotion';
import 'roboto-npm-webfont';

injectGlobal`
  body, h1, h2, h3, h4, h5, p, ul { 
    margin: 0 ;
  }

  body { 
    font-family: 'Roboto', sans-serif;
  }
`;
