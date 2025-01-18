import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { colorNameToCss } from "lib/UTILS";
import classNames from "./Content.module.css";

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: ANSI_COLOR;
  ref?: React.RefObject<HTMLDivElement | null> | null;
}

export function Content({
  color = ANSI_COLOR.BLACK,
  children,
  style,
  ref = null,
  className,
  ...props
}: ContentProps) {
  //!TODO: Implement scrolling
  return (
    <div
      className={classNames.content + (className ? ` ${className}` : "")}
      style={{
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
