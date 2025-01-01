import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { useContext } from "react";
import { PaletteContext } from "../TUIRoot/PaletteContext";

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  color: ANSI_COLOR;
  ref?: React.Ref<HTMLSpanElement | null> | null;
}

export function Text({ color, children, style, ref, ...props }: TextProps) {
  const palette = useContext(PaletteContext);
  return (
    <span style={{ color: palette[color], ...style }} ref={ref} {...props}>
      {children}
    </span>
  );
}
