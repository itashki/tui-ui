import { useContext } from "react";
import { ANSI_COLOR } from "../../ANSI_COLORS";
import { Border } from "./Border";
import { SizeContext } from "../TUIRoot/SizeContext";
import { SHADE } from "../../BOX_DRAWING";
import { PaletteContext } from "../TUIRoot/PaletteContext";

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  height: number;
  width: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  shade?: { shade: SHADE; color: ANSI_COLOR };
  backgroundColor?: ANSI_COLOR;
  shadow?: boolean;
  children: React.ReactNode;
}

//!INFO: Right and bottom has priority over left and top
export function Root({
  backgroundColor = ANSI_COLOR.WHITE,
  shade,
  height,
  width,
  top = 0,
  left = 0,
  right = 0,
  bottom = 0,
  children,
  shadow = true,
  ...props
}: RootProps) {
  const { chHeight, chWidth, tWidth, tHeight } = useContext(SizeContext);
  const palette = useContext(PaletteContext);

  if (right) {
    left = tWidth - width - right;
  }
  if (bottom) {
    top = tHeight - height - bottom;
  }

  return (
    <div
      style={{
        backgroundColor: palette[backgroundColor],
        position: "absolute",
        top: `${top * chHeight}px`,
        left: `${left * chWidth}px`,
        boxShadow: shadow
          ? `${chWidth}px ${chHeight}px ${palette[ANSI_COLOR.BLACK]}`
          : "none",
      }}
      {...props}
    >
      {shade && (
        <div
          style={{
            color: palette[shade.color],
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {Array.from({ length: height }, () => (
            <>
              {Array.from({ length: width }, () => shade.shade)}
              <br />
            </>
          ))}
        </div>
      )}
      <Border>{children}</Border>
    </div>
  );
}
