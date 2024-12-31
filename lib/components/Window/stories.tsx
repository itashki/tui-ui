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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Window.Content>
        </Window.Border>
      </Window.Root>
    </TUIRoot>
  ),
};
