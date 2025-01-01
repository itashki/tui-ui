import { createContext } from "react";

export const DropDownContext = createContext({
  isOpen: false,
  setIsOpen: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
});
