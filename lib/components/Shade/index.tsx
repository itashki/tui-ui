import { useContext } from "react";
import { PaletteContext } from "../TUIRoot/PaletteContext";
import { ANSI_COLOR } from "../../ANSI_COLORS";
import { SHADE } from "../../BOX_DRAWING";

interface ShadeProps {
  color: ANSI_COLOR;
  shade: SHADE;
  height: number;
  width: number;
}

export function Shade({ color, shade, height, width }: ShadeProps) {
  const palette = useContext(PaletteContext);

  return (
    <div
      style={{
        color: palette[color],
        position: "absolute",
        top: 0,
        left: 0,
      }}
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
