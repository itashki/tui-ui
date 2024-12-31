import { useContext, useEffect, useRef } from "react";
import { RegisterHotKeyContext } from "lib/components/TUIRoot/RegisterHotKeyContext";

interface EntrieProps extends React.HTMLAttributes<HTMLButtonElement> {
  hotKey: string;
  callback: () => void;
}

/**
 * @param hotKey - The hotkey to register.
 * @param callback - The function to call when the hotkey is pressed.
 * */
export function Entrie({ hotKey, callback, children, ...props }: EntrieProps) {
  const registerHotKey = useContext(RegisterHotKeyContext);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const unregister = registerHotKey(hotKey, callback);
    const handleClick = () => callback();
    const element = ref.current;
    element?.addEventListener("click", handleClick);

    return () => {
      unregister();
      element?.removeEventListener("click", handleClick);
    };
  }, [ref, callback, hotKey, registerHotKey]);

  return (
    <button ref={ref} {...props}>
      {children}
    </button>
  );
}
