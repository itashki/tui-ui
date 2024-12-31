export enum BORDER_TYPE {
  DOUBLE = "DOUBLE",
  SINGLE = "SINGLE",
}

export const BORDER = {
  DOUBLE: {
    TOP_LEFT: "╔",
    TOP_RIGHT: "╗",
    BOTTOM_LEFT: "╚",
    BOTTOM_RIGHT: "╝",
    VERTICAL: "║",
    HORIZONTAL: "═",
    CROSS: "╬",
    CROSS_TOP: "╦",
    CROSS_BOTTOM: "╩",
    CROSS_LEFT: "╠",
    CROSS_RIGHT: "╣",
  },
  SINGLE: {
    TOP_LEFT: "┌",
    TOP_RIGHT: "┐",
    BOTTOM_LEFT: "└",
    BOTTOM_RIGHT: "┘",
    VERTICAL: "│",
    HORIZONTAL: "─",
    CROSS: "┼",
    CROSS_TOP: "┬",
    CROSS_BOTTOM: "┴",
    CROSS_LEFT: "├",
    CROSS_RIGHT: "┤",
  },
} as const;

export const CONNECTION = {
  DOUBLE: {
    CROSS_LEFT: "╟",
    CROSS_RIGHT: "╢",
    CROSS_TOP: "╤",
    CROSS_BOTTOM: "╧",
    BOTTOM_LEFT: "╙",
    BOTTOM_RIGHT: "╜",
    TOP_LEFT: "╓",
    TOP_RIGHT: "╖",
    CROSS: "╫",
  },
  SINGLE: {
    CROSS_LEFT: "╞",
    CROSS_RIGHT: "╡",
    CROSS_TOP: "╥",
    CROSS_BOTTOM: "╨",
    BOTTOM_LEFT: "╘",
    BOTTOM_RIGHT: "╛",
    TOP_LEFT: "╒",
    TOP_RIGHT: "╕",
    CROSS: "╪",
  },
} as const;

export enum SHADE {
  LIGHT_SHADE = "░",
  MEDIUM_SHADE = "▒",
  DARK_SHADE = "▓",
}
