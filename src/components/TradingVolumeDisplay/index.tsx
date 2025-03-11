import { Text, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  price?: React.ReactNode;
  tradingVolumeText?: React.ReactNode;
}

export default function TradingVolumeDisplay({
  price = "$2.05 billion",
  tradingVolumeText = "24h Trading Volume",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start md:w-full gap-1`}>
      <Heading size="headinglg" as="h1" className="!text-[39px] font-semibold tracking-[-0.78px] !text-teal-500">
        {price}
      </Heading>
      <Text size="textlg" as="p" className="!text-[18px] font-normal !text-blue_gray-800_02">
        {tradingVolumeText}
      </Text>
    </div>
  );
}
