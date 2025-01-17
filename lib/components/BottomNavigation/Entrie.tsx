import { useContext, useEffect, useRef } from "react";
import { RegisterHotKeyContext } from "lib/components/TUIRoot/RegisterHotKeyContext";
import mergeRefs from "merge-refs";

interface EntrieProps extends React.HTMLAttributes<HTMLButtonElement> {
  hotKey: string;
  callback: () => void;
  ref?: React.Ref<HTMLButtonElement | null> | null;
}

/**
 * @param hotKey - The hotkey to register.
 * @param callback - The function to call when the hotkey is pressed.
 * */
export function Entrie({
  hotKey,
  callback,
  children,
  ref: outsideRef = null,
  ...props
}: EntrieProps) {
  const registerHotKey = useContext(RegisterHotKeyContext);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const unregister = registerHotKey(hotKey, callback);
    const element = ref.current;
    element?.addEventListener("click", callback);

    return () => {
      unregister();
      element?.removeEventListener("click", callback);
    };
  }, [callback, hotKey, registerHotKey]);

  return (
    <button
      aria-keyshortcuts={hotKey}
      ref={mergeRefs(outsideRef, ref)}
      {...props}
    >
      {children}
    </button>
  );
}
