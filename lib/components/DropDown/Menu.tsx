import { useContext } from "react";
import { Window } from "../Window";
import { WindowRootProps } from "../Window/Root";
import { MenuRefContext } from "./MenuRefContext";

export function Menu({ ...props }: WindowRootProps) {
  const menuRef = useContext(MenuRefContext);

  return (
    <Window.Root {...props}>
      <Window.Content ref={menuRef}></Window.Content>
    </Window.Root>
  );
}
