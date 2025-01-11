import * as RadioGroup from "@radix-ui/react-radio-group";

export function Item({ children, ...props }: RadioGroup.RadioGroupItemProps) {
  return (
    <RadioGroup.Item {...props}>
      (
      <RadioGroup.Indicator style={{ position: "absolute" }}>
        *
      </RadioGroup.Indicator>
      {" " /* empty space if not checked*/}){children}
    </RadioGroup.Item>
  );
}
