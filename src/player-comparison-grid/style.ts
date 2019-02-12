import { css } from "emotion";

const grid = css`
  display: flex;
  justify-content: space-between;
`;

const slot = css`
  position: relative;
  width: ${window.innerWidth / 2.3};
`;

export default {
  grid,
  slot,
};
