import { useContext } from "react";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { PaletteContext } from "lib/components/TUIRoot/PaletteContext";
import { BORDER, BORDER_TYPE, CONNECTION } from "lib/BOX_DRAWING";
import { BackgroundColorContext } from "./BackgroundColorContext";
import { BorderContext } from "./BorderContext";
import { ContentDimensionsContext } from "./ContentDimensionsContext";

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
  const palette = useContext(PaletteContext);

  return (
    <div
      style={{
        width: `calc(${contentWidth} * 1ch)`,
        height: `1em`,
        backgroundColor: palette[backgroundColor],
        color: palette[delimiterColor ?? defaultColor],
        position: "relative",
        userSelect: "none",
        ...style,
      }}
      ref={ref}
      {...props}
    >
      {connectedLeft && (
        <span
          style={{
            position: "absolute",
            left: `calc(${1 + paddingLeft} * -1ch)`,
          }}
        >
          {delimiterStyle === borderStyle
            ? BORDER[borderStyle].CROSS_LEFT
            : CONNECTION[borderStyle].CROSS_LEFT}
        </span>
      )}
      {coverPaddingLeft && (
        <span
          style={{
            position: "absolute",
            left: `calc(${paddingLeft} * -1ch)`,
          }}
        >
          {BORDER[delimiterStyle].HORIZONTAL.repeat(paddingLeft)}
        </span>
      )}
      {BORDER[delimiterStyle].HORIZONTAL.repeat(contentWidth)}
      {coverPaddingRight && (
        <span
          style={{
            position: "absolute",
            right: `calc(${paddingRight} * -1ch)`,
          }}
        >
          {BORDER[delimiterStyle].HORIZONTAL.repeat(paddingRight)}
        </span>
      )}
      {connectedRight && (
        <span
          style={{
            position: "absolute",
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
