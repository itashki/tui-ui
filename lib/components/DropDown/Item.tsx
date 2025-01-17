import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useRegisterHotKey } from "lib/main";

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

  return (
    <DropdownMenuItem asChild onSelect={onSelect}>
      <div
        style={{
          height: `1em`,
          width: "100%",
          userSelect: "none",
          position: "relative",
          textWrap: "nowrap",
          ...style,
        }}
        {...props}
      >
        {hotKey && (
          <div
            style={{
              width: "fit-content",
              height: `1em`,
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
