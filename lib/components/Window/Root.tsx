import { useContext, useEffect, useRef, useState } from "react";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { SizeContext } from "lib/components/TUIRoot/SizeContext";
import { BORDER, BORDER_TYPE, SHADE } from "lib/BOX_DRAWING";
import { ContentDimensionsContext } from "./ContentDimensionsContext";
import { BackgroundColorContext } from "./BackgroundColorContext";
import { BorderContext } from "./BorderContext";
import mergeRefs from "merge-refs";
import { colorNameToCss } from "lib/UTILS";

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
        top: `calc(${marginTop} * 1em)`,
        left: `calc(${marginLeft} * 1ch)`,
        width: "100%",
        height: `calc(${BORDER_WIDTH} * 1em)`,
        backgroundColor: "transparent",
        color: colorNameToCss(borderColor),
        userSelect: "none",
        display: "flex",
        flexDirection: "row",
      }}
      aria-hidden
      ref={topBorderRef}
      {...topBorderProps}
    >
      <span>{TOP_LEFT}</span>
      {Array.from(
        {
          length: Math.max(
            computedWidth - 2 * BORDER_WIDTH - marginLeft - marginRight,
            0,
          ),
        },
        (_, i) => (
          <span key={i}>{HORIZONTAL}</span>
        ),
      )}
      <span>{TOP_RIGHT}</span>
    </div>
  );

  const bottomBorder = (
    <div
      style={{
        position: "absolute",
        bottom: `calc(${marginBottom} * 1em)`,
        left: `calc(${marginLeft} * 1ch)`,
        width: "100%",
        height: `calc(${BORDER_WIDTH} *1em)`,
        backgroundColor: "transparent",
        color: colorNameToCss(borderColor),
        userSelect: "none",
        display: "flex",
        flexDirection: "row",
      }}
      aria-hidden
      ref={bottomBorderRef}
      {...bottomBorderProps}
    >
      <span>{BOTTOM_LEFT}</span>
      {Array.from(
        {
          length: Math.max(
            computedWidth - 2 * BORDER_WIDTH - marginLeft - marginRight,
            0,
          ),
        },
        (_, i) => (
          <span key={i}>{HORIZONTAL}</span>
        ),
      )}
      <span>{BOTTOM_RIGHT}</span>
    </div>
  );

  const leftBorder = (
    <div
      style={{
        position: "absolute",
        top: `calc(${marginTop + BORDER_WIDTH} * 1em)`,
        left: `calc(${marginLeft} * 1ch)`,
        width: `calc(${BORDER_WIDTH} * 1ch)`,
        height: `calc(100% - (2em * ${BORDER_WIDTH}))`,
        backgroundColor: "transparent",
        color: colorNameToCss(borderColor),
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
          length: Math.max(
            computedHeight - 2 * BORDER_WIDTH - marginTop - marginBottom,
            0,
          ),
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
        top: `calc(${marginTop + BORDER_WIDTH} * 1em)`,
        right: `calc(${marginRight} * 1ch)`,
        width: `calc(${BORDER_WIDTH} * 1ch)`,
        height: `calc(${computedHeight - 2 * BORDER_WIDTH} * 1em)`,
        backgroundColor: "transparent",
        color: colorNameToCss(borderColor),
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
          length: Math.max(
            computedHeight - 2 * BORDER_WIDTH - marginTop - marginBottom,
            0,
          ),
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
        backgroundColor: colorNameToCss(backgroundColor),
        position: "absolute",
        top: `calc(${top} * 1em)`,
        left: `calc(${left} * 1ch)`,
        boxShadow: shadow ? `2ch 1em var(--ansi-color-black)` : "none",
        height: height ? `calc(${height} * 1em)` : `auto`,
        width: width ? `calc(${width} * 1ch)` : `auto`,
        paddingRight: `calc(${marginRight + BORDER_WIDTH + paddingRight} * 1ch)`,
        paddingLeft: `calc(${marginLeft + BORDER_WIDTH + paddingLeft} * 1ch)`,
        paddingTop: `calc(${marginTop + BORDER_WIDTH + paddingTop} * 1em)`,
        paddingBottom: `calc(${marginBottom + BORDER_WIDTH + paddingBottom} * 1em)`,
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
