import { ANSI_COLOR } from "./ANSI_COLORS";

export enum SIDE {
  TOP = "TOP",
  RIGHT = "RIGHT",
  BOTTOM = "BOTTOM",
  LEFT = "LEFT",
}

export function colorNameToCss(color: ANSI_COLOR) {
  return `var(--ansi-color-${color.toLowerCase()})`;
}
