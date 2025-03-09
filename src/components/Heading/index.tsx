import React from "react";

const sizes = {
  headingxs: "text-[3px] font-semibold",
  headings: "text-[4px] font-semibold",
  headingmd: "text-[5px] font-semibold",
  headinglg: "text-[6px] font-semibold",
  headingxl: "text-[7px] font-semibold",
  heading2xl: "text-[13px] font-semibold",
  textxl: "text-[9px] font-medium",
  text2xl: "text-[10px] font-medium",
  heading3xl: "text-[14px] font-semibold",
  heading4xl: "text-[23px] font-semibold md:text-[21px] sm:text-[19px]",
  heading5xl: "text-[33px] font-semibold md:text-[31px] sm:text-[28px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headings",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-white-a700 font-inter ${className} ${sizes[size] as keyof typeof sizes}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
