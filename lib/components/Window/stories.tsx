import { Meta, StoryObj } from "@storybook/react";
import { TUIRoot } from "lib/components/TUIRoot";
import { TUIWindow } from ".";
import { ANSI_COLOR } from "lib/ANSI_COLORS";

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
        marginTop={0}
        marginBottom={0}
        marginLeft={1}
        marginRight={1}
        top={10}
        left={10}
      >
        <TUIWindow.Content>
          ad minim veniam, nisi ut
          <TUIWindow.HorizontalSeparator
            coverPaddingLeft={true}
            coverPaddingRight={true}
            connectedLeft={true}
            connectedRight={true}
          />
          aliquip ex ea commodo consequat
        </TUIWindow.Content>
      </TUIWindow.Root>
    </TUIRoot>
  ),
};
