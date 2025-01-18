import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { SHADE } from "lib/BOX_DRAWING";
import { colorNameToCss } from "lib/UTILS";
import classNames from "./Shade.module.css";

interface ShadeProps extends React.HTMLAttributes<HTMLDivElement> {
  color: ANSI_COLOR;
  shade: Exclude<SHADE, SHADE.NONE>;
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
  className,
  ...props
}: ShadeProps) {
  return (
    <div
      className={classNames.shade + (className ? ` ${className}` : "")}
      style={{
        color: colorNameToCss(color),
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
