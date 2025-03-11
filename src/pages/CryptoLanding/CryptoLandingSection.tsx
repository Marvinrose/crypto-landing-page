import { Text, Heading, Img, Button } from "../../components";
import BuyBitcoinTransaction from "../../components/BuyBitcoinTransaction";
import CryptoDashboard from "../../components/CryptoDashboard";
import IosAppProfile from "../../components/IosAppProfile";
import NotificationRow from "../../components/NotificationRow";
import mockup from "../../images/img_mockup.png";
import React, { Suspense } from "react";

const platformSupportGrid = [
  { appIcon: "images/img_icon.svg", appName: "iOS App" },
  { appIcon: "images/img_icon_gray_900_06.svg", appName: "Andriod" },
  { appIcon: "images/img_icon_black_900_01.svg", appName: "App Store" },
  { appIcon: "images/img_icon_gray_900_06_32x32.svg", appName: "Linux" },
  { appIcon: "images/img_icon_32x32.svg", appName: "Windows" },
];

export default function CryptoLandingSection() {
  return (
    <>
      {/* crypto landing section */}
      <div className="flex justify-center">
        <div className="container-xs flex justify-center md:px-5">
          <div className="flex w-full items-start bg-gray-50_01 md:flex-col">
            <div className="flex w-[44%] flex-col gap-10 md:w-full md:px-5">
              <img src="images/Mock_Up.png" alt="any" srcSet="" />
            </div>
            <div className="flex w-[44%] flex-col gap-10 md:w-full md:px-5">
              <div className="ml-7 flex flex-col items-start gap-3 bg-gray-50_01 md:ml-0">
                <Heading
                  size="heading5xl"
                  as="h2"
                  className="!text-[33px] font-semibold tracking-[-0.66px] !text-gray-900_06 md:text-[31px] sm:text-[29px]"
                >
                  Trade Anywhere, Anytime
                </Heading>
                <Text
                  size="textlg"
                  as="p"
                  className="w-full !text-[18px] font-normal leading-[22px] !text-blue_gray-800_02"
                >
                  Stay in touch across multiple devices and never miss out on
                  opportunities.
                </Text>
              </div>
              <div className="ml-7 bg-gray-50_01 md:ml-0">
                <div className="mr-[104px] grid grid-cols-3 gap-[58px] md:mr-0 sm:grid-cols-1">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {platformSupportGrid.map((d, index) => (
                      <IosAppProfile {...d} key={"gridiosAppOne" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
