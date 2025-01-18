import { useContext } from "react";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { BORDER, BORDER_TYPE, CONNECTION } from "lib/BOX_DRAWING";
import { BackgroundColorContext } from "./BackgroundColorContext";
import { BorderContext } from "./BorderContext";
import { ContentDimensionsContext } from "./ContentDimensionsContext";
import { colorNameToCss } from "lib/UTILS";
import classNames from "./HorizontalSeparator.module.css";

export interface HorizontalSeparatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  connectedRight?: boolean;
  connectedLeft?: boolean;
  delimiterColor?: ANSI_COLOR;
  delimiterStyle?: BORDER_TYPE;
  coverPaddingLeft?: boolean;
  coverPaddingRight?: boolean;
  ref?: React.RefObject<HTMLDivElement | null> | null;
}

export function HorizontalSeparator({
  connectedLeft = false,
  connectedRight = false,
  coverPaddingLeft = false,
  coverPaddingRight = false,
  delimiterColor,
  delimiterStyle = BORDER_TYPE.SINGLE,
  ref = null,
  className,
  style,
  ...props
}: HorizontalSeparatorProps) {
  const { width: contentWidth } = useContext(ContentDimensionsContext);
  const {
    borderStyle,
    borderColor: defaultColor,
    paddingLeft,
    paddingRight,
  } = useContext(BorderContext);
  const backgroundColor = useContext(BackgroundColorContext);

  return (
    <div
      className={classNames.horizontalSeparator + (className ? ` ${className}` : "")}
      style={{
        width: `calc(${contentWidth} * 1ch)`,
        height: `calc(${BORDER[borderStyle].BORDER_WIDTH} * 1em)`,
        backgroundColor: colorNameToCss(backgroundColor),
        color: colorNameToCss(delimiterColor ?? defaultColor),
        ...style,
      }}
      ref={ref}
      {...props}
    >
      {connectedLeft && (
        <span
          style={{
            left: `calc(${1 + paddingLeft} * -1ch)`,
          }}
        >
          {delimiterStyle === borderStyle
            ? BORDER[borderStyle].CROSS_LEFT
            : CONNECTION[borderStyle].CROSS_LEFT}
        </span>
      )}
      {coverPaddingLeft &&
        Array.from({ length: paddingLeft }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `calc(${i + 1} * -1ch)`,
            }}
          >
            {BORDER[delimiterStyle].HORIZONTAL}
          </span>
        ))}
      {Array.from({ length: contentWidth }).map((_, i) => (
        <span
          key={i}
          style={{
            left: `${i}ch`,
          }}
        >
          {BORDER[delimiterStyle].HORIZONTAL}
        </span>
      ))}
      {coverPaddingRight &&
        Array.from({ length: paddingRight }).map((_, i) => (
          <span
            key={i}
            style={{
              right: `calc(${i + 1} * -1ch)`,
            }}
          >
            {BORDER[delimiterStyle].HORIZONTAL}
          </span>
        ))}
      {connectedRight && (
        <span
          style={{
            right: `calc(${1 + paddingRight} * -1ch)`,
          }}
        >
          {delimiterStyle === borderStyle
            ? BORDER[borderStyle].CROSS_RIGHT
            : CONNECTION[borderStyle].CROSS_RIGHT}
        </span>
      )}
    </div>
  );
}
