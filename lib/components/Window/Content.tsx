import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { colorNameToCss } from "lib/UTILS";

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: ANSI_COLOR;
  ref?: React.RefObject<HTMLDivElement | null> | null;
}

export function Content({
  color = ANSI_COLOR.BLACK,
  children,
  style,
  ref = null,
  ...props
}: ContentProps) {

  //!TODO: Implement scrolling
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        overflow: "visible",
        color: colorNameToCss(color),
        ...style,
      }}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
}
