import { useContext } from "react";
import { Window } from "../Window";
import { WindowRootProps } from "../Window/Root";
import { MenuRefContext } from "./MenuRefContext";

export function Menu({ children, ...props }: WindowRootProps) {
  const menuRef = useContext(MenuRefContext);

  return (
    <Window.Root {...props}>
      <Window.Content ref={menuRef}>{children}</Window.Content>
    </Window.Root>
  );
}
