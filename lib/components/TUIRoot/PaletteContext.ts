import { createContext } from "react";
import { ANSI_COLORS, ANSI_COLORS_VGA } from "lib/ANSI_COLORS";

export const PaletteContext = createContext<ANSI_COLORS>(ANSI_COLORS_VGA);
