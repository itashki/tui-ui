import { useContext } from "react";
import { SizeContext } from "./SizeContext";

/**
 * @returns an object containing the height and width of a single character and how many characters can fit in the TUIRoot's height and width
 * */
export function useSize() {
  const { chHeight, chWidth, tHeight, tWidth } = useContext(SizeContext);
  return { chHeight, chWidth, tHeight, tWidth };
}
