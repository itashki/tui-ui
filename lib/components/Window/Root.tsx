import { useContext, useEffect, useRef, useState } from "react";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { SizeContext } from "lib/components/TUIRoot/SizeContext";
import { BORDER, BORDER_TYPE, SHADE } from "lib/BOX_DRAWING";
import { PaletteContext } from "lib/components/TUIRoot/PaletteContext";
import { ContentDimensionsContext } from "./ContentDimensionsContext";
import { BackgroundColorContext } from "./BackgroundColorContext";
import { BorderContext } from "./BorderContext";
import mergeRefs from "merge-refs";

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
  height?: number;
  width?: number;
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

  const innerRef = useRef<HTMLDivElement | null>(null);
  const [{ computedHeight, computedWidth }, setComputedDimensions] = useState({
    computedHeight: 0,
    computedWidth: 0,
  });
  useEffect(() => {
    if (innerRef.current) {
      const { height, width } = innerRef.current.getBoundingClientRect();
      setComputedDimensions({
        computedHeight: height / chHeight,
        computedWidth: width / chWidth,
      });
    }
  }, [innerRef, chHeight, chWidth]);

  // Use common values for margin and padding if not specified
  marginTop = marginTop ?? margin;
  marginRight = marginRight ?? margin;
  marginBottom = marginBottom ?? margin;
  marginLeft = marginLeft ?? margin;
  paddingTop = paddingTop ?? padding;
  paddingRight = paddingRight ?? padding;
  paddingBottom = paddingBottom ?? padding;
  paddingLeft = paddingLeft ?? padding;
  top = top ?? tHeight - computedHeight - bottom;
  left = left ?? tWidth - computedWidth - right;

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
        top: marginTop * chHeight,
        left: marginLeft * chWidth,
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
          computedWidth > 2 * BORDER_WIDTH + marginLeft + marginRight
            ? computedWidth - 2 * BORDER_WIDTH - marginLeft - marginRight
            : 0,
        ) +
        TOP_RIGHT}
    </div>
  );

  const bottomBorder = (
    <div
      style={{
        position: "absolute",
        bottom: marginBottom * chHeight,
        left: marginLeft * chWidth,
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
          computedWidth > 2 * BORDER_WIDTH + marginLeft + marginRight
            ? computedWidth - 2 * BORDER_WIDTH - marginLeft - marginRight
            : 0,
        ) +
        BOTTOM_RIGHT}
    </div>
  );

  const leftBorder = (
    <div
      style={{
        position: "absolute",
        top: chHeight * (marginTop + BORDER_WIDTH),
        left: chWidth * marginLeft,
        width: chWidth,
        height: chHeight * (computedHeight - 2 * BORDER_WIDTH),
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
          length: computedHeight - 2 * BORDER_WIDTH - marginTop - marginBottom,
        },
        (_, i) => (
          <span key={i}>{VERTICAL}</span>
        ),
      )}
    </div>
  );

  const rightBorder = (
    <div
      style={{
        position: "absolute",
        top: chHeight * (marginTop + BORDER_WIDTH),
        right: chWidth * marginRight,
        width: chWidth,
        height: chHeight * (computedHeight - 2 * BORDER_WIDTH),
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
          length: computedHeight - 2 * BORDER_WIDTH - marginTop - marginBottom,
        },
        (_, i) => (
          <span key={i}>{VERTICAL}</span>
        ),
      )}
    </div>
  );

  return (
    <div
      style={{
        backgroundColor: palette[backgroundColor],
        position: "absolute",
        top: `${top * chHeight}px`,
        left: `${left * chWidth}px`,
        boxShadow: shadow
          ? `${chWidth * 2}px ${chHeight}px ${palette[ANSI_COLOR.BLACK]}`
          : "none",
        height: height
          ? chHeight * height
          : `calc(fit-content + ${marginTop * chHeight}px + ${marginBottom * chHeight}px + ${paddingTop * chHeight}px + ${paddingBottom * chHeight}px + ${BORDER_WIDTH * chHeight}px)`,
        width: width
          ? chWidth * width
          : `calc(fit-content + ${marginLeft * chWidth}px + ${marginRight * chWidth}px + ${paddingLeft * chWidth}px + ${paddingRight * chWidth}px + ${BORDER_WIDTH * chWidth}px)`,
        paddingRight: (marginRight + BORDER_WIDTH + paddingRight) * chWidth,
        paddingLeft: (marginLeft + BORDER_WIDTH + paddingLeft) * chWidth,
        paddingTop: (marginTop + BORDER_WIDTH + paddingTop) * chHeight,
        paddingBottom: (marginBottom + BORDER_WIDTH + paddingBottom) * chHeight,
        boxSizing: "border-box",
        overflowX: "visible",
        overflowY: "clip",
        ...style,
      }}
      ref={mergeRefs(innerRef, ref)}
      {...props}
    >
      {topBorder}
      {bottomBorder}
      {leftBorder}
      {rightBorder}
      <BackgroundColorContext.Provider value={backgroundColor}>
        <ContentDimensionsContext.Provider
          value={{
            height: Math.max(
              computedHeight -
                2 * BORDER_WIDTH -
                marginTop -
                marginBottom -
                paddingLeft -
                paddingRight,
              0,
            ),
            width: Math.max(
              computedWidth -
                2 * BORDER_WIDTH -
                marginLeft -
                marginRight -
                paddingLeft -
                paddingRight,
              0,
            ),
          }}
        >
          <BorderContext.Provider
            value={{
              paddingLeft: paddingLeft,
              paddingRight: paddingRight,
              borderStyle,
              borderColor,
              marginTop: marginTop,
              marginBottom: marginBottom,
              marginLeft: marginLeft,
              marginRight: marginRight,
            }}
          >
            {children}
          </BorderContext.Provider>
        </ContentDimensionsContext.Provider>
      </BackgroundColorContext.Provider>
    </div>
  );
}
