import { useContext } from "react";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { PaletteContext } from "lib/components/TUIRoot/PaletteContext";

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: ANSI_COLOR;
}

export function Content({
  color = ANSI_COLOR.BLACK,
  children,
  style,
  ...props
}: ContentProps) {
  const palette = useContext(PaletteContext);
  //!TODO: Implemet scrolling
  return (
    <div
      {...props}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        overflowX: "visible",
        overflowY: "clip",
        color: palette[color],
        ...style,
      }}
    >
      {children}
    </div>
  );
}
