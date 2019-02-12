import { css } from "emotion";

const table = css`
  border: 1px solid #D7D8D9;
  border-radius: .1rem;
  box-shadow: 1px 2px 5px 0px #cccccc;
  box-sizing: border-box;
  padding: 10px 1rem;
  width: 100%;
`;

const attributeContainer = css`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const graphContainer = css`
  width: 100%;
  & table {
    width: 100%;
    & tr {
      text-align: center;
      & .value {
        width: 15%;
      };
      & .left-bar {
        width: 30%;
        > div {
          background-color: #ededed;
          height: 10px;
          margin-bottom: 4px;
          border: 1px solid #dedede;
          border-radius: 10px 0 0 10px;
          margin-top: 4px;
          margin-right: -2px;
          border-right: 0;
          position: relative;
          > div {
            background-color: #6CBDAD;
            position: absolute;
            height: 100%;
            right: 0;
          };
        };
      };
      & .right-bar {
        width: 30%;
        > div {
          background-color: #ededed;
          height: 10px;
          margin-bottom: 4px;
          border: 1px solid #dedede;
          border-radius: 0 10px 10px 0;
          margin-top: 4px;
          margin-left: -2px;
          border-left: 0;
          position: relative;
          > div {
            background-color: #8A4F7D;
            position: absolute;
            height: 100%;
          };
        };
      };
    };
  };
`;

export default {
  attributeContainer,
  graphContainer,
  table,
};
