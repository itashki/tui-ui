import { useEffect, useRef, useState } from "react";
import { SizeContext } from "./SizeContext";
import { ANSI_COLOR, ANSI_COLORS, ANSI_COLORS_VGA } from "lib/ANSI_COLORS";
import { RegisterHotKeyContext } from "./RegisterHotKeyContext";
import mergeRefs from "merge-refs";
import { colorNameToCss } from "lib/UTILS";

export interface TUIRootProps extends React.HTMLAttributes<HTMLDivElement> {
  palette?: ANSI_COLORS;
  height?: string;
  width?: string;
  fontSize?: string;
  fontFamily?: string;
  backgroundColor?: ANSI_COLOR;
  ref?: React.Ref<HTMLDivElement | null> | null;
}

const rootStyle = {
  position: "relative",
  padding: 0,
  margin: 0,
  border: "none",
  lineHeight: "1em",
} as const;
/**
 * @param palette - The ANSI escape code palette to use
 * @param height - The height of the root elementm in any valid CSS unit
 * @param width - The width of the root elementm in any valid CSS unit
 * @param fontSize - The font size of the root elementm in any valid CSS unit
 * @param fontFamily - The font family for all elements, non-monospace fonts are not supported
 * @param backgroundColor - The background color of the root element
 **/
export function TUIRoot({
  palette = ANSI_COLORS_VGA,
  height = "512px",
  width = "800px",
  fontSize = "16px",
  fontFamily = "ModernDOS",
  backgroundColor = ANSI_COLOR.BLACK,
  style = {},
  ref = null,
  children,
  ...props
}: TUIRootProps) {
  const [data, setData] = useState<{
    chHeight: number;
    chWidth: number;
    tHeight: number;
    tWidth: number;
  } | null>(null);
  const registeredHotkeys = useRef<
    Record<string, { callback: () => void; global: boolean }>
  >({});

  const registerHotkey = (
    key: string,
    callback: () => void,
    global: boolean = true,
  ) => {
    registeredHotkeys.current[key] = { callback, global };
    return () => {
      delete registeredHotkeys.current[key];
    };
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        registeredHotkeys.current[e.key] &&
        !registeredHotkeys.current[e.key].global
      ) {
        e.preventDefault();
        registeredHotkeys.current[e.key].callback();
      }
    };
    const currentRoot = rootRef.current;
    if (!currentRoot) return;
    currentRoot.addEventListener("keydown", handleKeyDown);
    return () => {
      currentRoot.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        registeredHotkeys.current[e.key] &&
        registeredHotkeys.current[e.key].global
      ) {
        e.preventDefault();
        registeredHotkeys.current[e.key].callback();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const rootRef = useRef<HTMLDivElement>(null);

  //!HACK: This is a hack to get how many characters fit in the root element
  const testRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setData(null);
  }, [height, width]);
  useEffect(() => {
    if (data) {
      return;
    }
    if (testRef.current && rootRef.current) {
      const { clientHeight, clientWidth } = testRef.current;
      const { clientHeight: clientHeightRoot, clientWidth: clientWidthRoot } =
        rootRef.current;
      setData({
        tHeight: Math.floor(clientHeightRoot / clientHeight),
        tWidth: Math.floor(clientWidthRoot / clientWidth),
        chHeight: clientHeight,
        chWidth: clientWidth,
      });
    }
  }, [data, testRef, rootRef]);
  if (!data) {
    return (
      <div
        style={{ height, width, fontSize, fontFamily, ...rootStyle, ...style }}
        ref={rootRef}
      >
        <div
          style={{
            height: "fit-content",
            width: "fit-content",
          }}
          ref={testRef}
        >
          0
        </div>
      </div>
    );
  }

  const cssPalette = {} as Record<string, string>;
  for (const key in palette) {
    cssPalette[`--ansi-color-${key.toLowerCase()}`] =
      palette[key as keyof typeof palette];
  }

  return (
    <div
      style={{
        height,
        width,
        fontSize,
        fontFamily,
        ...cssPalette,
        backgroundColor: colorNameToCss(backgroundColor),
        ...rootStyle,
        ...style,
      }}
      ref={mergeRefs(rootRef, ref)}
      {...props}
    >
      <SizeContext.Provider value={data}>
        <RegisterHotKeyContext.Provider value={registerHotkey}>
          {children}
        </RegisterHotKeyContext.Provider>
      </SizeContext.Provider>
    </div>
  );
}
