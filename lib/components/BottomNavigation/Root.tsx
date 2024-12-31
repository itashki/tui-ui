import { useContext } from "react";
import { SizeContext } from "../TUIRoot/SizeContext";
import { ANSI_COLOR } from "../../ANSI_COLORS";
import { ColorsContext } from "./ColorsContext";

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  hotKeyColor?: ANSI_COLOR;
  hotKeyBackgroundColor?: ANSI_COLOR;
  labelColor?: ANSI_COLOR;
  backgroundColor?: ANSI_COLOR;
  children: React.ReactNode;
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
  children,
  ...props
}: RootProps) {
  const { chHeight, chWidth, tWidth, tHeight } = useContext(SizeContext);

  return (
    <div
      style={{
        position: "absolute",
        top: chHeight * (tHeight - 1),
        left: 0,
        height: chHeight,
        width: chWidth * tWidth,
        display: "flex",
        flexWrap: "nowrap",
        overflow: "hidden",
        userSelect: "none",
      }}
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
