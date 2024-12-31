import type { Meta, StoryObj } from "@storybook/react";
import { TUIRoot } from ".";

const meta: Meta<typeof TUIRoot> = {
  component: TUIRoot,
};

export default meta;
type Story = StoryObj<typeof TUIRoot>;

export const Primary: Story = {
  args: {},
};
