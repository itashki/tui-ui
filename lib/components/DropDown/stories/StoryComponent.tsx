import { ANSI_COLOR, colorNameToCss, DropDown, useSize } from "lib/main";

export function StoryComponent() {
  const { chHeight } = useSize();

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: `${chHeight}px`,
        backgroundColor: colorNameToCss(ANSI_COLOR.CYAN),
        display: "flex",
        flexDirection: "row",
      }}
    >
      <DropDown.Root>
        <DropDown.Trigger
          style={{
            paddingLeft: `${chHeight}px`,
            paddingRight: `${chHeight}px`,
          }}
        >
          Trigger
        </DropDown.Trigger>
        <DropDown.Content
          padding={0}
          margin={0}
          backgroundColor={ANSI_COLOR.CYAN}
        >
          <DropDown.Item>Item 1</DropDown.Item>
          <DropDown.Item>Item 2</DropDown.Item>
          <DropDown.Item>Item 3</DropDown.Item>
          <DropDown.Separator />
          <DropDown.Item>Item 4</DropDown.Item>
          <DropDown.Item>Item 5</DropDown.Item>
          <DropDown.Item>Item 6</DropDown.Item>
        </DropDown.Content>
      </DropDown.Root>
      <DropDown.Root>
        <DropDown.Trigger
          style={{
            paddingLeft: `${chHeight}px`,
            paddingRight: `${chHeight}px`,
          }}
        >
          Trigger 2
        </DropDown.Trigger>
        <DropDown.Content
          padding={1}
          margin={2}
          backgroundColor={ANSI_COLOR.CYAN}
        >
          <DropDown.Item>Item 1</DropDown.Item>
          <DropDown.Item>Item 2</DropDown.Item>
          <DropDown.Item>Item 3</DropDown.Item>
          <DropDown.Separator />
          <DropDown.Item>Item 4</DropDown.Item>
          <DropDown.Item>Item 5</DropDown.Item>
          <DropDown.Item>Item 6</DropDown.Item>
        </DropDown.Content>
      </DropDown.Root>
      <DropDown.Root>
        <DropDown.Trigger
          style={{
            paddingLeft: `${chHeight}px`,
            paddingRight: `${chHeight}px`,
          }}
        >
          Trigger 3
        </DropDown.Trigger>
        <DropDown.Content
          padding={0}
          margin={0}
          backgroundColor={ANSI_COLOR.CYAN}
        >
          <DropDown.Item>Item 1</DropDown.Item>
          <DropDown.Item>Item 2</DropDown.Item>
          <DropDown.Item>Item 3</DropDown.Item>
          <DropDown.Separator />
          <DropDown.Item>Item 4</DropDown.Item>
          <DropDown.Item>Item 5</DropDown.Item>
          <DropDown.Item>Item 6</DropDown.Item>
        </DropDown.Content>
      </DropDown.Root>
    </div>
  );
}
