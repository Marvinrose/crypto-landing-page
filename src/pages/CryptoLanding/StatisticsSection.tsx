import TradingVolumeDisplay from "../../components/TradingVolumeDisplay";
import React, { Suspense } from "react";

const tradingVolumeList = [
  { price: "$2.05 billion", tradingVolumeText: "24h Trading Volume" },
  { price: "1200+", tradingVolumeText: "Cryptocurrencies Listed" },
  { price: "5+ million", tradingVolumeText: "Registered Users" },
  { price: "0%", tradingVolumeText: "Lowest Trading Fees" },
];

export default function StatisticsSection() {
  return (
    <>
      {/* statistics section */}
      <div>
        <div className="flex justify-center bg-gray-50_02 py-[58px] md:py-5">
          <div className="container-xs mb-1 flex justify-center md:px-5">
            <div className="flex w-full gap-[122px] md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {tradingVolumeList.map((d, index) => (
                  <TradingVolumeDisplay {...d} key={"listprice" + index} className="w-[28%]" />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
