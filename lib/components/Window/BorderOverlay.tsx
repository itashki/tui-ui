import { colorNameToCss, SIDE } from "lib/UTILS";
import { useContext } from "react";
import { BorderContext } from "./BorderContext";
import { BackgroundColorContext } from "./BackgroundColorContext";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import classNames from "./BorderOverlay.module.css";

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
  className,
  ...props
}: BorderOverlayProps) {
  const { marginTop, marginBottom, marginLeft, marginRight, borderColor } =
    useContext(BorderContext);
  const backgroundColor = useContext(BackgroundColorContext);

  switch (side) {
    case SIDE.TOP:
      return (
        <div
          className={
            classNames.horizontalBorderOverlay +
            (className ? ` ${className}` : "")
          }
          style={{
            top: `calc(${marginTop - coverOffset} * 1em)`,
            left: `calc(${marginLeft + start} * 1ch)`,
            width: `calc(${length} * 1ch)`,
            backgroundColor: colorNameToCss(backgroundColor),
            color: colorNameToCss(color ?? borderColor),
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
          className={
            classNames.horizontalBorderOverlay +
            (className ? ` ${className}` : "")
          }
          style={{
            bottom: `calc(${marginBottom - coverOffset} * 1em)`,
            left: `calc(${marginLeft + start} * 1ch)`,
            width: `calc(${length} * 1ch)`,
            backgroundColor: colorNameToCss(backgroundColor),
            color: colorNameToCss(color ?? borderColor),
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
          className={
            classNames.verticalBorderOverlay +
            (className ? ` ${className}` : "")
          }
          style={{
            top: `calc(${marginTop + start} * 1em)`,
            left: `calc(${marginLeft - coverOffset} * 1ch)`,
            height: `calc(${length} * 1em)`,
            backgroundColor: colorNameToCss(backgroundColor),
            color: colorNameToCss(color ?? borderColor),
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
          className={
            classNames.verticalBorderOverlay +
            (className ? ` ${className}` : "")
          }
          style={{
            top: `calc(${marginTop + start} * 1em)`,
            right: `calc(${marginRight - coverOffset} * 1ch)`,
            height: `calc(${length} * 1em)`,
            backgroundColor: colorNameToCss(backgroundColor),
            color: colorNameToCss(color ?? borderColor),
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
