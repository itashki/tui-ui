import { Meta, StoryObj } from "@storybook/react";
import { TUIRoot } from "lib/components/TUIRoot";
import { TUIWindow } from "../Window";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { RadioGroup } from ".";

const meta: Meta<typeof TUIWindow.Root> = {
  component: TUIWindow.Root,
};

export default meta;
type Story = StoryObj<typeof TUIWindow.Root>;

export const Primary: Story = {
  render: () => (
    <TUIRoot backgroundColor={ANSI_COLOR.BLUE}>
      <TUIWindow.Root
        paddingTop={0}
        paddingBottom={0}
        paddingLeft={1}
        paddingRight={1}
        width={60}
        height={20}
        top={10}
        left={10}
      >
        <TUIWindow.Content>
          <RadioGroup.Root
            style={{
              display: "flex",
              width: "fit-content",
              flexDirection: "column",
            }}
          >
            <RadioGroup.Item value="1">Option 1</RadioGroup.Item>
            <RadioGroup.Item value="2">Option 2</RadioGroup.Item>
            <RadioGroup.Item value="3">Option 3</RadioGroup.Item>
          </RadioGroup.Root>
        </TUIWindow.Content>
      </TUIWindow.Root>
    </TUIRoot>
  ),
};
