import { TUIRoot } from "lib/components/TUIRoot";
import { useState } from "react";
import { Modal } from "..";
import { TUIWindow } from "lib/components/Window";
import { BottomNavigation } from "lib/components/BottomNavigation";

export function StoryComponent() {
  const [open, setOpen] = useState(false);
  return (
    <TUIRoot>
      {open && (
        <Modal close={() => setOpen((open) => !open)}>
          <TUIWindow.Root height={10} width={40} top={10} left={25}>
            gdsfgfshdf
          </TUIWindow.Root>
        </Modal>
      )}
      <BottomNavigation.Root>
        <BottomNavigation.Entrie
          hotKey="o"
          callback={() => setOpen((open) => !open)}
        >
          <BottomNavigation.HotKey>
            &nbsp;o
          </BottomNavigation.HotKey>
          <BottomNavigation.Label>OpenModal</BottomNavigation.Label>
        </BottomNavigation.Entrie>
      </BottomNavigation.Root>
    </TUIRoot>
  );
}
