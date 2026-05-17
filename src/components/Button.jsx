import React from "react";

const Button = ({
  title,
  onSubmit,
  disabled,
  buttonStyle,
  titleStyle,
  autoFocus,
  location
}) => {
  return (
    <button
      autoFocus={autoFocus ?? null}
      disabled={disabled ?? false}
      onClick={onSubmit}
      className={` ${buttonStyle ? buttonStyle : "no-underline flex items-center py-2 justify-center w-44 duration-100 ease-in bg-purple-700 rounded-md shadow-xl md:h-fit md:w-fit md:min-w-[8rem] px-3 active:bg-purple-900  overflow-contain"}
        ${disabled ? "opacity-50" : "opacity-100"}
        ${location ?? "self-center"}
      `}
      type="submit"
    >
      <p
        className={`${titleStyle ? titleStyle : "no-underline  text-white  group-active:text-gray group-hover:text-lg group-hover:text-white"}`}
      >
        {title}
      </p>
    </button>
  );
};

export default Button;
