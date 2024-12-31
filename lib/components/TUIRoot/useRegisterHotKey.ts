import { useContext } from "react";
import { RegisterHotKeyContext } from "./RegisterHotKeyContext";

/**
 * Needs to be inside of a TUIRoot component.
 * @returns A function that will register a hotkey for the TUIRoot component and return a callback to unregister it.
 * */
export function useRegisterHotKey() {
  const registerHotKey = useContext(RegisterHotKeyContext);
  return registerHotKey;
}
