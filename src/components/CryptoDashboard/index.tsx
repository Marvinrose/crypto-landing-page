import { Heading, Img, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
  cryptoQuantity?: React.ReactNode;
  cryptoSymbol?: React.ReactNode;
  cryptoPrice?: React.ReactNode;
  groupImage?: string;
  cryptoImage?: string;
  cryptoPair?: React.ReactNode;
  dropdownImage?: string;
  percentageChange?: React.ReactNode;
}

export default function CryptoDashboard({
  cryptoQuantity = "0.8756",
  cryptoSymbol = "BTC",
  cryptoPrice = "$25,789.43",
  groupImage = "images/img_group_4.png",
  cryptoImage = "images/img_btc_bitcoin.png",
  cryptoPair = "BTC/USDT",
  dropdownImage = "images/img_dropdown.svg",
  percentageChange = "2.5%",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[32%] gap-1 p-2 border-gray-900_04 border-[0.35px] border-solid bg-gray-900_01 cursor-pointer rounded hover:shadow-md`}
    >
      <div className="flex flex-col items-start self-stretch">
        <div className="flex flex-wrap self-stretch">
          <Heading size="headinglg" as="p" className="text-[6.35px] font-semibold">
            {cryptoQuantity}
          </Heading>
          <Text size="textmd" as="p" className="text-[5.65px] font-normal !text-white-a700">
            {cryptoSymbol}
          </Text>
        </div>
        <Heading as="p" className="text-[4.94px] font-semibold !text-indigo-100">
          {cryptoPrice}
        </Heading>
      </div>
      <Img src={groupImage} alt="Image" className="h-[24px] object-cover" />
      <div className="flex items-center justify-center gap-1 self-stretch py-0.5">
        <Img src={cryptoImage} alt="Image" className="h-[16px] object-cover" />
        <div className="flex flex-1 flex-col items-center gap-0.5">
          <Heading as="p" className="text-[4.94px] font-semibold">
            {cryptoPair}
          </Heading>
          <div className="flex items-center self-stretch">
            <Img src={dropdownImage} alt="Image" className="h-[2px] rounded-[1px]" />
            <Heading as="p" className="text-[4.24px] font-semibold !text-teal-400">
              {percentageChange}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
