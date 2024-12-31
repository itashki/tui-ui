import { useContext } from "react";
import { ColorsContext } from "./ColorsContext";
import { PaletteContext } from "../TUIRoot/PaletteContext";
import { ANSI_COLOR } from "../../ANSI_COLORS";

interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  labelColor?: ANSI_COLOR;
  backgroundColor?: ANSI_COLOR;
  children: React.ReactNode;
}

/**
 * @param labelColor - The color of the label text, leave blank to use default from the root element.
 * @param backgroundColor - The background color of the label text, leave blank to use default from the root element.
 * */
export function Label({
  labelColor,
  backgroundColor,
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
      }}
      {...props}
    >
      {children}
    </span>
  );
}