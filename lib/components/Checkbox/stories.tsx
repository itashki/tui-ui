import { Meta, StoryObj } from "@storybook/react";
import { TUIRoot } from "lib/components/TUIRoot";
import { TUIWindow } from "../Window";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { Checkbox } from ".";

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
          <div style={{ display: "flex", flexDirection: "column", width: "fit-content" }}>
            <Checkbox>Option 1</Checkbox>
            <Checkbox>Option 2</Checkbox>
            <Checkbox>Option 3</Checkbox>
          </div>
        </TUIWindow.Content>
      </TUIWindow.Root>
    </TUIRoot>
  ),
};
