import React from "react";

interface ButtonProps {
  children: React.ReactElement | string;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Button = ({
  children,
  className,
  onClick,
  disabled,
}: ButtonProps) => {
  let classNameButton = `${
    className ?? ""
  } h-[5em] w-[15em] flex items-center justify-center uppercase transition-colors duration-200 select-none`;
  if (disabled)
    classNameButton = `${classNameButton} cursor-not-allowed bg-grey-400 text-text-button-disabled`;
  else
    classNameButton = `${classNameButton} cursor-pointer bg-primary-200 text-text-high hover:bg-primary-300 hover:text-text-button`;

  const onClickButton = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled) onClick?.(event);
  };
  return (
    <div className={classNameButton} onClick={onClickButton}>
      {children}
    </div>
  );
};
