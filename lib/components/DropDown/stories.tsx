import { Meta, StoryObj } from "@storybook/react";
import { TUIWindow } from "../Window";
import { StoryComponent } from "./stories/StoryComponent";
import { TUIRoot } from "../TUIRoot";
import { ANSI_COLOR } from "lib/ANSI_COLORS";

const meta: Meta<typeof TUIWindow.Root> = {
  component: TUIWindow.Root,
};

export default meta;
type Story = StoryObj<typeof TUIWindow.Root>;

export const Primary: Story = {
  render: () => (
    <TUIRoot backgroundColor={ANSI_COLOR.BLUE}>
      <StoryComponent />
    </TUIRoot>
  ),
};
