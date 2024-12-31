import { createContext } from "react";

export const RegisterHotKeyContext = createContext<
  (key: string, callback: () => void) => () => void
>(() => () => {});
