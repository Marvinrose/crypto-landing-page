import { Button, Img, Text, Heading } from "../../components";
import IdentityVerificationComponent from "../../components/IdentityVerificationComponent";
import React, { Suspense } from "react";

const verificationProcessList = [
  {
    iconImage: "images/img_television.svg",
    headingText: "Identity Verification",
    descriptionText: "Secure your account and transactions by completing the identity verification process.",
  },
  {
    iconImage: "images/img_user_gray_100_02.svg",
    headingText: "Make a Deposit",
    descriptionText:
      "Fund your crypto account to begin trading. A variety of payment methods are available for adding funds.",
  },
  {
    iconImage: "images/img_settings.svg",
    headingText: "Start Trading",
    descriptionText:
      "Fund your crypto account to begin trading. A variety of payment methods are available for adding funds.",
  },
  {
    iconImage: "images/img_user_gray_200_01.svg",
    headingText: "Keep Track of Your Portfolio",
    descriptionText: "Buy and sell popular digital currencies, keep track of them in one place.",
  },
];

export default function CryptoPortfolioSection() {
  return (
    <>
      {/* crypto portfolio section */}
      <div className="mt-[62px] flex flex-col items-center">
        <div className="container-xs flex flex-col gap-10 md:px-5">
          <div className="flex flex-col items-start">
            <Heading
              size="headinglg"
              as="h2"
              className="text-[39px] font-semibold tracking-[-0.78px] !text-gray-900_06 md:text-[37px] sm:text-[35px]"
            >
              Start Building Your Crypto Portifolio
            </Heading>
            <Text size="textxl" as="p" className="text-[20px] font-normal !text-blue_gray-800_02">
              Follow these simple steps to start your first trade.
            </Text>
          </div>
          <div className="flex flex-col items-start gap-10">
            <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
              <div className="flex w-[44%] flex-col gap-12 md:w-full">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {verificationProcessList.map((d, index) => (
                    <IdentityVerificationComponent {...d} key={"leftcontent" + index} />
                  ))}
                </Suspense>
              </div>
              <Img
                src="images/img_illustration.svg"
                alt="Illustration"
                className="h-[446px] w-[38%] object-contain md:w-full"
              />
            </div>
            <Button size="lg" shape="round" className="min-w-[180px] rounded-lg px-[18px] font-semibold">
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
