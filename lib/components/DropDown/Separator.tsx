import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import {
  HorizontalSeparator,
  HorizontalSeparatorProps,
} from "../Window/HorizontalSeparator";

export function Separator({ ...props }: HorizontalSeparatorProps) {
  return (
    <DropdownMenuSeparator asChild>
      <HorizontalSeparator {...props} />
    </DropdownMenuSeparator>
  );
}
