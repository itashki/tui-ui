import { useContext } from "react";
import { SizeContext } from "lib/components/TUIRoot/SizeContext";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { ColorsContext } from "./ColorsContext";
import classNames from "./BottomNavigation.module.css";

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  hotKeyColor?: ANSI_COLOR;
  hotKeyBackgroundColor?: ANSI_COLOR;
  labelColor?: ANSI_COLOR;
  backgroundColor?: ANSI_COLOR;
  globalHotKeys?: boolean;
  ref?: React.Ref<HTMLDivElement | null> | null;
}

/**
 * @param hotKeyColor - The default color of the hotkey text.
 * @param hotKeyBackgroundColor - The default background color of the hotkey text.
 * @param labelColor - The default color of the label text.
 * @param backgroundColor - The default background color of the label text.
 * */
export function Root({
  hotKeyColor = ANSI_COLOR.WHITE,
  hotKeyBackgroundColor = ANSI_COLOR.BLACK,
  labelColor = ANSI_COLOR.BLACK,
  backgroundColor = ANSI_COLOR.CYAN,
  ref = null,
  style,
  children,
  className,
  ...props
}: RootProps) {
  const { tWidth, tHeight } = useContext(SizeContext);

  return (
    <div
      className={classNames.root + (className ? ` ${className}` : "")}
      style={{
        top: `calc(${tHeight - 1} * 1em)`,
        width: `calc(${tWidth} * 1ch)`,
        ...style,
      }}
      ref={ref}
      {...props}
    >
      <ColorsContext.Provider
        value={{
          hotKeyColor,
          hotKeyBackgroundColor,
          labelColor,
          backgroundColor,
        }}
      >
        {children}
      </ColorsContext.Provider>
    </div>
  );
}
