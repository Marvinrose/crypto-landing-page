import { Img, Text, Button, Input, Heading } from "../../components";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* hero section */}
      <div>
        <div className="flex justify-center bg-gray-100 py-[78px] md:py-5">
          <div className="container-xs flex items-center justify-center gap-11 md:flex-col md:px-5">
            <div className="flex flex-1 flex-col gap-9 bg-gray-100 md:self-stretch">
              <div className="flex flex-col items-start gap-4">
                <Heading
                  size="heading2xl"
                  as="h1"
                  className="w-full text-[60px] font-semibold leading-[72px] tracking-[-2.40px] !text-gray-900_06 md:text-[52px] sm:text-[46px]"
                >
                  <span className="text-gray-900_06">Buy, Trade and&nbsp;</span>
                  <span className="text-teal-400">
                    Hodl your Favourite Cryptocurrencies
                  </span>
                </Heading>
                <Text
                  size="textxl"
                  as="p"
                  className="text-[20px] font-normal !text-gray-900_06"
                >
                  Trade Over 1200 Cryptocurries Safely, Quickly and Easily
                </Text>
              </div>
              <div className="flex flex-col items-start gap-3.5 bg-gray-100">
                <div className="flex items-center gap-6 self-stretch sm:flex-col">
                  <Input
                    shape="round"
                    type="email"
                    name="email"
                    placeholder={`Email Address`}
                    suffix={
                      <Img
                        src="images/img_lock.svg"
                        alt="Lock"
                        className="my-0.5 h-[16px] w-[16px] object-contain"
                      />
                    }
                    className="w-[48%] gap-4 rounded-lg px-3"
                  />
                  <Button
                    size="lg"
                    shape="round"
                    className="min-w-[140px] rounded-lg px-5 font-semibold"
                  >
                    Get Started
                  </Button>
                </div>
                <Text
                  size="textmd"
                  as="p"
                  className="text-base font-normal !text-gray-500"
                >
                  Sign Up Now and Get 0 fees on Trading
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-20 bg-gray-100 md:self-stretch">
              <img src="images/hero_img.png" alt="hero_img" />
            </div>
            {/* <div className="relative h-[352px] w-[40%] md:w-full">
              <div className="absolute left-0 right-0 top-[15%] mx-auto flex w-[80%] flex-col items-start">
                <Img src="images/img_play.svg" alt="Play" className="relative z-[1] h-[38px]" />
                <div className="relative ml-1 mt-[-18px] h-[60px] w-[8%] bg-[url(/public/images/img_group_16.png)] bg-cover bg-no-repeat md:ml-0 md:h-auto md:w-full">
                  <Img src="images/img_group_16.png" alt="Shadow" className="h-[60px] w-full object-cover md:h-auto" />
                </div>
              </div>
              <div className="absolute bottom-[0.72px] left-0 right-0 z-[2] mx-auto flex flex-1 items-start sm:relative sm:flex-col">
                <Img src="images/img_play.svg" alt="Play" className="relative z-[5] mt-[124px] h-[38px] sm:w-full" />
                <div className="relative ml-[-34px] flex flex-1 items-center sm:ml-0 sm:flex-col sm:self-stretch">
                  <div className="flex flex-1 items-center justify-center sm:self-stretch">
                    <div className="relative z-[3] mb-[120px] flex h-[40px] flex-col items-center self-end bg-[url(/public/images/img_group_16.png)] bg-cover bg-no-repeat md:h-auto">
                      <Img src="images/img_group_16.png" alt="Shadow" className="h-[40px] object-cover" />
                    </div>
                    <div className="relative ml-[-16px] flex flex-1 items-start justify-center">
                      <div className="mt-[86px] flex h-[48px] flex-col items-center bg-[url(/public/images/img_group_16.png)] bg-cover bg-no-repeat md:h-auto">
                        <Img src="images/img_group_16.png" alt="Shadow" className="h-[48px] object-cover" />
                      </div>
                      <div className="relative ml-[-28px] h-[308px] flex-1 self-center bg-[url(/public/images/img_group_14.svg)] bg-cover bg-no-repeat px-2.5 py-[26px] sm:py-5">
                        <div className="absolute left-0 right-0 top-[15%] mx-auto h-[162px] w-[82%] content-center md:h-auto">
                          <div className="flex flex-1 flex-col items-start">
                            <Img
                              src="images/img_card.png"
                              alt="Card"
                              className="ml-5 h-[68px] w-[14%] object-contain md:ml-0"
                            />
                            <div className="relative mt-[-44px] flex w-[30%] flex-col items-end md:w-full">
                              <Img
                                src="images/img_card_blue_gray_900_03.png"
                                alt="Card"
                                className="h-[68px] w-[42%] object-contain"
                              />
                              <div className="relative mt-[-8px] self-stretch rounded-md bg-white-a700 px-1 py-2.5">
                                <Img
                                  src="images/img_text.png"
                                  alt="Image"
                                  className="h-[56px] w-full object-cover md:h-auto"
                                />
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_card_blue_gray_900_03.png"
                            alt="Card"
                            className="absolute left-[29.68px] top-[11.01px] m-auto h-[68px] w-[14%] object-contain"
                          />
                        </div>
                        <div className="absolute left-0 right-0 top-[26.46px] mx-auto h-[114px] w-[70%]">
                          <Img
                            src="images/img_fingerprint.svg"
                            alt="Fingerprint"
                            className="absolute right-[15.85px] top-0 m-auto h-[60px] w-[18%] object-contain"
                          />
                          <div className="absolute bottom-[-0.38px] right-[-0.27px] m-auto w-[22%] rounded-md bg-white-a700 py-1.5">
                            <Img
                              src="images/img_chart.png"
                              alt="Chart"
                              className="h-[76px] w-full object-cover md:h-auto"
                            />
                          </div>
                        </div>
                        <Img
                          src="images/img_play.svg"
                          alt="Play"
                          className="absolute bottom-[14%] left-[11.09px] m-auto h-[34px]"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_base.svg"
                    alt="Base"
                    className="relative z-[4] ml-[-74px] h-[128px] w-[40%] object-contain sm:ml-0 sm:w-full"
                  />
                </div>
              </div>
              <div className="absolute bottom-[23%] left-0 right-0 z-[6] mx-auto flex flex-1 flex-col items-start">
                <Img src="images/img_play.svg" alt="Play" className="relative z-[7] h-[36px]" />
                <div className="relative ml-1 mt-[-18px] flex h-[30px] flex-col items-center bg-[url(/public/images/img_group_16.png)] bg-cover bg-no-repeat md:ml-0 md:h-auto">
                  <Img src="images/img_group_16.png" alt="Shadow" className="h-[30px] object-cover" />
                </div>
              </div>
              <div className="absolute bottom-[11%] left-[7%] z-[8] m-auto flex h-[20px] items-center bg-[url(/public/images/img_group_16.png)] bg-cover bg-no-repeat md:h-auto">
                <Img src="images/img_group_16.png" alt="Shadow" className="h-[20px] object-cover" />
              </div>
              <Img
                src="images/img_play.svg"
                alt="Play"
                className="absolute left-[12.71px] top-[32%] z-[9] m-auto h-[38px]"
              />
              <div className="absolute right-[14.67px] top-[0.84px] z-10 m-auto flex h-[254px] w-[44%] flex-col items-end justify-end bg-[url(/public/images/img_group_15.svg)] bg-cover bg-no-repeat px-[46px] md:h-auto md:px-5">
                <Img src="images/img_user.svg" alt="User" className="mt-[206px] h-[38px]" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
