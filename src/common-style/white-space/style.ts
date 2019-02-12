import { css } from "emotion";

const marginTop = (size: string) => {
  switch (size) {
    case "xx-small": return css`margin-top: 2.5px`;
    case "x-small": return css`margin-top: 5px`;
    case "small": return css`margin-top: 10px`;
    case "medium": return css`margin-top: 20px`;
    case "large": return css`margin-top: 40px`;
    case "x-large": return css`margin-top: 60px`;
    default: throw new Error("Invalid size");
  }
};

const marginBottom = (size: string) => {
  switch (size) {
    case "xx-small": return css`margin-bottom: 2.5px`;
    case "x-small": return css`margin-bottom: 5px`;
    case "small": return css`margin-bottom: 10px`;
    case "medium": return css`margin-bottom: 20px`;
    case "large": return css`margin-bottom: 40px`;
    case "x-large": return css`margin-bottom: 60px`;
    default: throw new Error("Invalid size");
  }
};

export {
  marginBottom,
  marginTop,
};
