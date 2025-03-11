import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props} className={`${props.className} flex flex-col`}>
      <div className="self-stretch">
        <div className="flex justify-center bg-gray-50_01 py-16 md:py-5">
          <div className="container-xs flex justify-center md:px-5">
            <div className="flex w-full items-start bg-gray-50_01 md:flex-col">
              <div className="flex w-[16%] flex-col items-start gap-10 bg-gray-50_01 md:w-full md:px-5">
                <Img src="images/img_footer_logo.png" alt="Footerlogo" className="h-[40px] w-[124px] object-contain" />
                <div className="flex flex-col gap-6 self-stretch bg-gray-50_01">
                  <div className="flex items-center gap-6 bg-gray-50_01">
                    <Img src="images/img_facebook.svg" alt="Facebook" className="h-[22px]" />
                    <Img src="images/img_info.svg" alt="Info" className="h-[24px]" />
                    <Img src="images/img_trash.svg" alt="Trash" className="h-[18px]" />
                  </div>
                  <div className="flex items-center gap-6 bg-gray-50_01">
                    <Img src="images/img_vector_blue_gray_500.svg" alt="Vector" className="h-[16px]" />
                    <Img src="images/img_volume.svg" alt="Volume" className="h-[24px]" />
                    <Img src="images/img_link.svg" alt="Link" className="h-[24px]" />
                  </div>
                  <div className="flex items-center gap-6 bg-gray-50_01">
                    <Img src="images/img_play_blue_gray_500.svg" alt="Play Eleven" className="h-[26px]" />
                    <Img src="images/img_vector.svg" alt="Vector" className="h-[22px]" />
                    <Img src="images/img_cursor.svg" alt="Cursor" className="h-[20px]" />
                  </div>
                </div>
              </div>
              <div className="flex w-[82%] items-start justify-between gap-5 self-center md:w-full md:flex-col md:px-5">
                <div className="flex w-[20%] flex-col items-start gap-4 self-center bg-gray-50_01 md:w-full">
                  <Heading size="headingmd" as="h5" className="!text-[20px] font-semibold !text-gray-900_06">
                    About Us
                  </Heading>
                  <ul className="flex flex-col items-start gap-4">
                    <li>
                      <a href="About" target="_blank" rel="noreferrer">
                        <Text size="textmd" as="p" className="!text-[16px] font-normal">
                          About
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Careers" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          Careers
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Community" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          Community
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Blog" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          Blog
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Terms" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          Terms
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Privacy" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          Privacy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="About" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          About
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Announcements" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          Announcements
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="News" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          News
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Sitemap" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          Sitemap
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          Cookie Preferences
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex w-[20%] flex-col items-start gap-4 bg-gray-50_01 md:w-full">
                  <Heading size="headingmd" as="h5" className="!text-[20px] font-semibold !text-gray-900_06">
                    Products
                  </Heading>
                  <ul className="flex flex-col items-start gap-4">
                    <li>
                      <a href="Exchange" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          Exchange
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Academy" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          Academy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="NFT" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          NFT
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          Spot Trading
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          Margin Trading
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          Crypto Lending
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          Trading Bot
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          Launch Pad
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          Trust Wallet
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          Gift Card
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex w-[20%] flex-col items-start gap-4 bg-gray-50_01 md:w-full">
                  <Heading size="headingmd" as="h5" className="!text-[20px] font-semibold !text-gray-900_06">
                    Services
                  </Heading>
                  <ul className="flex flex-col items-start gap-4">
                    <li>
                      <a href="Downloads" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          Downloads
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Referral" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          Referral
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="P2P" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          P2P
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          Identity Identification
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          Technical Support
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="VIP" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          VIP
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          Affilate Program
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          Submit a request
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          Verification Search
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <ul className="flex w-[20%] flex-col items-start gap-4 bg-gray-50_01 md:w-full">
                  <li>
                    <a href="Support" target="_blank" rel="noreferrer">
                      <Heading size="headingmd" as="h5" className="!text-[20px] font-semibold !text-gray-900_06">
                        Support
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-[14px] font-normal">
                        Technical Support
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-[14px] font-normal">
                        User Feedback
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-[14px] font-normal">
                        Trading Rules
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="APIs" target="_blank" rel="noreferrer">
                      <Text as="p" className="!text-[14px] font-normal">
                        APIs
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Fees" target="_blank" rel="noreferrer">
                      <Text as="p" className="!text-[14px] font-normal">
                        Fees
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-[14px] font-normal">
                        Account Access
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-[14px] font-normal">
                        Payment Methods
                      </Text>
                    </a>
                  </li>
                </ul>
                <div className="flex flex-col items-start gap-4 bg-gray-50_01">
                  <Heading size="headingmd" as="h5" className="!text-[20px] font-semibold !text-gray-900_06">
                    Learn
                  </Heading>
                  <ul className="flex flex-col items-start gap-4">
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          Crypto Guide
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Videos" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          Videos
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Podcast" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-[14px] font-normal">
                          Podcast
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          How to Buy Bitcoin
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          How to Buy Cardano
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          How to Buy Ripple
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          How to Buy Ethereum
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-[14px] font-normal">
                          How to Buy Tradable Altcoins
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center self-stretch border-t border-solid border-gray-300 bg-gray-50_01 py-6 sm:py-5">
        <div className="container-xs flex justify-center px-14 md:px-5">
          <Text size="textxs" as="p" className="!text-[10px] font-normal tracking-[0.20px] !text-blue_gray-800_02">
            Copyright © 2022 All Rights Reserved
          </Text>
        </div>
      </div>
    </footer>
  );
}
