import { Button, Img, Text, Heading } from "../../components";
import AnnualRewardsDisplay from "../../components/AnnualRewardsDisplay";
import React, { Suspense } from "react";

const annualRewardsGrid = [
  {
    rewardImage: "images/img_sol_solana_48x48.png",
    currencyName: "Solana",
    currencySymbol: "(SOL)",
    rewardTitle: "Annual rewards",
    rewardPercentage: "9-12%",
  },
  {
    rewardImage: "images/img_sol_solana_48x48.png",
    currencyName: "Solana",
    currencySymbol: "(SOL)",
    rewardTitle: "Annual rewards",
    rewardPercentage: "9-12%",
  },
  {
    rewardImage: "images/img_sol_solana_48x48.png",
    currencyName: "Solana",
    currencySymbol: "(SOL)",
    rewardTitle: "Annual rewards",
    rewardPercentage: "9-12%",
  },
  {
    rewardImage: "images/img_wan_wanchain.png",
    currencyName: "Wanchain",
    currencySymbol: "(WAN)",
    rewardTitle: "Annual rewards",
    rewardPercentage: "6-10%",
  },
  {
    rewardImage: "images/img_dash_dash.png",
    currencyName: "DASH",
    currencySymbol: "(DASH)",
    rewardTitle: "Annual rewards",
    rewardPercentage: "5-12%",
  },
  {
    rewardImage: "images/img_sol_solana_48x48.png",
    currencyName: "Solana",
    currencySymbol: "(SOL)",
    rewardTitle: "Annual rewards",
    rewardPercentage: "9-12%",
  },
  {
    rewardImage: "images/img_ont_ontology_token.png",
    currencyName: "Ontology ",
    currencySymbol: "(ONT)",
    rewardTitle: "Annual rewards",
    rewardPercentage: "20-30%",
  },
  {
    rewardImage: "images/img_sol_solana_48x48.png",
    currencyName: "Solana",
    currencySymbol: "(SOL)",
    rewardTitle: "Annual rewards",
    rewardPercentage: "9-12%",
  },
  {
    rewardImage: "images/img_usdt_tether.png",
    currencyName: "Tether",
    currencySymbol: "(USDT)",
    rewardTitle: "Annual rewards",
    rewardPercentage: "10-20%",
  },
  {
    rewardImage: "images/img_sol_solana_48x48.png",
    currencyName: "Solana",
    currencySymbol: "(SOL)",
    rewardTitle: "Annual rewards",
    rewardPercentage: "9-12%",
  },
];

export default function CryptoStakingSection() {
  return (
    <>
      {/* crypto staking section */}
      <div>
        <div className="flex flex-col items-center justify-center bg-gray-100 py-16 md:py-5">
          <div className="container-xs flex flex-col items-center gap-10 md:px-5">
            <div className="flex flex-col gap-[38px] self-stretch">
              <div className="flex flex-col items-center bg-gray-100 px-14 md:px-5">
                <Heading size="headingmd" as="h2" className="!text-[20px] font-semibold !text-gray-900_06">
                  STAKING CRYPTO
                </Heading>
                <Heading
                  size="headinglg"
                  as="h3"
                  className="mt-2.5 !text-[39px] font-semibold tracking-[-0.78px] !text-teal-400 md:text-[37px] sm:text-[35px]"
                >
                  Earn Crypto Rewards
                </Heading>
                <Text size="textmd" as="p" className="mt-1 !text-[16px] font-normal !text-blue_gray-800_02">
                  Earn up to 40% in reward yearly by staking your assets
                </Text>
              </div>
              <div className="bg-gray-100">
                <div className="grid grid-cols-5 gap-[38px] gap-y-10 md:grid-cols-3 sm:grid-cols-1">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {annualRewardsGrid.map((d, index) => (
                      <AnnualRewardsDisplay {...d} key={"gridannual" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
            <Button
              size="lg"
              shape="round"
              rightIcon={
                <Img
                  src="images/img_arrowright_gray_50_01.svg"
                  alt="Arrow Right"
                  className="mb-1 h-[16px] w-[16px] object-contain"
                />
              }
              className="min-w-[162px] gap-2 rounded-lg px-[18px] font-semibold"
            >
              Start Earning
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
