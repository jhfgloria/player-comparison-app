import { injectGlobal } from "emotion";
import "roboto-npm-webfont";

// tslint:disable-next-line no-unused-expression
injectGlobal`
  body, h1, h2, h3, h4, h5, h6, p, ul {
    margin: 0;
  }

  body {
    padding: 1rem;
    font-family: 'Roboto', sans-serif;
  }
`;
