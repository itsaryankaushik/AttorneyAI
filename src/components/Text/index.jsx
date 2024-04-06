import React from "react";

const sizes = {
  xs: "text-base font-normal",
  lg: "text-[70px] font-normal md:text-5xl",
  s: "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  xl: "text-[80px] font-normal md:text-5xl",
  md: "text-[56px] font-light md:text-5xl sm:text-[42px]",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
