import * as RadioGroup from "@radix-ui/react-radio-group";
import { useContext } from "react";
import { CurrentValueContext } from "./CurrentValueContext";
import { ValueContext } from "./ValueContext";

interface IndicatorProps extends RadioGroup.RadioGroupIndicatorProps {
  surroundLeft?: string;
  surroundRight?: string;
  checkedCharacter?: string;
  uncheckedCharacter?: string;
  ref?: React.Ref<HTMLSpanElement | null> | null;
}

export function Indicator({
  surroundLeft = "(",
  surroundRight = ")",
  checkedCharacter = "*",
  uncheckedCharacter = " ",
  ref = null,
  ...props
}: IndicatorProps) {
  const currentValue = useContext(CurrentValueContext);
  const value = useContext(ValueContext);

  return (
    <RadioGroup.Indicator asChild {...props}>
      <span ref={ref}>
        {surroundLeft}
        {currentValue === value ? checkedCharacter : uncheckedCharacter}
        {surroundRight}
      </span>
    </RadioGroup.Indicator>
  );
}
