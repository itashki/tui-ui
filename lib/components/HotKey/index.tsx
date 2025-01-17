import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { useContext, useEffect } from "react";
import { RegisterHotKeyContext } from "../TUIRoot/RegisterHotKeyContext";
import { colorNameToCss } from "lib/UTILS";

interface HotKeyProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: ANSI_COLOR;
  hotKey: string;
  callback?: () => void;
  ref?: React.Ref<HTMLDivElement | null> | null;
}

export function HotKey({
  hotKey,
  callback = () => { },
  color = ANSI_COLOR.RED,
  style,
  children,
  ref,
  ...props
}: HotKeyProps) {
  const registerHotKey = useContext(RegisterHotKeyContext);

  useEffect(
    () => registerHotKey(hotKey, callback),
    [hotKey, callback, registerHotKey],
  );

  return (
    <span
      aria-keyshortcuts={hotKey}
      style={{
        color: colorNameToCss(color),
        display: "inline-block",
        ...style,
      }}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
}
