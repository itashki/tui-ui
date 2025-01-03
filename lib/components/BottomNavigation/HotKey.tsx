import { useContext } from "react";
import { ColorsContext } from "./ColorsContext";
import { PaletteContext } from "lib/components/TUIRoot/PaletteContext";
import { ANSI_COLOR } from "lib/ANSI_COLORS";

interface HotKeyProps extends React.HTMLAttributes<HTMLSpanElement> {
  hotKeyColor?: ANSI_COLOR;
  hotKeyBackgroundColor?: ANSI_COLOR;
  ref?: React.Ref<HTMLSpanElement | null> | null;
}

/**
 * @param hotKeyColor - The color of the hotkey text, leave blank to use default from the root element.
 * @param hotKeyBackgroundColor - The background color of the hotkey text, leave blank to use default from the root element.
 * */
export function HotKey({
  hotKeyColor,
  hotKeyBackgroundColor,
  ref = null,
  style,
  children,
  ...props
}: HotKeyProps) {
  const {
    hotKeyColor: hotKeyColorInherit,
    hotKeyBackgroundColor: hotKeyBackgroundColorInherit,
  } = useContext(ColorsContext);
  const palette = useContext(PaletteContext);

  return (
    <span
      style={{
        color: palette[hotKeyColor || hotKeyColorInherit],
        backgroundColor:
          palette[hotKeyBackgroundColor || hotKeyBackgroundColorInherit],
        ...style,
      }}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
}
