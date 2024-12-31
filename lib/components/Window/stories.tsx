import { Meta, StoryObj } from "@storybook/react";
import { TUIRoot } from "lib/components/TUIRoot";
import { Window } from ".";
import { ANSI_COLOR } from "lib/ANSI_COLORS";

const meta: Meta<typeof Window.Root> = {
  component: Window.Root,
};

export default meta;
type Story = StoryObj<typeof Window.Root>;

export const Primary: Story = {
  render: () => (
    <TUIRoot backgroundColor={ANSI_COLOR.BLUE}>
      <Window.Root width={30} height={10} top={10} left={10}>
        <Window.Border>
          <Window.Content>
            ad minim veniam, nisi ut
            <Window.HorizontalDelimiter
              coverPaddingLeft={true}
              coverPaddingRight={true}
              connectedLeft={true}
              connectedRight={true}
            />
            aliquip ex ea commodo consequat
          </Window.Content>
        </Window.Border>
      </Window.Root>
    </TUIRoot>
  ),
};
