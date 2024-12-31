import { useContext } from "react";
import { BORDER, BORDER_TYPE } from "../../BOX_DRAWING";
import { SizeContext } from "../TUIRoot/SizeContext";
import { ANSI_COLOR } from "../../ANSI_COLORS";
import { PaletteContext } from "../TUIRoot/PaletteContext";
import { DimensionsContext } from "./DimensionsContext";

interface BorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface BorderProps extends React.HTMLAttributes<HTMLDivElement> {
  borderStyle?: BORDER_TYPE;
  margin?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  padding?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  borderColor?: ANSI_COLOR;
}

export function Border({
  margin = 1,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding = 1,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  borderStyle = BORDER_TYPE.DOUBLE,
  borderColor = ANSI_COLOR.BLACK,
  children,
  style,
  ...props
}: BorderProps) {
  const { chHeight, chWidth } = useContext(SizeContext);
  const { width, height } = useContext(DimensionsContext);
  const palette = useContext(PaletteContext);

  const {
    HORIZONTAL,
    VERTICAL,
    TOP_LEFT,
    TOP_RIGHT,
    BOTTOM_LEFT,
    BOTTOM_RIGHT,
  } = BORDER[borderStyle];

  return (
    <div
      {...props}
      style={{
        paddingRight:
          ((marginRight ?? margin) + 1 + (paddingRight ?? padding)) * chWidth,
        paddingLeft:
          ((marginLeft ?? margin) + 1 + (paddingLeft ?? padding)) * chWidth,
        paddingTop:
          ((marginTop ?? margin) + 1 + (paddingTop ?? padding)) * chHeight,
        paddingBottom:
          ((marginBottom ?? margin) + 1 + (paddingBottom ?? padding)) *
          chHeight,
        position: "absolute",
        boxSizing: "border-box",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        ...style,
      }}
    >
      {/*!TODO: Add support for headers and potentially any text inside borders */}
      {/*!TODO: Add support for scrollbars */}

      {/*Top border*/}
      <div
        style={{
          position: "absolute",
          top: (marginTop ?? margin) * chHeight,
          left: (marginLeft ?? margin) * chWidth,
          width: "100%",
          height: chHeight,
          backgroundColor: "transparent",
          color: palette[borderColor],
          userSelect: "none",
        }}
      >
        {TOP_LEFT +
          HORIZONTAL.repeat(
            width - 2 - (marginLeft ?? margin) - (marginRight ?? margin),
          ) +
          TOP_RIGHT}
      </div>
      {/*Bottom border*/}
      <div
        style={{
          position: "absolute",
          bottom: (marginBottom ?? margin) * chHeight,
          left: (marginLeft ?? margin) * chWidth,
          width: "100%",
          height: chHeight,
          backgroundColor: "transparent",
          color: palette[borderColor],
          userSelect: "none",
        }}
      >
        {BOTTOM_LEFT +
          HORIZONTAL.repeat(
            width - 2 - (marginLeft ?? margin) - (marginRight ?? margin),
          ) +
          BOTTOM_RIGHT}
      </div>
      {/*Left border*/}
      <div
        style={{
          position: "absolute",
          top: chHeight * (marginTop ?? margin + 1),
          left: chWidth * (marginLeft ?? margin),
          width: chWidth,
          height: chHeight * (height - 2),
          backgroundColor: "transparent",
          color: palette[borderColor],
          display: "flex",
          flexDirection: "column",
          userSelect: "none",
        }}
      >
        {Array.from(
          {
            length:
              height - 2 - (marginTop ?? margin) - (marginBottom ?? margin),
          },
          () => (
            <span>{VERTICAL}</span>
          ),
        )}
      </div>
      {/*Right border*/}
      <div
        style={{
          position: "absolute",
          top: chHeight * (marginTop ?? margin + 1),
          right: chWidth * (marginRight ?? margin),
          width: chWidth,
          height: chHeight * (height - 2),
          backgroundColor: "transparent",
          color: palette[borderColor],
          display: "flex",
          flexDirection: "column",
          userSelect: "none",
        }}
      >
        {Array.from(
          {
            length:
              height - 2 - (marginTop ?? margin) - (marginBottom ?? margin),
          },
          () => (
            <span>{VERTICAL}</span>
          ),
        )}
      </div>
      {children}
    </div>
  );
}
