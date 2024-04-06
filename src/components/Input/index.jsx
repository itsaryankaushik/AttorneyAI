import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};
const variants = {
  outline: {
    indigo_800: "border-indigo-800 border-[1.5px] border-solid text-blue_gray-100",
    gray_800: "border-gray-800 border border-solid text-gray-600",
    light_blue_50: "border-light_blue-50 border-[1.5px] border-solid text-blue_gray-800",
    blue_gray_100_01: "border-blue_gray-100_01 border border-solid text-blue_gray-300",
  },
};
const sizes = {
  xs: "h-[48px] pl-4 pr-[35px] text-sm",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "xs",
      color = "light_blue_50",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center text-sm border-solid rounded-lg  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["indigo_800", "gray_800", "light_blue_50", "blue_gray_100_01"]),
};

export { Input };
