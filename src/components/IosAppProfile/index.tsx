import { Text, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  appIcon?: string;
  appName?: React.ReactNode;
}

export default function IosAppProfile({ appIcon = "images/img_icon.svg", appName = "iOS App", ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full gap-2.5 px-4`}>
      <Img src={appIcon} alt="Ios App" className="h-[32px]" />
      <Text size="textmd" as="p" className="!text-[16px] font-normal !text-gray-900_06">
        {appName}
      </Text>
    </div>
  );
}
