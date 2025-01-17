import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { colorNameToCss } from "lib/UTILS";

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  color: ANSI_COLOR;
  ref?: React.Ref<HTMLSpanElement | null> | null;
}

export function Text({ color, children, style, ref, ...props }: TextProps) {
  return (
    <span
      style={{
        color: colorNameToCss(color),
        ...style,
      }}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
}
