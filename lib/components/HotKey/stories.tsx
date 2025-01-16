import { Meta, StoryObj } from "@storybook/react";
import { TUIRoot } from "lib/components/TUIRoot";
import { TUIWindow } from "../Window";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { HotKey } from ".";

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
        top={10}
        left={10}
      >
        <TUIWindow.Content>
            <HotKey hotKey="o" callback={() => alert("hotkey pressed")}>
              O
            </HotKey>
            pen alert
        </TUIWindow.Content>
      </TUIWindow.Root>
    </TUIRoot>
  ),
};
