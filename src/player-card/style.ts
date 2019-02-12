import { css } from "emotion";

const card = css`
  background-color: #D7D8D9;
  border: 1px solid #D7D8D9;
  border-radius: .1rem;
  box-shadow: 1px 2px 5px 0px #cccccc;
  display: flex;
  flex-direction: column;
  height: ${ window.innerHeight / 2 }px;
  width: 100%;
  @media (max-width: 375px) {
    height: 400px;
  };
`;

const presentation = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
`;

const picture = css`
  border-bottom: 1px solid #D7D8D9;
  height: 100%;
  object-fit: cover;
  width: 100%;
  & img {
    width: 100%;
    height: 100%;
  };
`;

const information = css`
  background: white;
`;

const personal = css`
  background: linear-gradient(to bottom,#e6e6e600 0%,#000000 100%);
  bottom: 0;
  color: white;
  position: absolute;
  text-align: center;
  width: 100%;
  & h2 {
    font-weight: 500;
  };
  & h4 {
    font-weight: 300,
  };
`;

const stats = css`
  display: flex;
  justify-content: space-around;
  & div {
    flex: 1;
    text-align: center;
    &:not(:nth-of-type(1)) {
      border-left: 1px solid #ededed;
    }
    & p {
      color: #4CC0AD;
      font-size: 2rem;
      font-weight: 500;
      @media (max-width: 375px) {
        font-size: 1.5rem;
      }
    }
    & h1 {
      font-weight: 200;
      @media (max-width: 375px) {
        font-size: 1rem;
        font-weight: 300;
      }
    }
  };
`;

export default {
  card,
  information,
  personal,
  picture,
  presentation,
  stats,
};
