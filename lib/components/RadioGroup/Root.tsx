import * as RadioGroup from "@radix-ui/react-radio-group";
import { CurrentValueContext } from "./CurrentValueContext";

interface RootProps extends RadioGroup.RadioGroupProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function Root(props: RootProps) {
  return (
    <CurrentValueContext.Provider value={props.value}>
      <RadioGroup.Root {...props} />
    </CurrentValueContext.Provider>
  );
}
