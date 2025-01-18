import { useContext } from "react";
import { SizeContext } from "../TUIRoot/SizeContext";
import classNames from "./Modal.module.css";
import { SHADE } from "lib/BOX_DRAWING";
import { Shade } from "../Shade";
import { ANSI_COLOR } from "lib/ANSI_COLORS";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  close: () => void;
  shade?: SHADE;
  shadeColor?: ANSI_COLOR;
  ref?: React.Ref<HTMLDivElement | null> | null;
}

export function Modal({
  close,
  shade = SHADE.LIGHT_SHADE,
  shadeColor = ANSI_COLOR.BLACK,
  style,
  children,
  ref = null,
  className,

  ...props
}: ModalProps) {
  const { tHeight, tWidth } = useContext(SizeContext);

  return (
    <>
      <div
        className={classNames.clickAway + (className ? ` ${className}` : "")}
        style={{
          width: `calc(${tWidth}) * 1ch`,
          height: `calc(${tHeight}) * 1em`,
          ...style,
        }}
        onClick={() => close()}
        ref={ref}
        {...props}
      >
        {shade !== SHADE.NONE && (
          <Shade
            color={shadeColor}
            height={tHeight}
            width={tWidth}
            shade={shade}
          />
        )}
      </div>
      {children}
    </>
  );
}
