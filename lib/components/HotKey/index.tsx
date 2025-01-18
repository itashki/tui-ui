import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { useContext, useEffect } from "react";
import { RegisterHotKeyContext } from "../TUIRoot/RegisterHotKeyContext";
import { colorNameToCss } from "lib/UTILS";
import classNames from "./HotKey.module.css";

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
  className,
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
      className={classNames.hotKey + (className ? ` ${className}` : "")}
      style={{
        color: colorNameToCss(color),
        ...style,
      }}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
}
