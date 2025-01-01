import { createContext } from "react";

export const MenuRefContext =
  createContext<React.RefObject<HTMLDivElement> | null>(null);
