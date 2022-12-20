import React from "react";

interface InputProps {
  className?: string;
  onChange?: ({ name, value }: { name?: string; value: string }) => void;
  placeholder?: string;
  value?: string;
  name?: string;
}

export const Input = ({
  placeholder,
  value,
  name,
  className,
  onChange,
}: InputProps) => {
  let classNameInput = `${
    className ?? ""
  } h-[5em] w-[25em] flex items-center justify-center uppercase transition-colors duration-200 select-none`;

  classNameInput = `${classNameInput} cursor-pointer bg-black shadow-container`;

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange({ name, value: event.target.value });
  };
  return (
    <div className={classNameInput}>
      <input
        className="h-full w-full outline-none bg-grey-600 text-text-high px-2 text-[1.1em] placeholder:text-text-main"
        value={value}
        name={name}
        onChange={onChangeInput}
        placeholder={placeholder}
      />
    </div>
  );
};
