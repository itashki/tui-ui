import * as RadixCheckbox from "@radix-ui/react-checkbox";
import classNames from "./Checkbox.module.css";

export function Checkbox({
  children,
  className,
  ...props
}: RadixCheckbox.CheckboxProps) {
  return (
    <RadixCheckbox.Root {...props}>
      [
      <RadixCheckbox.Indicator
        className={classNames.indicator + (className ? ` ${className}` : "")}
      >
        X
      </RadixCheckbox.Indicator>
      {" " /* empty space if not checked*/}]{children}
    </RadixCheckbox.Root>
  );
}
