import { useContext } from "react";
import { PaletteContext } from "lib/components/TUIRoot/PaletteContext";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { SHADE } from "lib/BOX_DRAWING";

interface ShadeProps extends React.HTMLAttributes<HTMLDivElement> {
  color: ANSI_COLOR;
  shade: SHADE;
  height: number;
  width: number;
}

export function Shade({
  color,
  shade,
  height,
  width,
  style,
  ...props
}: ShadeProps) {
  const palette = useContext(PaletteContext);

  return (
    <div
      style={{
        color: palette[color],
        position: "absolute",
        top: 0,
        left: 0,
        ...style,
      }}
      {...props}
    >
      {Array.from({ length: height }, () => (
        <>
          {Array.from({ length: width }, () => shade)}
          <br />
        </>
      ))}
    </div>
  );
}
