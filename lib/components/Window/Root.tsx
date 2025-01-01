import { useContext } from "react";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { SizeContext } from "lib/components/TUIRoot/SizeContext";
import { BORDER, BORDER_TYPE, SHADE } from "lib/BOX_DRAWING";
import { PaletteContext } from "lib/components/TUIRoot/PaletteContext";
import { ContentDimensionsContext } from "./ContentDimensionsContext";
import { BackgroundColorContext } from "./BackgroundColorContext";
import { BorderContext } from "./BorderContext";

export interface WindowRootProps extends React.HTMLAttributes<HTMLDivElement> {
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
  height: number;
  width: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  shade?: { shade: SHADE; color: ANSI_COLOR };
  backgroundColor?: ANSI_COLOR;
  shadow?: boolean;
  ref?: React.RefObject<HTMLDivElement | null> | null;
  topBorderRef?: React.RefObject<HTMLDivElement | null> | null;
  topBorderProps?: React.HTMLAttributes<HTMLDivElement>;
  bottomBorderRef?: React.RefObject<HTMLDivElement | null> | null;
  bottomBorderProps?: React.HTMLAttributes<HTMLDivElement>;
  leftBorderRef?: React.RefObject<HTMLDivElement | null> | null;
  leftBorderProps?: React.HTMLAttributes<HTMLDivElement>;
  rightBorderRef?: React.RefObject<HTMLDivElement | null> | null;
  rightBorderProps?: React.HTMLAttributes<HTMLDivElement>;
}

export function Root({
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
  backgroundColor = ANSI_COLOR.WHITE,
  height,
  width,
  top = 0,
  left = 0,
  right = 0,
  bottom = 0,
  children,
  shadow = true,
  style,
  ref = null,
  topBorderRef = null,
  topBorderProps = {},
  bottomBorderRef = null,
  bottomBorderProps = {},
  leftBorderRef = null,
  leftBorderProps = {},
  rightBorderRef = null,
  rightBorderProps = {},
  ...props
}: WindowRootProps) {
  const { chHeight, chWidth, tWidth, tHeight } = useContext(SizeContext);
  const palette = useContext(PaletteContext);

  const {
    HORIZONTAL,
    VERTICAL,
    TOP_LEFT,
    TOP_RIGHT,
    BOTTOM_LEFT,
    BOTTOM_RIGHT,
    BORDER_WIDTH,
  } = BORDER[borderStyle];

  const topBorder = (
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
      aria-hidden
      ref={topBorderRef}
      {...topBorderProps}
    >
      {TOP_LEFT +
        HORIZONTAL.repeat(
          width -
            2 * BORDER_WIDTH -
            (marginLeft ?? margin) -
            (marginRight ?? margin),
        ) +
        TOP_RIGHT}
    </div>
  );

  const bottomBorder = (
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
      aria-hidden
      ref={bottomBorderRef}
      {...bottomBorderProps}
    >
      {BOTTOM_LEFT +
        HORIZONTAL.repeat(
          width -
            2 * BORDER_WIDTH -
            (marginLeft ?? margin) -
            (marginRight ?? margin),
        ) +
        BOTTOM_RIGHT}
    </div>
  );

  const leftBorder = (
    <div
      style={{
        position: "absolute",
        top: chHeight * (marginTop ?? margin + BORDER_WIDTH),
        left: chWidth * (marginLeft ?? margin),
        width: chWidth,
        height: chHeight * (height - 2 * BORDER_WIDTH),
        backgroundColor: "transparent",
        color: palette[borderColor],
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
      }}
      aria-hidden
      ref={leftBorderRef}
      {...leftBorderProps}
    >
      {Array.from(
        {
          length:
            height -
            2 * BORDER_WIDTH -
            (marginTop ?? margin) -
            (marginBottom ?? margin),
        },
        () => (
          <span>{VERTICAL}</span>
        ),
      )}
    </div>
  );

  const rightBorder = (
    <div
      style={{
        position: "absolute",
        top: chHeight * (marginTop ?? margin + BORDER_WIDTH),
        right: chWidth * (marginRight ?? margin),
        width: chWidth,
        height: chHeight * (height - 2 * BORDER_WIDTH),
        backgroundColor: "transparent",
        color: palette[borderColor],
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
      }}
      aria-hidden
      ref={rightBorderRef}
      {...rightBorderProps}
    >
      {Array.from(
        {
          length:
            height -
            2 * BORDER_WIDTH -
            (marginTop ?? margin) -
            (marginBottom ?? margin),
        },
        () => (
          <span>{VERTICAL}</span>
        ),
      )}
    </div>
  );

  return (
    <div
      style={{
        backgroundColor: palette[backgroundColor],
        position: "absolute",
        top: `${(top ?? tHeight - height - bottom) * chHeight}px`,
        left: `${(left ?? tWidth - width - right) * chWidth}px`,
        boxShadow: shadow
          ? `${chWidth * 2}px ${chHeight}px ${palette[ANSI_COLOR.BLACK]}`
          : "none",
        height: chHeight * height,
        width: chWidth * width,
        paddingRight:
          ((marginRight ?? margin) + BORDER_WIDTH + (paddingRight ?? padding)) *
          chWidth,
        paddingLeft:
          ((marginLeft ?? margin) + BORDER_WIDTH + (paddingLeft ?? padding)) *
          chWidth,
        paddingTop:
          ((marginTop ?? margin) + BORDER_WIDTH + (paddingTop ?? padding)) *
          chHeight,
        paddingBottom:
          ((marginBottom ?? margin) +
            BORDER_WIDTH +
            (paddingBottom ?? padding)) *
          chHeight,
        boxSizing: "border-box",
        overflowX: "visible",
        overflowY: "clip",
        ...style,
      }}
      ref={ref}
      {...props}
    >
      {topBorder}
      {bottomBorder}
      {leftBorder}
      {rightBorder}
      <BackgroundColorContext.Provider value={backgroundColor}>
        <ContentDimensionsContext.Provider
          value={{
            height:
              height -
              2 * BORDER_WIDTH -
              (marginTop ?? margin) -
              (marginBottom ?? margin) -
              (paddingLeft ?? padding) -
              (paddingRight ?? padding),
            width:
              width -
              2 * BORDER_WIDTH -
              (marginLeft ?? margin) -
              (marginRight ?? margin) -
              (paddingLeft ?? padding) -
              (paddingRight ?? padding),
          }}
        >
          <BorderContext.Provider
            value={{
              paddingLeft: paddingLeft ?? padding,
              paddingRight: paddingRight ?? padding,
              borderStyle,
              borderColor,
              marginTop: marginTop ?? margin,
              marginBottom: marginBottom ?? margin,
              marginLeft: marginLeft ?? margin,
              marginRight: marginRight ?? margin,
            }}
          >
            {children}
          </BorderContext.Provider>
        </ContentDimensionsContext.Provider>
      </BackgroundColorContext.Provider>
    </div>
  );
}
