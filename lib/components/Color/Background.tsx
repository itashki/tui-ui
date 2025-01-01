import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { useContext } from "react";
import { PaletteContext } from "../TUIRoot/PaletteContext";

interface BackgroundProps extends React.HTMLAttributes<HTMLSpanElement> {
  color: ANSI_COLOR;
  ref?: React.Ref<HTMLSpanElement | null> | null;
}

export function Background({
  color,
  children,
  style,
  ref = null,
  ...props
}: BackgroundProps) {
  const palette = useContext(PaletteContext);
  return (
    <span
      style={{ backgroundColor: palette[color], ...style }}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
}
