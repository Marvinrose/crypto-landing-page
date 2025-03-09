import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  rewardImage?: string;
  currencyName?: React.ReactNode;
  currencySymbol?: React.ReactNode;
  rewardTitle?: React.ReactNode;
  rewardPercentage?: React.ReactNode;
}

export default function AnnualRewardsDisplay({
  rewardImage = "images/img_sol_solana_48x48.png",
  currencyName = "Solana",
  currencySymbol = "(SOL)",
  rewardTitle = "Annual rewards",
  rewardPercentage = "9-12%",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full gap-2 p-6 sm:p-5 bg-white-a700 shadow-xs rounded-lg`}
    >
      <Img src={rewardImage} alt="Annual Rewards" className="h-[48px] rounded-[24px] object-cover" />
      <div className="flex flex-wrap gap-1">
        <Heading size="headingmd" as="h5" className="text-[20px] font-semibold !text-gray-900_06">
          {currencyName}
        </Heading>
        <Heading size="headingmd" as="h5" className="text-[20px] font-semibold !text-gray-500">
          {currencySymbol}
        </Heading>
      </div>
      <Heading size="heading3xl" as="p" className="text-[14px] font-semibold !text-gray-900_06">
        {rewardTitle}
      </Heading>
      <Text size="textmd" as="p" className="text-[16px] font-normal !text-teal-500">
        {rewardPercentage}
      </Text>
    </div>
  );
}
