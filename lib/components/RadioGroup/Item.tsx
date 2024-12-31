import * as RadioGroup from "@radix-ui/react-radio-group";
import { ValueContext } from "./ValueContext";

export function Item(props: RadioGroup.RadioGroupItemProps) {
  return (
    <ValueContext.Provider value={props.value}>
      <RadioGroup.Item {...props} />
    </ValueContext.Provider>
  );
}
