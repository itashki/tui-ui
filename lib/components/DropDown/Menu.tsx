import { useContext } from "react";
import { TUIWindow } from "../Window";
import { WindowRootProps } from "../Window/Root";
import { MenuRefContext } from "./MenuRefContext";

export function Menu({ children, ...props }: WindowRootProps) {
  const menuRef = useContext(MenuRefContext);

  return (
    <TUIWindow.Root {...props}>
      <TUIWindow.Content ref={menuRef}>{children}</TUIWindow.Content>
    </TUIWindow.Root>
  );
}
