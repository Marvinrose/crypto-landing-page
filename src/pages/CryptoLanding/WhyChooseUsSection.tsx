import { Text, Heading } from "../../components";
import SecureStorageIllustration from "../../components/SecureStorageIllustration";
import React, { Suspense } from "react";

const securityFeaturesList = [
  {
    secureStorageTitle: "Secure Storage",
    secureStorageDescription: (
      <>
        We ensure your funds are protected with both
        <br />
        centralized and decentralized methods.
      </>
    ),
    imageSrc: "images/img_blockchain.svg",
  },
  {
    secureStorageTitle: "Insurance Protection",
    secureStorageDescription:
      "All crypto cash and balances are maintained and insured by NIDC up to a maximum of $400,000.",
    imageSrc: "images/insurance.png",
  },
  {
    secureStorageTitle: "Personalized Access Control",
    secureStorageDescription:
      "Personalized access control allows you to restrict devices and addresses that can access your account, for greater ease of mind.",
    imageSrc: "images/personalized.png",
  },
];

export default function WhyChooseUsSection() {
  return (
    <>
      {/* why choose us section */}
      <div>
        <div className="flex flex-col items-center justify-center bg-gray-50_01 py-[62px] md:py-5">
          <div className="container-xs flex flex-col gap-16 md:px-5 sm:gap-8">
            <div className="flex flex-col items-center gap-0.5 bg-gray-50_01 px-14 md:px-5">
              <Heading
                size="headinglg"
                as="h4"
                className="!text-[39px] font-semibold tracking-[-0.78px] !text-gray-900_06 md:text-[37px] sm:text-[35px]"
              >
                Your Most Reliable Crypto Exchange
              </Heading>
              <Text
                size="textxl"
                as="p"
                className="!text-[20px] font-normal !text-blue_gray-800_02"
              >
                Here are some reasons why you should choose VeeWallet
              </Text>
            </div>
            <div className="flex gap-[196px] md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {securityFeaturesList.map((d, index) => (
                  <SecureStorageIllustration
                    {...d}
                    key={"content" + index}
                    className="w-[32%] md:w-full"
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
