import { useContext } from "react";
import { ColorsContext } from "./ColorsContext";
import { PaletteContext } from "lib/components/TUIRoot/PaletteContext";
import { ANSI_COLOR } from "lib/ANSI_COLORS";

interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  labelColor?: ANSI_COLOR;
  backgroundColor?: ANSI_COLOR;
  ref?: React.Ref<HTMLSpanElement | null> | null;
}

/**
 * @param labelColor - The color of the label text, leave blank to use default from the root element.
 * @param backgroundColor - The background color of the label text, leave blank to use default from the root element.
 * */
export function Label({
  labelColor,
  backgroundColor,
  ref = null,
  style,
  children,
  ...props
}: LabelProps) {
  const {
    labelColor: labelColorInherit,
    backgroundColor: backgroundColorInherit,
  } = useContext(ColorsContext);
  const palette = useContext(PaletteContext);

  return (
    <span
      style={{
        color: palette[labelColor || labelColorInherit],
        backgroundColor: palette[backgroundColor || backgroundColorInherit],
        ...style,
      }}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
}
