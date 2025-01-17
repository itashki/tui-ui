import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { SHADE } from "lib/BOX_DRAWING";
import { colorNameToCss } from "lib/UTILS";

interface ShadeProps extends React.HTMLAttributes<HTMLDivElement> {
  color: ANSI_COLOR;
  shade: SHADE;
  height: number;
  width: number;
  ref?: React.Ref<HTMLDivElement | null> | null;
}

export function Shade({
  color,
  shade,
  height,
  width,
  style,
  ref = null,
  ...props
}: ShadeProps) {
  return (
    <div
      style={{
        color: colorNameToCss(color),
        position: "absolute",
        top: 0,
        left: 0,
        ...style,
      }}
      aria-hidden
      ref={ref}
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
