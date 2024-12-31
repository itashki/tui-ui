import { Meta, StoryObj } from "@storybook/react";
import { TUIRoot } from "../TUIRoot";
import { BottomNavigation } from ".";

const meta: Meta<typeof BottomNavigation.Root> = {
  component: BottomNavigation.Root,
};

export default meta;
type Story = StoryObj<typeof BottomNavigation.Root>;

export const Primary: Story = {
  render: () => (
    <TUIRoot>
      <BottomNavigation.Root>
        <BottomNavigation.Entrie hotKey="1" callback={() => {}}>
          <BottomNavigation.HotKey>&nbsp;1</BottomNavigation.HotKey>
          <BottomNavigation.Label>Home</BottomNavigation.Label>
        </BottomNavigation.Entrie>
        <BottomNavigation.Entrie hotKey="2" callback={() => {}}>
          <BottomNavigation.HotKey>&nbsp;2</BottomNavigation.HotKey>
          <BottomNavigation.Label>Settings</BottomNavigation.Label>
        </BottomNavigation.Entrie>
        <BottomNavigation.Entrie hotKey="3" callback={() => {}}>
          <BottomNavigation.HotKey>&nbsp;3</BottomNavigation.HotKey>
          <BottomNavigation.Label>Profile</BottomNavigation.Label>
        </BottomNavigation.Entrie>
        <BottomNavigation.Entrie hotKey="4" callback={() => {}}>
          <BottomNavigation.HotKey>&nbsp;4</BottomNavigation.HotKey>
          <BottomNavigation.Label>Logout</BottomNavigation.Label>
        </BottomNavigation.Entrie>
        <BottomNavigation.Entrie hotKey="5" callback={() => {}}>
          <BottomNavigation.HotKey>&nbsp;5</BottomNavigation.HotKey>
          <BottomNavigation.Label>Exit</BottomNavigation.Label>
        </BottomNavigation.Entrie>
        <BottomNavigation.Entrie hotKey="6" callback={() => {}}>
          <BottomNavigation.HotKey>&nbsp;6</BottomNavigation.HotKey>
          <BottomNavigation.Label>Help</BottomNavigation.Label>
        </BottomNavigation.Entrie>
        <BottomNavigation.Entrie hotKey="7" callback={() => {}}>
          <BottomNavigation.HotKey>&nbsp;7</BottomNavigation.HotKey>
          <BottomNavigation.Label>About</BottomNavigation.Label>
        </BottomNavigation.Entrie>
        <BottomNavigation.Entrie hotKey="8" callback={() => {}}>
          <BottomNavigation.HotKey>&nbsp;8</BottomNavigation.HotKey>
          <BottomNavigation.Label>Feedback</BottomNavigation.Label>
        </BottomNavigation.Entrie>
        <BottomNavigation.Entrie hotKey="9" callback={() => {}}>
          <BottomNavigation.HotKey>&nbsp;9</BottomNavigation.HotKey>
          <BottomNavigation.Label>Report</BottomNavigation.Label>
        </BottomNavigation.Entrie>
        <BottomNavigation.Entrie hotKey="0" callback={() => {}}>
          <BottomNavigation.HotKey>10</BottomNavigation.HotKey>
          <BottomNavigation.Label>More</BottomNavigation.Label>
        </BottomNavigation.Entrie>
        <BottomNavigation.Entrie hotKey="q" callback={() => {}}>
          <BottomNavigation.HotKey>&nbsp;q</BottomNavigation.HotKey>
          <BottomNavigation.Label>Quit</BottomNavigation.Label>
        </BottomNavigation.Entrie>
        <BottomNavigation.Entrie hotKey="w" callback={() => {}}>
          <BottomNavigation.HotKey>&nbsp;w</BottomNavigation.HotKey>
          <BottomNavigation.Label>Write</BottomNavigation.Label>
        </BottomNavigation.Entrie>
        <BottomNavigation.Entrie hotKey="e" callback={() => {}}>
          <BottomNavigation.HotKey>&nbsp;e</BottomNavigation.HotKey>
          <BottomNavigation.Label>Edit</BottomNavigation.Label>
        </BottomNavigation.Entrie>
        <BottomNavigation.Entrie hotKey="r" callback={() => {}}>
          <BottomNavigation.HotKey>r</BottomNavigation.HotKey>
          <BottomNavigation.Label>Read</BottomNavigation.Label>
        </BottomNavigation.Entrie>
      </BottomNavigation.Root>
    </TUIRoot>
  ),
};
