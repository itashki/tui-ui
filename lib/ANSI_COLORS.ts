export type ANSI_COLORS = Readonly<{
  BLACK: string;
  RED: string;
  GREEN: string;
  YELLOW: string;
  BLUE: string;
  MAGENTA: string;
  CYAN: string;
  WHITE: string;
  BRIGHT_BLACK: string;
  BRIGHT_RED: string;
  BRIGHT_GREEN: string;
  BRIGHT_YELLOW: string;
  BRIGHT_BLUE: string;
  BRIGHT_MAGENTA: string;
  BRIGHT_CYAN: string;
  BRIGHT_WHITE: string;
}>;
export enum ANSI_COLOR {
  BLACK = "BLACK",
  RED = "RED",
  GREEN = "GREEN",
  YELLOW = "YELLOW",
  BLUE = "BLUE",
  MAGENTA = "MAGENTA",
  CYAN = "CYAN",
  WHITE = "WHITE",
  BRIGHT_BLACK = "BRIGHT_BLACK",
  BRIGHT_RED = "BRIGHT_RED",
  BRIGHT_GREEN = "BRIGHT_GREEN",
  BRIGHT_YELLOW = "BRIGHT_YELLOW",
  BRIGHT_BLUE = "BRIGHT_BLUE",
  BRIGHT_MAGENTA = "BRIGHT_MAGENTA",
  BRIGHT_CYAN = "BRIGHT_CYAN",
  BRIGHT_WHITE = "BRIGHT_WHITE",
}

//!INFO: used by default
export const ANSI_COLORS_VGA = {
  BLACK: "rgb(0, 0, 0)",
  RED: "rgb(170, 0, 0)",
  GREEN: "rgb(0, 170, 0)",
  YELLOW: "rgb(170, 85, 0)",
  BLUE: "rgb(0, 0, 170)",
  MAGENTA: "rgb(170, 0, 170)",
  CYAN: "rgb(0, 170, 170)",
  WHITE: "rgb(170, 170, 170)",
  BRIGHT_BLACK: "rgb(85, 85, 85)",
  BRIGHT_RED: "rgb(255, 85, 85)",
  BRIGHT_GREEN: "rgb(85, 255, 85)",
  BRIGHT_YELLOW: "rgb(255, 255, 85)",
  BRIGHT_BLUE: "rgb(85, 85, 255)",
  BRIGHT_MAGENTA: "rgb(255, 85, 255)",
  BRIGHT_CYAN: "rgb(85, 255, 255)",
  BRIGHT_WHITE: "rgb(255, 255, 255)",
} as ANSI_COLORS;

export const ANSI_COLORS_XP = {
  BLACK: "rgb(0, 0, 0)",
  RED: "rgb(128, 0, 0)",
  GREEN: "rgb(0, 128, 0)",
  YELLOW: "rgb(128, 128, 0)",
  BLUE: "rgb(0, 0, 128)",
  MAGENTA: "rgb(128, 0, 128)",
  CYAN: "rgb(0, 128, 128)",
  WHITE: "rgb(192, 192, 192)",
  BRIGHT_BLACK: "rgb(128, 128, 128)",
  BRIGHT_RED: "rgb(255, 0, 0)",
  BRIGHT_GREEN: "rgb(0, 255, 0)",
  BRIGHT_YELLOW: "rgb(255, 255, 0)",
  BRIGHT_BLUE: "rgb(0, 0, 255)",
  BRIGHT_MAGENTA: "rgb(255, 0, 255)",
  BRIGHT_CYAN: "rgb(0, 255, 255)",
  BRIGHT_WHITE: "rgb(255, 255, 255)",
} as ANSI_COLORS;

export const ANSI_COLORS_POWER_SHELL = {
  ...ANSI_COLORS_XP,
  YELLOW: "rgb(238, 237, 240)",
  MAGENTA: "rgb(1, 36, 86)",
} as ANSI_COLORS;

export const ANSI_COLORS_UBUNTU = {
  BLACK: "rgb(1, 1, 1)",
  RED: "rgb(222, 56, 43)",
  GREEN: "rgb(57, 181, 74)",
  YELLOW: "rgb(255, 199, 6)",
  BLUE: "rgb(0, 111, 184)",
  MAGENTA: "rgb(118, 38, 113)",
  CYAN: "rgb(44, 181, 233)",
  WHITE: "rgb(204, 204, 204)",
  BRIGHT_BLACK: "rgb(128, 128, 128)",
  BRIGHT_RED: "rgb(255, 0, 0)",
  BRIGHT_GREEN: "rgb(0, 255, 0)",
  BRIGHT_YELLOW: "rgb(255, 255, 0)",
  BRIGHT_BLUE: "rgb(0, 0, 255)",
  BRIGHT_MAGENTA: "rgb(255, 0, 255)",
  BRIGHT_CYAN: "rgb(0, 255, 255)",
  BRIGHT_WHITE: "rgb(255, 255, 255)",
} as ANSI_COLORS;

export const ANSI_COLORS_XTERM = {
  BLACK: "rgb(0, 0, 0)",
  RED: "rgb(205, 0, 0)",
  GREEN: "rgb(0, 205, 0)",
  YELLOW: "rgb(205, 205, 0)",
  BLUE: "rgb(0, 0, 238)",
  MAGENTA: "rgb(205, 0, 205)",
  CYAN: "rgb(0, 205, 205)",
  WHITE: "rgb(229, 229, 229)",
  BRIGHT_BLACK: "rgb(127, 127, 127)",
  BRIGHT_RED: "rgb(255, 0, 0)",
  BRIGHT_GREEN: "rgb(0, 255, 0)",
  BRIGHT_YELLOW: "rgb(255, 255, 0)",
  BRIGHT_BLUE: "rgb(92, 92, 255)",
  BRIGHT_MAGENTA: "rgb(255, 0, 255)",
  BRIGHT_CYAN: "rgb(0, 255, 255)",
  BRIGHT_WHITE: "rgb(255, 255, 255)",
} as ANSI_COLORS;
