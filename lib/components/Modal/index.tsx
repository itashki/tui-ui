import { useContext } from "react";
import { SizeContext } from "../TUIRoot/SizeContext";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  close: () => void;
  ref?: React.Ref<HTMLDivElement | null> | null;
}

export function Modal({
  close,
  style,
  children,
  ref = null,
  ...props
}: ModalProps) {
  const { chWidth, chHeight, tHeight, tWidth } = useContext(SizeContext);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: tWidth * chWidth,
          height: tHeight * chHeight,
          ...style,
        }}
        onClick={() => close()}
        ref={ref}
        {...props}
      ></div>
      {children}
    </>
  );
}
