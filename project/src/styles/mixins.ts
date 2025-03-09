import { css } from "@emotion/react";

export const mixinFlex = (direction: "row" | "column") => css`
  display: flex;
  flex-direction: ${direction};
  align-items: center;
  justify-content: center;
`;


export const mixinTopLevelContainer = (direction: "row" | "column") => css`
  display: flex;
  flex-direction: ${direction};
  align-items: center;
  justify-content: center;
  padding:24px;
`