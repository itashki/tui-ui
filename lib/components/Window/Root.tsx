import { useContext } from "react";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { SizeContext } from "lib/components/TUIRoot/SizeContext";
import { SHADE } from "lib/BOX_DRAWING";
import { PaletteContext } from "lib/components/TUIRoot/PaletteContext";
import { DimensionsContext } from "./DimensionsContext";
import { Shade } from "lib/components/Shade";
import { ContentDimensionsContext } from "./ContentDimensionsContext";
import { BackgroundColorContext } from "./BackgroundColorContext";

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  height: number;
  width: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  shade?: { shade: SHADE; color: ANSI_COLOR };
  backgroundColor?: ANSI_COLOR;
  shadow?: boolean;
  children: React.ReactNode;
}

export function Root({
  backgroundColor = ANSI_COLOR.WHITE,
  shade,
  height,
  width,
  top = 0,
  left = 0,
  right = 0,
  bottom = 0,
  children,
  shadow = true,
  ...props
}: RootProps) {
  const { chHeight, chWidth, tWidth, tHeight } = useContext(SizeContext);
  const palette = useContext(PaletteContext);

  if (right) {
    left = tWidth - width - right;
  }
  if (bottom) {
    top = tHeight - height - bottom;
  }

  return (
    <div
      style={{
        backgroundColor: palette[backgroundColor],
        position: "absolute",
        top: `${top * chHeight}px`,
        left: `${left * chWidth}px`,
        boxShadow: shadow
          ? `${chWidth * 2}px ${chHeight}px ${palette[ANSI_COLOR.BLACK]}`
          : "none",
        height: chHeight * height,
        width: chWidth * width,
      }}
      {...props}
    >
      {shade && <Shade {...{ height, width }} {...shade} />}
      <BackgroundColorContext.Provider value={backgroundColor}>
        <DimensionsContext.Provider value={{ width, height }}>
          <ContentDimensionsContext.Provider
            value={{
              width: width,
              height: height,
            }}
          >
            {children}
          </ContentDimensionsContext.Provider>
        </DimensionsContext.Provider>
      </BackgroundColorContext.Provider>
    </div>
  );
}
