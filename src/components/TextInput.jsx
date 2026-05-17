import React from "react";
import ToolTip from "./Tooltip";

//TODO: When adding props to this text imput, also add props to other text inputs

const TextInput = ({
  name,
  label,
  placeholder,
  onChange,
  value,
  tooltip,
  maxLength,
  required,
  type,
  autoFocus,
  children,
  width
}) => {
  return (
    <div className={`${width} flex flex-col gap-3`}>
      <div className="flex flex-row">
        <label htmlFor={name} className="">
          {label}
        </label>
        {required ? "*" : null}
        {tooltip ? <ToolTip description={tooltip} /> : null}
      </div>
      <input
        className="md:w-[18rem] text-lg border-b-2 border-gray-400 mr-1 outline-0 shrink-0"
        id={name}
        autoFocus={autoFocus}
        maxLength={maxLength}
        type={type ? type : "text"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {children}
    </div>
  );
};

export default TextInput;
