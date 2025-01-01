import { useRef, useState } from "react";
import { DropDownContext } from "./DropDownContext";
import { MenuRefContext } from "./MenuRefContext";

type RootProps = React.HTMLAttributes<HTMLDivElement>;

export function Root({ children, ...props }: RootProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div {...props}>
      <DropDownContext.Provider value={{ isOpen, setIsOpen }}>
        <MenuRefContext.Provider value={menuRef}>
          {children}
        </MenuRefContext.Provider>
      </DropDownContext.Provider>
    </div>
  );
}