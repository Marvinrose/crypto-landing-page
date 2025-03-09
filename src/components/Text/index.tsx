import React from "react";

const sizes = {
  textxs: "text-[3px] font-normal",
  texts: "text-[4px] font-normal",
  textmd: "text-[5px] font-normal",
  textlg: "text-[6px] font-normal",
  textxl: "text-[20px] font-normal sm:text-[17px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "texts",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-blue_gray-500 font-inter ${className} ${sizes[size as keyof typeof sizes]} `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
