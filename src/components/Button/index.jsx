import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};
const variants = {
  fill: {
    indigo_A700_01: "bg-indigo-A700_01 text-white-A700",
    light_blue_50: "bg-light_blue-50 text-blue-A400",
    gray_900: "bg-gray-900 text-gray-500",
    blue_A400: "bg-blue-A400 text-gray-50_01",
  },
};
const sizes = {
  md: "h-[73px] px-[35px] text-[32px]",
  sm: "h-[52px] px-[35px] text-base",
  xs: "h-[48px] px-[35px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "blue_A400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["indigo_A700_01", "light_blue_50", "gray_900", "blue_A400"]),
};

export { Button };
