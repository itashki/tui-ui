import { SIDE } from "lib/UTILS";
import { useContext } from "react";
import { BorderContext } from "./BorderContext";
import { PaletteContext } from "lib/components/TUIRoot/PaletteContext";
import { BackgroundColorContext } from "./BackgroundColorContext";
import { SizeContext } from "../TUIRoot/SizeContext";
import { ANSI_COLOR } from "lib/ANSI_COLORS";

interface BorderOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
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
  const palette = useContext(PaletteContext);
  const backgroundColor = useContext(BackgroundColorContext);
  const { chHeight, chWidth } = useContext(SizeContext);

  switch (side) {
    case SIDE.TOP:
      return (
        <div
          style={{
            position: "absolute",
            top: (marginTop - coverOffset) * chHeight,
            left: (marginLeft + start) * chWidth,
            width: length * chWidth,
            height: chHeight,
            backgroundColor: palette[backgroundColor],
            color: palette[color ?? borderColor],
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
            bottom: (marginBottom - coverOffset) * chHeight,
            left: (marginLeft + start) * chWidth,
            width: length * chWidth,
            height: chHeight,
            backgroundColor: palette[backgroundColor],
            color: palette[color ?? borderColor],
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
            top: (marginTop + start) * chHeight,
            left: (marginLeft - coverOffset) * chWidth,
            width: chWidth,
            height: length * chHeight,
            backgroundColor: palette[backgroundColor],
            color: palette[color ?? borderColor],
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
            top: (marginTop + start) * chHeight,
            right: (marginRight - coverOffset) * chWidth,
            width: chWidth,
            height: length * chHeight,
            backgroundColor: palette[backgroundColor],
            color: palette[color ?? borderColor],
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
