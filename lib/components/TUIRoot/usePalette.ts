import { useContext } from "react";
import { PaletteContext } from "./PaletteContext";

/**
 * Needs to be inside of a TUIRoot component.
 * @returns The current palette.
 * */
export const usePalette = () => {
  const palette = useContext(PaletteContext);
  return palette;
};
