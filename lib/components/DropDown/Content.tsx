import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { TUIWindow } from "../Window";
import { WindowRootProps } from "../Window/Root";

export function Content({ children, ...props }: WindowRootProps) {
  return (
    <DropdownMenuContent asChild align="start">
      <TUIWindow.Root padding={0} margin={0} {...props}>
        <TUIWindow.Content>{children}</TUIWindow.Content>
      </TUIWindow.Root>
    </DropdownMenuContent>
  );
}
