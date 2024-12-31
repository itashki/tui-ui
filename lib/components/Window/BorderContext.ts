import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { BORDER_TYPE } from "lib/BOX_DRAWING";
import { createContext } from "react";

export const BorderContext = createContext({
  paddingLeft: 0,
  paddingRight: 0,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  borderStyle: BORDER_TYPE.SINGLE,
  borderColor: ANSI_COLOR.BLACK,
});
