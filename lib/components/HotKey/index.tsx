import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { useContext, useEffect } from "react";
import { PaletteContext } from "../TUIRoot/PaletteContext";
import { RegisterHotKeyContext } from "../TUIRoot/RegisterHotKeyContext";

interface HotKeyProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: ANSI_COLOR;
  hotKey: string;
  callback: () => void;
  ref?: React.Ref<HTMLDivElement | null> | null;
}

export function HotKey({
  hotKey,
  callback,
  color = ANSI_COLOR.RED,
  style,
  children,
  ref,
  ...props
}: HotKeyProps) {
  const palette = useContext(PaletteContext);
  const registerHotKey = useContext(RegisterHotKeyContext);

  useEffect(
    () => registerHotKey(hotKey, callback),
    [hotKey, callback, registerHotKey],
  );

  return (
    <span
      aria-keyshortcuts={hotKey}
      style={{ color: palette[color], ...style }}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
}
