import { colorNameToCss, SIDE } from "lib/UTILS";
import { useContext } from "react";
import { BorderContext } from "./BorderContext";
import { BackgroundColorContext } from "./BackgroundColorContext";
import { ANSI_COLOR } from "lib/ANSI_COLORS";

export interface BorderOverlayProps
  extends React.HTMLAttributes<HTMLDivElement> {
  side: SIDE;
  start: number;
  length: number;
  color?: ANSI_COLOR;
  coverOffset?: number;
  ref?: React.RefObject<HTMLDivElement | null> | null;
}

export function BorderOverlay({
  side,
  start,
  length,
  color,
  coverOffset = 0,
  children,
  style,
  ref = null,
  ...props
}: BorderOverlayProps) {
  const { marginTop, marginBottom, marginLeft, marginRight, borderColor } =
    useContext(BorderContext);
  const backgroundColor = useContext(BackgroundColorContext);

  switch (side) {
    case SIDE.TOP:
      return (
        <div
          style={{
            position: "absolute",
            top: `calc(${marginTop - coverOffset} * 1em)`,
            left: `calc(${marginLeft + start} * 1ch)`,
            width: `calc(${length} * 1ch)`,
            height: `1em`,
            backgroundColor: colorNameToCss(backgroundColor),
            color: colorNameToCss(color ?? borderColor),
            display: "flex",
            flexDirection: "row",
            userSelect: "none",
            ...style,
          }}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    case SIDE.BOTTOM:
      return (
        <div
          style={{
            position: "absolute",
            bottom: `calc(${marginBottom - coverOffset} * 1em)`,
            left: `calc(${marginLeft + start} * 1ch)`,
            width: `calc(${length} * 1ch)`,
            height: `1em`,
            backgroundColor: colorNameToCss(backgroundColor),
            color: colorNameToCss(color ?? borderColor),
            display: "flex",
            flexDirection: "row",
            userSelect: "none",
            ...style,
          }}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    case SIDE.LEFT:
      return (
        <div
          style={{
            position: "absolute",
            top: `calc(${marginTop + start} * 1em)`,
            left: `calc(${marginLeft - coverOffset} * 1ch)`,
            width: `1ch`,
            height: `calc(${length} * 1em)`,
            backgroundColor: colorNameToCss(backgroundColor),
            color: colorNameToCss(color ?? borderColor),
            display: "flex",
            flexDirection: "column",
            userSelect: "none",
            ...style,
          }}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    case SIDE.RIGHT:
      return (
        <div
          style={{
            position: "absolute",
            top: `calc(${marginTop + start} * 1em)`,
            right: `calc(${marginRight - coverOffset} * 1ch)`,
            width: `1ch`,
            height: `calc(${length} * 1em)`,
            backgroundColor: colorNameToCss(backgroundColor),
            color: colorNameToCss(color ?? borderColor),
            display: "flex",
            flexDirection: "column",
            userSelect: "none",
            ...style,
          }}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
  }
}
