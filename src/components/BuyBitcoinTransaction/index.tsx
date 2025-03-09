import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  iconImage?: string;
  transactionTitle?: React.ReactNode;
  transactionDate?: React.ReactNode;
  transactionAmount?: React.ReactNode;
  transactionPrice?: React.ReactNode;
}

export default function BuyBitcoinTransaction({
  iconImage = "images/img_icons_black_teal_400.svg",
  transactionTitle = "Buy Bitcoin",
  transactionDate = "29 October 2022, 4:32 AM",
  transactionAmount = "+0.2343 BTC",
  transactionPrice = "$3,678.87",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-center self-stretch gap-5 flex-1`}>
      <div className="flex flex-col items-center rounded-lg bg-cyan-50 p-1">
        <Img src={iconImage} alt="Buy Bitcoin" className="h-[8px]" />
      </div>
      <div className="flex flex-1 justify-between gap-5">
        <div className="flex flex-1 flex-col items-start justify-center gap-0.5">
          <Heading as="p" className="text-[4.94px] font-semibold">
            {transactionTitle}
          </Heading>
          <Text as="p" className="text-[4.24px] font-normal !text-gray-500">
            {transactionDate}
          </Text>
        </div>
        <div className="flex flex-col items-end gap-0.5">
          <Heading size="headingmd" as="p" className="text-[5.65px] font-semibold">
            {transactionAmount}
          </Heading>
          <Text as="p" className="text-[4.24px] font-normal !text-gray-500">
            {transactionPrice}
          </Text>
        </div>
      </div>
    </div>
  );
}
