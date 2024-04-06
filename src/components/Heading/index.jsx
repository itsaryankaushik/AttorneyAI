import React from "react";

const sizes = {
  s: "text-[28px] font-semibold md:text-[26px] sm:text-2xl",
  xs: "text-base font-semibold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900_01 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
