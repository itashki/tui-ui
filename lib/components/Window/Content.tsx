import { useContext } from "react";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { PaletteContext } from "lib/components/TUIRoot/PaletteContext";

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
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
  const palette = useContext(PaletteContext);
  //!TODO: Implement scrolling
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        overflow: "visible",
        color: palette[color],
        ...style,
      }}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
}
