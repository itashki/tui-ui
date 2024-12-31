import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckedContext } from "./CheckedContext";
import { useContext } from "react";

interface IndicatorProps extends Checkbox.CheckboxIndicatorProps {
  surroundLeft?: string;
  surroundRight?: string;
  checkedCharacter?: string;
  uncheckedCharacter?: string;
}

export function Indicator({
  surroundLeft = "[",
  surroundRight = "]",
  checkedCharacter = "X",
  uncheckedCharacter = " ",
  ...props
}: IndicatorProps) {
  const checked = useContext(CheckedContext);

  return (
    <Checkbox.Indicator asChild {...props}>
      <span>
        {surroundLeft}
        {checked ? checkedCharacter : uncheckedCharacter}
        {surroundRight}
      </span>
    </Checkbox.Indicator>
  );
}
