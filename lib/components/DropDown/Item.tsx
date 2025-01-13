import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useRegisterHotKey, useSize } from "lib/main";

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  onSelect?: () => void;
  hotKey?: string;
}

export function Item({
  onSelect,
  hotKey,
  children,
  style,
  ...props
}: DropdownMenuItemProps) {
  const registerHotKey = useRegisterHotKey();

  if (hotKey && onSelect) {
    registerHotKey(hotKey, onSelect);
  }

  const { chHeight } = useSize();

  return (
    <DropdownMenuItem asChild onSelect={onSelect}>
      <div
        style={{
          height: chHeight,
          width: "100%",
          userSelect: "none",
          position: "relative",
          ...style,
        }}
        {...props}
      >
        {hotKey && (
          <div
            style={{
              width: "fit-content",
              height: chHeight,
              position: "absolute",
              right: 0,
            }}
          >
            {hotKey}
          </div>
        )}
        {children}
      </div>
    </DropdownMenuItem>
  );
}
