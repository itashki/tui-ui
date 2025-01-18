import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useRegisterHotKey } from "lib/main";
import classNames from "./DropDown.module.css";

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  onSelect?: () => void;
  hotKey?: string;
}

export function Item({
  onSelect,
  hotKey,
  children,
  className,
  ...props
}: DropdownMenuItemProps) {
  const registerHotKey = useRegisterHotKey();

  if (hotKey && onSelect) {
    registerHotKey(hotKey, onSelect);
  }

  return (
    <DropdownMenuItem asChild onSelect={onSelect}>
      <div
        className={classNames.item + (className ? ` ${className}` : "")}
        {...props}
      >
        {hotKey && <div className={classNames.hotKey}>{hotKey}</div>}
        {children}
      </div>
    </DropdownMenuItem>
  );
}
