import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  secureStorageTitle?: React.ReactNode;
  secureStorageDescription?: React.ReactNode;
  imageSrc?: string;
}

export default function SecureStorageIllustration({
  secureStorageTitle = "Secure Storage",
  secureStorageDescription = "&lt;&gt;We ensure your funds are protected with both&lt;br /&gt;centralized and decentralized methods.&lt;/&gt;",
  imageSrc = "images/img_blockchain.svg",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col gap-4`}>
      <div className="mx-[38px] self-stretch rounded bg-gray-50_01 p-3.5">
        <Img src={imageSrc} alt="Secure Storage" className="h-[126px] w-full" />
      </div>
      <div className="flex flex-col items-center gap-2.5 self-stretch">
        <Heading
          size="headingmd"
          as="h5"
          className="!text-[20px] font-semibold !text-gray-900_06"
        >
          {secureStorageTitle}
        </Heading>
        <Text
          size="textmd"
          as="p"
          className="self-stretch text-center !text-[16px] font-normal leading-6 !text-blue_gray-800_02"
        >
          {secureStorageDescription}
        </Text>
      </div>
    </div>
  );
}
