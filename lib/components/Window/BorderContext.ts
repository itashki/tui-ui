import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { BORDER_TYPE } from "lib/BOX_DRAWING";
import { createContext } from "react";

export const BorderContext = createContext({
  paddingLeft: 1,
  paddingRight: 1,
  borderStyle: BORDER_TYPE.SINGLE,
  borderColor: ANSI_COLOR.BLACK,
});
