import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { useContext } from "react";
import { PaletteContext } from "../TUIRoot/PaletteContext";

interface BackgroundProps extends React.HTMLAttributes<HTMLSpanElement> {
  color: ANSI_COLOR;
}

export function Background({
  color,
  children,
  style,
  ...props
}: BackgroundProps) {
  const palette = useContext(PaletteContext);
  return (
    <span style={{ backgroundColor: palette[color], ...style }} {...props}>
      {children}
    </span>
  );
}
