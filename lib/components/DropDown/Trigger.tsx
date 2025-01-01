import { useContext } from "react";
import { DropDownContext } from "./DropDownContext";

export function Trigger({
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const { setIsOpen } = useContext(DropDownContext);

  return (
    <button {...props} onClick={() => setIsOpen((isOpen) => !isOpen)}>
      {children}
    </button>
  );
}
