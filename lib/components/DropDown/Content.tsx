import {
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { TUIWindow } from "../Window";
import { WindowRootProps } from "../Window/Root";

export function Content({ children, ...props }: WindowRootProps) {
  return (
      <DropdownMenuContent asChild>
        <TUIWindow.Root {...props}>
          <TUIWindow.Content>{children}</TUIWindow.Content>
        </TUIWindow.Root>
      </DropdownMenuContent>
  );
}
