import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  iconImage?: string;
  headingText?: React.ReactNode;
  descriptionText?: React.ReactNode;
}

export default function IdentityVerificationComponent({
  iconImage = "images/img_television.svg",
  headingText = "Identity Verification",
  descriptionText = "Secure your account and transactions by completing the identity verification process.",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col items-center self-stretch gap-9 flex-1`}>
      <div className="w-[18%] rounded-[44px] bg-white-a700 px-3.5 py-4 shadow-sm">
        <Img src={iconImage} alt="Image" className="h-[52px] w-full" />
      </div>
      <div className="flex flex-1 flex-col items-start gap-2 sm:self-stretch">
        <Heading size="heading4xl" as="h5" className="!text-[23px] font-semibold tracking-[-0.46px] !text-gray-900_06">
          {headingText}
        </Heading>
        <Text size="textmd" as="p" className="w-full !text-[16px] font-normal leading-6 !text-blue_gray-800_02">
          {descriptionText}
        </Text>
      </div>
    </div>
  );
}
