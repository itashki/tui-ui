import { useContext } from "react";
import { ColorsContext } from "./ColorsContext";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { colorNameToCss } from "lib/UTILS";

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

  return (
    <span
      style={{
        color: colorNameToCss(labelColor || labelColorInherit),
        backgroundColor: colorNameToCss(
          backgroundColor || backgroundColorInherit,
        ),
        ...style,
      }}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
}
