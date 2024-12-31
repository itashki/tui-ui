import { useContext } from "react";
import { DimensionsContext } from "./DimensionsContext";
import { SizeContext } from "lib/components/TUIRoot/SizeContext";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { PaletteContext } from "lib/components/TUIRoot/PaletteContext";
import { BORDER, BORDER_TYPE, CONNECTION } from "lib/BOX_DRAWING";
import { BackgroundColorContext } from "./BackgroundColorContext";
import { BorderContext } from "./BorderContext";

interface HorizontalDelimiterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  connectedRight?: boolean;
  connectedLeft?: boolean;
  delimiterColor?: ANSI_COLOR;
  delimiterStyle?: BORDER_TYPE;
  coverPaddingLeft?: boolean;
  coverPaddingRight?: boolean;
}

export function HorizontalDelimiter({
  connectedLeft = false,
  connectedRight = false,
  coverPaddingLeft = false,
  coverPaddingRight = false,
  delimiterColor,
  delimiterStyle,
  ...props
}: HorizontalDelimiterProps) {
  const { width } = useContext(DimensionsContext);
  const { chWidth, chHeight } = useContext(SizeContext);
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
        width:
          (width +
            (connectedLeft ? 1 : 0) +
            (connectedRight ? 1 : 0) +
            (coverPaddingLeft ? paddingLeft : 0) +
            (coverPaddingRight ? paddingRight : 0)) *
          chWidth,
        height: chHeight,
        backgroundColor: palette[backgroundColor],
        color: palette[delimiterColor ?? defaultColor],
        position: "relative",
        left:
          -((connectedLeft ? 1 : 0) + (coverPaddingLeft ? paddingLeft : 0)) *
          chWidth,
      }}
      {...props}
    >
      {connectedLeft &&
        (delimiterStyle === borderStyle
          ? BORDER[borderStyle].CROSS_LEFT
          : CONNECTION[borderStyle].CROSS_LEFT)}
      {BORDER[borderStyle].HORIZONTAL.repeat(
        width +
        (coverPaddingLeft ? paddingLeft : 0) +
        (coverPaddingRight ? paddingRight : 0),
      )}
      {connectedRight &&
        (delimiterStyle === borderStyle
          ? BORDER[borderStyle].CROSS_RIGHT
          : CONNECTION[borderStyle].CROSS_RIGHT)}
    </div>
  );
}