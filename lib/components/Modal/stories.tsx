import { Meta, StoryObj } from "@storybook/react";
import { BottomNavigation } from "../BottomNavigation";
import { StoryComponent } from "./stories/StoryComponent";

const meta: Meta<typeof BottomNavigation.Root> = {
  component: BottomNavigation.Root,
};

export default meta;
type Story = StoryObj<typeof BottomNavigation.Root>;



export const Primary: Story = {
  render: () => {
    return <StoryComponent />;
  },
};
