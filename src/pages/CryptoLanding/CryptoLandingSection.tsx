import { Text, Heading, Img, Button } from "../../components";
import BuyBitcoinTransaction from "../../components/BuyBitcoinTransaction";
import CryptoDashboard from "../../components/CryptoDashboard";
import IosAppProfile from "../../components/IosAppProfile";
import NotificationRow from "../../components/NotificationRow";
import React, { Suspense } from "react";

const platformSupportGrid = [
  { appIcon: "images/img_icon.svg", appName: "iOS App" },
  { appIcon: "images/img_icon_gray_900_06.svg", appName: "Andriod" },
  { appIcon: "images/img_icon_black_900_01.svg", appName: "App Store" },
  { appIcon: "images/img_icon_gray_900_06_32x32.svg", appName: "Linux" },
  { appIcon: "images/img_icon_32x32.svg", appName: "Windows" },
];
const cryptoPortfolioList = [
  {
    cryptoQuantity: "0.8756",
    cryptoSymbol: "BTC",
    cryptoPrice: "$25,789.43",
    groupImage: "images/img_group_4.png",
    cryptoImage: "images/img_btc_bitcoin.png",
    cryptoPair: "BTC/USDT",
    dropdownImage: "images/img_dropdown.svg",
    percentageChange: "2.5%",
  },
  {
    cryptoQuantity: "12.898",
    cryptoSymbol: "BNB",
    cryptoPrice: "$7,289.58",
    groupImage: "images/img_group_5.png",
    cryptoImage: "images/img_bnb_bnb.png",
    cryptoPair: "BNB/USDT",
    dropdownImage: "images/img_dropdown_red_400.svg",
    percentageChange: "-7.4%",
  },
  {
    cryptoQuantity: "23.65",
    cryptoSymbol: "SOL",
    cryptoPrice: "3,184.48",
    groupImage: "images/img_group_5.png",
    cryptoImage: "images/img_sol_solana_16x16.png",
    cryptoPair: "SOL/USDT",
    dropdownImage: "images/img_dropdown_red_400.svg",
    percentageChange: "-5.5%",
  },
];
const transactionHistoryList = [
  {
    iconImage: "images/img_icons_black_teal_400.svg",
    transactionTitle: "Buy Bitcoin",
    transactionDate: "29 October 2022, 4:32 AM",
    transactionAmount: "+0.2343 BTC",
    transactionPrice: "$3,678.87",
  },
  {
    iconImage: "images/img_icons_black_red_500.svg",
    transactionTitle: "Sell Solana",
    transactionDate: "29 October 2022, 10:02 AM",
    transactionAmount: "-23.23 SOL",
    transactionPrice: "$1,638.00",
  },
  {
    iconImage: "images/img_icons_black_teal_400.svg",
    transactionTitle: "Buy Ripple",
    transactionDate: "29 October 2022, 2:13 PM",
    transactionAmount: "+1200.35 XRP",
    transactionPrice: "$890.34",
  },
  {
    iconImage: "images/img_icons_black_teal_400.svg",
    transactionTitle: "Buy Bitcoin",
    transactionDate: "29 October 2022, 4:20 PM",
    transactionAmount: "+0.033 BTC",
    transactionPrice: "$690.84",
  },
  {
    iconImage: "images/img_icons_black_red_500.svg",
    transactionTitle: "Sell Binance Coin",
    transactionDate: "29 October 2022, 11:32 PM",
    transactionAmount: "+18.23 BNB",
    transactionPrice: "$2,345.45",
  },
];

export default function CryptoLandingSection() {
  return (
    <>
      {/* crypto landing section */}
      <div className="flex justify-center">
        <div className="container-xs flex justify-center md:px-5">
          <div className="flex w-full items-start bg-gray-50_01 md:flex-col">
            <div className="relative h-[432px] flex-1 self-center px-2 py-1.5 md:w-full md:flex-none md:self-stretch md:px-5">
              <div className="absolute right-[6%] top-2 m-auto flex w-[84%] justify-center rounded-[14px] border-[7.06px] border-solid border-gray-900_04 bg-gray-900_01 shadow-lg sm:relative sm:flex-col">
                <div className="flex w-[18%] flex-col items-center border-r border-solid border-gray-900_04 bg-gray-900_01 px-1.5 py-2.5 sm:w-full sm:px-5">
                  <Heading
                    size="heading3xl"
                    as="h5"
                    className="!font-glory text-[14.12px] font-bold tracking-[-0.28px] !text-teal-500"
                  >
                    VeeWallet
                  </Heading>
                  <Heading
                    size="headingmd"
                    as="h6"
                    className="mt-4 self-start text-[5.65px] font-semibold !text-blue_gray-100"
                  >
                    Overview
                  </Heading>
                  <div className="mt-1.5 flex self-stretch rounded bg-cyan-50">
                    <Img src="images/img_54_menu_2.svg" alt="54menutwo" className="h-[8px]" />
                    <Heading size="headinglg" as="p" className="text-[6.35px] font-semibold !text-teal-500">
                      Dashboard
                    </Heading>
                  </div>
                  <div className="mt-1 flex self-stretch rounded bg-gray-900_01">
                    <Img src="images/img_5_chart_1.svg" alt="5chartone" className="h-[8px]" />
                    <Text size="textlg" as="p" className="text-[6.35px] font-normal !text-blue_gray-100">
                      Trade
                    </Text>
                  </div>
                  <div className="mt-1 flex self-stretch rounded bg-gray-900_01">
                    <Img src="images/img_33_wallet.svg" alt="33wallet" className="h-[8px]" />
                    <Text size="textlg" as="p" className="text-[6.35px] font-normal !text-blue_gray-100">
                      Portfolio
                    </Text>
                  </div>
                  <div className="mt-1 flex self-stretch rounded bg-gray-900_01">
                    <Img src="images/img_52_chat_13.svg" alt="52chatthirteen" className="h-[8px]" />
                    <Text size="textlg" as="p" className="text-[6.35px] font-normal !text-blue_gray-100">
                      News
                    </Text>
                  </div>
                  <div className="mt-1 flex self-stretch rounded bg-gray-900_01">
                    <Img src="images/img_72_in_out_4.svg" alt="72inoutfour" className="h-[8px]" />
                    <Text size="textlg" as="p" className="text-[6.35px] font-normal !text-blue_gray-100">
                      Transactions
                    </Text>
                  </div>
                  <Heading
                    size="headingmd"
                    as="p"
                    className="mt-[34px] self-start text-[5.65px] font-semibold !text-blue_gray-100"
                  >
                    Account
                  </Heading>
                  <div className="mt-1.5 flex flex-col gap-1 self-stretch md:flex-row">
                    <NotificationRow />
                    <NotificationRow
                      notificationIcon="images/img_57_inbox.svg"
                      notificationText="Messages"
                      notificationCount="4"
                    />
                  </div>
                  <div className="mt-1 flex self-stretch rounded bg-gray-900_01">
                    <Img src="images/img_44_setting.svg" alt="44setting" className="h-[8px]" />
                    <Text size="textlg" as="p" className="text-[6.35px] font-normal !text-blue_gray-100">
                      Settings
                    </Text>
                  </div>
                  <div className="mt-[78px] flex gap-0.5 self-stretch rounded border-[0.35px] border-solid border-gray-900_04">
                    <div className="flex w-full items-center justify-center gap-0.5 rounded bg-gray-900_01 p-0.5">
                      <Img src="images/img_lucide_sun_dim.svg" alt="Lucidesundim" className="h-[4px]" />
                      <Heading as="p" className="text-[4.94px] font-semibold">
                        Light
                      </Heading>
                    </div>
                    <Button color="gray_800_01" size="xs" className="w-full rounded font-semibold">
                      Dark
                    </Button>
                  </div>
                </div>
                <div className="flex-1 bg-gray-900_01 sm:self-stretch sm:px-5">
                  <div className="border-b border-solid border-gray-900_04 bg-gray-900_01 p-1.5">
                    <div className="flex items-center justify-center sm:flex-col">
                      <Heading size="text2xl" as="p" className="text-[10.59px] font-medium tracking-[-0.42px]">
                        Dashboard
                      </Heading>
                      <div className="flex flex-1 items-center justify-center gap-2 sm:self-stretch">
                        <div className="relative h-[24px] flex-1">
                          <div className="absolute bottom-0 right-[-0.82px] top-0 my-auto flex h-max w-[40%] rounded border-[0.35px] border-solid border-gray-900_04 bg-gray-900 py-1">
                            <Img src="images/img_38_search.svg" alt="38search" className="h-[8px]" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-end px-14 md:px-5">
                            <Text size="textlg" as="p" className="text-[18px] font-normal">
                              Search...
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-0.5 rounded border-[0.35px] border-solid border-gray-900_04 bg-gray-900 p-1">
                          <Img src="images/img_usdx_usdx.png" alt="Usdxusdx" className="h-[8px] object-cover" />
                          <Heading size="headinglg" as="p" className="text-[6.35px] font-semibold">
                            USD
                          </Heading>
                          <Img src="images/img_icons_black_gray_50_01.svg" alt="Iconsblack" className="h-[4px]" />
                        </div>
                        <Img src="images/img_avatar.png" alt="Avatar" className="h-[18px] rounded-lg object-cover" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2.5 bg-gray-900_01 p-2.5 sm:flex-col">
                    <div className="flex flex-1 flex-col gap-2.5 sm:self-stretch">
                      <div className="flex flex-col gap-2.5 bg-gray-900_01">
                        <div className="flex flex-col items-start justify-center gap-1">
                          <Heading size="headinglg" as="p" className="text-[6.35px] font-semibold !text-gray-500">
                            Total Asset
                          </Heading>
                          <div className="flex justify-between gap-5 self-stretch">
                            <div className="flex flex-1 items-center">
                              <Heading
                                size="heading2xl"
                                as="p"
                                className="text-[13.76px] font-semibold tracking-[-0.28px]"
                              >
                                $35,850.26
                              </Heading>
                              <Img
                                src="images/img_heroicons_outline_eye_off.svg"
                                alt="Heroicons"
                                className="h-[10px]"
                              />
                            </div>
                            <div className="flex flex-col items-center rounded-lg bg-blue-100 p-0.5">
                              <Img src="images/img_icons_black_blue_800.svg" alt="Iconsblack" className="h-[10px]" />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2.5 md:flex-row">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {cryptoPortfolioList.map((d, index) => (
                              <CryptoDashboard {...d} key={"coins" + index} className="shadow-md hover:shadow-md" />
                            ))}
                          </Suspense>
                        </div>
                      </div>
                      <div className="rounded-md border-[0.35px] border-solid border-gray-900_04 bg-gray-900_01">
                        <div className="ml-2 mr-[18px] mt-2 flex items-center gap-7 md:mx-0">
                          <div className="flex w-full items-center">
                            <Heading size="headinglg" as="p" className="text-[6.35px] font-semibold">
                              BTC / USDT
                            </Heading>
                            <div className="h-px w-px rounded-[50%] bg-white-a700" />
                            <Heading size="headinglg" as="p" className="text-[6.35px] font-semibold">
                              1 Day
                            </Heading>
                          </div>
                          <div className="flex w-full flex-wrap gap-0.5 rounded bg-gray-800_01">
                            <Heading
                              as="p"
                              className="flex h-[8px] w-[10px] items-center justify-center rounded bg-gray-900_01 text-[4.24px] font-semibold"
                            >
                              1D
                            </Heading>
                            <Heading
                              as="p"
                              className="flex h-[8px] w-[12px] items-center justify-center rounded bg-gray-800_01 text-[4.24px] font-semibold"
                            >
                              1W
                            </Heading>
                            <Heading
                              as="p"
                              className="flex h-[8px] w-[10px] items-center justify-center rounded bg-gray-800_01 text-[4.24px] font-semibold"
                            >
                              1M
                            </Heading>
                            <Heading
                              as="p"
                              className="flex h-[8px] w-[10px] items-center justify-center rounded bg-gray-800_01 text-[4.24px] font-semibold"
                            >
                              1Y
                            </Heading>
                            <Heading
                              as="p"
                              className="flex h-[8px] w-[12px] items-center justify-center rounded bg-gray-800_01 text-[4.24px] font-semibold"
                            >
                              ALL
                            </Heading>
                          </div>
                        </div>
                        <div className="mx-2 flex flex-wrap md:mx-0">
                          <Text
                            size="textxs"
                            as="p"
                            className="text-[3.53px] font-normal tracking-[0.07px] !text-gray-50_01"
                          >
                            <span className="text-gray-50_01">O</span>
                            <span className="text-gray-50_01">&nbsp;</span>
                            <span className="text-teal-400">26356.74</span>
                          </Text>
                          <Text
                            size="textxs"
                            as="p"
                            className="text-[3.53px] font-normal tracking-[0.07px] !text-gray-50_01"
                          >
                            <span className="text-gray-50_01">H&nbsp;</span>
                            <span className="text-teal-400">27347.38</span>
                          </Text>
                          <Text
                            size="textxs"
                            as="p"
                            className="text-[3.53px] font-normal tracking-[0.07px] !text-gray-50_01"
                          >
                            <span className="text-gray-50_01">L&nbsp;</span>
                            <span className="text-teal-400">24538.24</span>
                          </Text>
                          <Text
                            size="textxs"
                            as="p"
                            className="text-[3.53px] font-normal tracking-[0.07px] !text-gray-50_01"
                          >
                            <span className="text-gray-50_01">C&nbsp;</span>
                            <span className="text-teal-400">25387.85</span>
                          </Text>
                        </div>
                        <div className="ml-2 mr-1 mt-1 flex items-center justify-center gap-2.5 md:mx-0">
                          <Img
                            src="images/img_candle_stick.png"
                            alt="Candlestick"
                            className="h-[84px] w-[88%] object-contain"
                          />
                          <div className="flex flex-col items-end">
                            <Heading
                              size="headingxs"
                              as="p"
                              className="text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              35K
                            </Heading>
                            <Heading
                              size="headingxs"
                              as="p"
                              className="relative z-[11] mt-1 flex items-center justify-center rounded-sm bg-gray-50_01 text-[3.53px] font-semibold tracking-[0.07px] !text-gray-900_06"
                            >
                              32344.45
                            </Heading>
                            <Heading
                              size="headingxs"
                              as="p"
                              className="text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              30K
                            </Heading>
                            <Heading
                              size="headingxs"
                              as="p"
                              className="mt-2.5 text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              25K
                            </Heading>
                            <Heading
                              size="headingxs"
                              as="p"
                              className="mt-2.5 text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              20K
                            </Heading>
                            <Heading
                              size="headingxs"
                              as="p"
                              className="mt-2.5 text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              15K
                            </Heading>
                            <Heading
                              size="headingxs"
                              as="p"
                              className="mt-2.5 text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              10K
                            </Heading>
                          </div>
                        </div>
                        <div className="relative mt-1.5 h-[28px] md:h-auto">
                          <div className="flex flex-1 flex-wrap justify-center gap-2 px-3.5">
                            <Heading
                              size="headingxs"
                              as="p"
                              className="text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              JAN
                            </Heading>
                            <Heading
                              size="headingxs"
                              as="p"
                              className="text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              FEB
                            </Heading>
                            <Heading
                              size="headingxs"
                              as="p"
                              className="text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              MAR
                            </Heading>
                            <Heading
                              size="headingxs"
                              as="p"
                              className="text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              APR
                            </Heading>
                            <Heading
                              size="headingxs"
                              as="p"
                              className="text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              JUN
                            </Heading>
                            <Heading
                              size="headingxs"
                              as="p"
                              className="text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              JUL
                            </Heading>
                            <Heading
                              size="headingxs"
                              as="p"
                              className="text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              AUG
                            </Heading>
                            <Heading
                              size="headingxs"
                              as="p"
                              className="text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              SEP
                            </Heading>
                            <Heading
                              size="headingxs"
                              as="p"
                              className="text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              OCT
                            </Heading>
                            <Heading
                              size="headingxs"
                              as="p"
                              className="text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              NOV
                            </Heading>
                            <Heading
                              size="headingxs"
                              as="p"
                              className="text-[3.53px] font-semibold tracking-[0.07px] !text-gray-300"
                            >
                              DEC
                            </Heading>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start">
                            <Heading
                              size="headingxs"
                              as="p"
                              className="relative z-[12] mr-[76px] flex items-center justify-center self-end rounded-sm bg-gray-50_01 text-[3.53px] font-semibold tracking-[0.07px] !text-gray-900_06 md:mr-0"
                            >
                              12 AUG ‘22
                            </Heading>
                            <Img
                              src="images/img_frame_25.svg"
                              alt="Image"
                              className="relative mr-2.5 mt-[-6px] h-[28px] w-full md:mr-0 md:h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-[42%] flex-col gap-1.5 sm:w-full">
                      <div className="rounded-md border-[0.35px] border-solid border-gray-900_04 bg-gray-900_01 p-1">
                        <div className="flex items-center justify-between gap-5">
                          <Heading size="headingxl" as="p" className="text-[7.06px] font-semibold">
                            Operations
                          </Heading>
                          <div className="flex flex-wrap gap-0.5 rounded bg-gray-800_01">
                            <Heading
                              as="p"
                              className="flex items-center justify-center rounded bg-gray-900_01 px-2 py-0.5 text-[4.94px] font-semibold !text-gray-50_01"
                            >
                              Buy
                            </Heading>
                            <Heading
                              as="p"
                              className="flex items-center justify-center rounded bg-gray-800_01 px-2 py-0.5 text-[4.94px] font-semibold !text-gray-50_01"
                            >
                              Sell
                            </Heading>
                          </div>
                        </div>
                        <div className="mt-1 flex flex-col items-start gap-1">
                          <Heading as="p" className="text-[4.94px] font-semibold !text-gray-50_01">
                            From
                          </Heading>
                          <div className="flex self-stretch rounded-sm border-[0.35px] border-solid border-gray-900_04 bg-gray-900_01 shadow-xl">
                            <div className="flex w-full items-center">
                              <Img src="images/img_btc_bitcoin.png" alt="Btcbitcoin" className="h-[8px] object-cover" />
                              <Heading as="p" className="text-[4.94px] font-semibold">
                                BTC
                              </Heading>
                              <Img src="images/img_icons_black_indigo_100.svg" alt="Iconsblack" className="h-[4px]" />
                            </div>
                            <div className="flex w-full justify-end">
                              <Heading size="headinglg" as="p" className="text-[6.35px] font-semibold">
                                0.5694
                              </Heading>
                              <div className="h-[8px] w-px bg-blue-600" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-1 flex flex-col gap-1">
                          <div className="flex items-center justify-between gap-5">
                            <Heading as="p" className="text-[4.94px] font-semibold !text-gray-50_01">
                              To (Estimated)
                            </Heading>
                            <Img src="images/img_69_in_out_9.svg" alt="69inoutnine" className="h-[8px]" />
                          </div>
                          <div className="flex justify-center rounded-sm border-[0.35px] border-solid border-gray-900_04 bg-gray-900_01 shadow-xl">
                            <div className="flex flex-1 items-center">
                              <Img src="images/img_usdx_usdx.png" alt="Usdxusdx" className="h-[8px] object-cover" />
                              <Heading as="p" className="text-[4.94px] font-semibold">
                                USD
                              </Heading>
                              <Img src="images/img_icons_black_indigo_100.svg" alt="Iconsblack" className="h-[4px]" />
                            </div>
                            <Heading size="headinglg" as="p" className="text-[6.35px] font-semibold">
                              $9,3747.78
                            </Heading>
                          </div>
                        </div>
                        <div className="mt-1 flex">
                          <Heading as="p" className="text-[4.94px] font-semibold !text-gray-50_01">
                            1 BTC = 21,456.34
                          </Heading>
                        </div>
                        <div className="relative h-[24px]">
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[16px] flex-1 rounded bg-teal-500" />
                          <Heading
                            as="h6"
                            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max text-[18px] font-semibold !text-gray-50_01"
                          >
                            Buy Bitcoin
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 rounded-md border-[0.35px] border-solid border-gray-900_04 bg-gray-900_01 p-2">
                        <div className="flex items-center justify-between gap-5">
                          <Heading size="headingxl" as="p" className="text-[7.06px] font-semibold">
                            Recent Transcations
                          </Heading>
                          <div className="flex items-center p-0.5">
                            <a href="#">
                              <Heading as="p" className="text-[4.94px] font-semibold !text-gray-500">
                                See All
                              </Heading>
                            </a>
                            <Img src="images/img_37_arrow_right_1.svg" alt="37arrowright" className="h-[4px]" />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {transactionHistoryList.map((d, index) => (
                              <BuyBitcoinTransaction {...d} key={"listbuyBitcoin" + index} />
                            ))}
                          </Suspense>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[7.11px] left-2 m-auto flex w-[24%] flex-col items-center rounded-[16px] border-[7.06px] border-solid border-gray-900_04 bg-gray-900_01 shadow-lg">
                <div className="mt-[18px] flex items-center justify-between gap-5 self-stretch px-2.5">
                  <div className="flex flex-col items-center rounded-lg bg-gray-900 p-1">
                    <Img src="images/img_36_arrow_left_1.svg" alt="36arrowleftone" className="h-[8px]" />
                  </div>
                  <Heading size="headingxl" as="p" className="!font-poppins text-[7.06px] font-bold">
                    ETH/USDT
                  </Heading>
                  <div className="flex flex-col items-center rounded-lg bg-gray-900 p-1">
                    <Img src="images/img_notification.svg" alt="Notification" className="h-[8px]" />
                  </div>
                </div>
                <div className="mt-1 flex w-[30%] flex-col items-center md:w-full md:px-5">
                  <Text
                    size="textxl"
                    as="p"
                    className="!font-poppins text-[9.18px] font-medium tracking-[0.46px] !text-white-a700"
                  >
                    $2626.49
                  </Text>
                  <div className="flex flex-wrap items-center justify-center self-stretch">
                    <Img src="images/img_polygon_1.svg" alt="Polygonone" className="h-[2px] self-end" />
                    <Text as="p" className="!font-poppins text-[4.24px] font-normal !text-green-a200">
                      +$ 15.96
                    </Text>
                    <Text as="p" className="!font-poppins text-[4.24px] font-normal !text-gray-500">
                      (+8.96%)
                    </Text>
                  </div>
                </div>
                <div className="mt-1.5 flex items-center justify-center gap-3 self-stretch px-2.5">
                  <Text as="p" className="!font-poppins text-[4.24px] font-normal !text-white-a700">
                    5m
                  </Text>
                  <Text
                    as="p"
                    className="w-[14%] self-end !font-poppins text-[4.24px] font-normal leading-[6px] !text-white-a700"
                  >
                    15m
                  </Text>
                  <Text as="p" className="!font-poppins text-[4.24px] font-normal !text-white-a700">
                    30m
                  </Text>
                  <div className="flex h-[8px] w-[10px] items-center justify-center rounded bg-blue_gray-800_02 md:h-auto">
                    <Text
                      as="p"
                      className="w-[54%] !font-poppins text-[4.24px] font-normal leading-[6px] !text-white-a700"
                    >
                      1H
                    </Text>
                  </div>
                  <Text as="p" className="!font-poppins text-[4.24px] font-normal !text-white-a700">
                    4h
                  </Text>
                  <Text
                    as="p"
                    className="w-[8%] self-end !font-poppins text-[4.24px] font-normal leading-[6px] !text-white-a700"
                  >
                    1D
                  </Text>
                  <div className="flex flex-1 items-center justify-center">
                    <Text as="p" className="!font-poppins text-[4.24px] font-normal !text-white-a700">
                      More
                    </Text>
                    <Img src="images/img_polygon_2.svg" alt="Polygontwo" className="h-[2px] self-end" />
                  </div>
                </div>
                <div className="mx-2 mt-[22px] self-stretch md:mx-0">
                  <div className="mr-1.5 flex items-center gap-0.5 md:mr-0">
                    <div className="h-[0.35px] flex-1 self-end bg-blue_gray-800_02" />
                    <Text
                      as="p"
                      className="w-[8%] text-right !font-poppins text-[4.24px] font-normal leading-[6px] !text-gray-500"
                    >
                      3500
                    </Text>
                  </div>
                  <div className="flex items-center">
                    <div className="relative h-[96px] flex-1">
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
                        <div className="h-[0.35px] bg-teal-400" />
                        <div className="mt-1.5 h-[0.35px] bg-blue_gray-800_02" />
                        <div className="mt-[18px] h-[0.35px] bg-blue_gray-800_02" />
                        <div className="mt-[18px] h-[0.35px] bg-blue_gray-800_02" />
                        <div className="mt-[18px] h-[0.35px] bg-blue_gray-800_02" />
                        <div className="mt-[18px] h-[0.35px] bg-blue_gray-800_02" />
                      </div>
                      <Img
                        src="images/img_candle_sticks.svg"
                        alt="Candlesticks"
                        className="absolute bottom-0 right-[8.12px] top-0 my-auto h-[96px] w-[84%] object-contain"
                      />
                    </div>
                    <div className="flex w-[14%] flex-col items-start">
                      <Text
                        as="p"
                        className="flex items-center justify-center rounded-[1px] bg-teal-400 px-1 !font-poppins text-[4.24px] font-normal !text-white-a700"
                      >
                        3200
                      </Text>
                      <Text
                        as="p"
                        className="text-right !font-poppins text-[4.24px] font-normal leading-[6px] !text-gray-500"
                      >
                        3000
                      </Text>
                      <Text
                        as="p"
                        className="mt-3 text-right !font-poppins text-[4.24px] font-normal leading-[6px] !text-gray-500"
                      >
                        2500
                      </Text>
                      <Text
                        as="p"
                        className="mt-3 text-right !font-poppins text-[4.24px] font-normal leading-[6px] !text-gray-500"
                      >
                        2000
                      </Text>
                      <Text
                        as="p"
                        className="mt-3 text-right !font-poppins text-[4.24px] font-normal leading-[6px] !text-gray-500"
                      >
                        1500
                      </Text>
                      <Text
                        as="p"
                        className="mt-3 text-right !font-poppins text-[4.24px] font-normal leading-[6px] !text-gray-500"
                      >
                        1000
                      </Text>
                    </div>
                  </div>
                  <div className="mr-1.5 mt-1.5 flex items-center gap-1 md:mr-0">
                    <div className="h-[0.35px] flex-1 self-end bg-blue_gray-800_02" />
                    <Text
                      as="p"
                      className="w-[6%] text-right !font-poppins text-[4.24px] font-normal leading-[6px] !text-gray-500"
                    >
                      500
                    </Text>
                  </div>
                  <div className="flex flex-wrap">
                    <Text as="p" className="!font-poppins text-[4.24px] font-normal !text-gray-500">
                      14:00
                    </Text>
                    <Text as="p" className="ml-2 !font-poppins text-[4.24px] font-normal !text-gray-500">
                      15:00
                    </Text>
                    <Text as="p" className="ml-2 !font-poppins text-[4.24px] font-normal !text-gray-500">
                      16:00
                    </Text>
                    <Text as="p" className="ml-2 !font-poppins text-[4.24px] font-normal !text-gray-500">
                      17:00
                    </Text>
                    <Text as="p" className="ml-2 !font-poppins text-[4.24px] font-normal !text-gray-500">
                      18:00
                    </Text>
                    <Text as="p" className="ml-2 !font-poppins text-[4.24px] font-normal !text-gray-500">
                      19:00
                    </Text>
                  </div>
                </div>
                <div className="mx-6 mt-3 flex justify-between gap-5 self-stretch md:mx-0">
                  <div className="flex items-center">
                    <Text size="textlg" as="p" className="!font-poppins text-[6.35px] font-medium !text-white-a700">
                      Order book
                    </Text>
                    <Img src="images/img_polygon_3.svg" alt="Polygonthree" className="h-[4px] rounded-[1px]" />
                  </div>
                  <div className="flex flex-1 items-center justify-center gap-0.5">
                    <Text size="textlg" as="p" className="!font-poppins text-[6.35px] font-medium !text-white-a700">
                      Market History
                    </Text>
                    <Img src="images/img_polygon_3.svg" alt="Polygonfour" className="h-[4px] rounded-[1px]" />
                  </div>
                </div>
                <div className="mx-3 flex gap-3 self-stretch md:mx-0">
                  <div className="relative h-[24px] w-full">
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[16px] flex-1 rounded bg-teal-500" />
                    <Heading
                      as="h6"
                      className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max text-[18px] font-semibold !text-gray-50_01"
                    >
                      Buy
                    </Heading>
                  </div>
                  <div className="relative h-[24px] w-full">
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[16px] flex-1 rounded bg-deep_orange-a700" />
                    <Heading
                      as="h6"
                      className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max text-[18px] font-semibold !text-gray-50_01"
                    >
                      Sell
                    </Heading>
                  </div>
                </div>
                <Img
                  src="images/img_homeindicator.svg"
                  alt="Homeindicator"
                  className="mx-1.5 mt-[30px] h-[12px] w-full md:mx-0"
                />
              </div>
            </div>
            <div className="flex w-[44%] flex-col gap-10 md:w-full md:px-5">
              <div className="ml-7 flex flex-col items-start gap-3 bg-gray-50_01 md:ml-0">
                <Heading
                  size="heading5xl"
                  as="h2"
                  className="text-[33px] font-semibold tracking-[-0.66px] !text-gray-900_06 md:text-[31px] sm:text-[29px]"
                >
                  Trade Anywhere, Anytime
                </Heading>
                <Text
                  size="textlg"
                  as="p"
                  className="w-full text-[18px] font-normal leading-[22px] !text-blue_gray-800_02"
                >
                  Stay in touch across multiple devices and never miss out on opportunities.
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
