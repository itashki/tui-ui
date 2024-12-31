import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckedContext } from "./CheckedContext";

interface RootProps extends Checkbox.CheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function Root(props: RootProps) {
  return (
    <CheckedContext.Provider value={props.checked}>
      <Checkbox.Root {...props} />
    </CheckedContext.Provider>
  );
}
