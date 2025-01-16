import { Meta, StoryObj } from "@storybook/react";
import { TUIRoot } from "lib/components/TUIRoot";
import { TUIWindow } from "../Window";
import { ANSI_COLOR } from "lib/ANSI_COLORS";
import { Color } from ".";
import { HorizontalSeparator } from "../Window/HorizontalSeparator";

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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "fit-content",
            }}
          >
            <Color.Text color={ANSI_COLOR.RED}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            </Color.Text>
            <HorizontalSeparator />
            <Color.Text color={ANSI_COLOR.GREEN}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            </Color.Text>
            <HorizontalSeparator />
            <Color.Background color={ANSI_COLOR.YELLOW}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            </Color.Background>
            <HorizontalSeparator />
            <Color.Background color={ANSI_COLOR.BLUE}>
              <Color.Text color={ANSI_COLOR.MAGENTA}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              </Color.Text>
            </Color.Background>
          </div>
        </TUIWindow.Content>
      </TUIWindow.Root>
    </TUIRoot>
  ),
};
