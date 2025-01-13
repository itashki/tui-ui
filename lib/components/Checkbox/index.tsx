import * as RadixCheckbox from "@radix-ui/react-checkbox";

export function Checkbox({ children, ...props }: RadixCheckbox.CheckboxProps) {
  return (
    <RadixCheckbox.Root {...props}>
      [
      <RadixCheckbox.Indicator style={{ position: "absolute" }}>
        X
      </RadixCheckbox.Indicator>
      {" " /* empty space if not checked*/}]{children}
    </RadixCheckbox.Root>
  );
}
