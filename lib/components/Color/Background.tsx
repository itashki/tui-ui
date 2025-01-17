import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { colorNameToCss } from "lib/UTILS";

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
  return (
    <span
      style={{
        backgroundColor: colorNameToCss(color),
        ...style,
      }}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
}
