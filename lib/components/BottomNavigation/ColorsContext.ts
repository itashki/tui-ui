import { createContext } from "react";
import { ANSI_COLOR } from "../../ANSI_COLORS";

export const ColorsContext = createContext<{
  hotKeyColor: ANSI_COLOR;
  hotKeyBackgroundColor: ANSI_COLOR;
  labelColor: ANSI_COLOR;
  backgroundColor: ANSI_COLOR;
}>({
  hotKeyColor: ANSI_COLOR.WHITE,
  hotKeyBackgroundColor: ANSI_COLOR.BLACK,
  labelColor: ANSI_COLOR.BLACK,
  backgroundColor: ANSI_COLOR.CYAN,
});
