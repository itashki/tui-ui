import * as RadioGroup from "@radix-ui/react-radio-group";
import classNames from "./RadioGroup.module.css";

export function Item({ children, ...props }: RadioGroup.RadioGroupItemProps) {
  return (
    <RadioGroup.Item {...props}>
      (
      <RadioGroup.Indicator className={classNames.indicator}>
        *
      </RadioGroup.Indicator>
      {" " /* empty space if not checked*/}){children}
    </RadioGroup.Item>
  );
}
