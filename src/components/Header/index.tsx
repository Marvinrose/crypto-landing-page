import MegaMenu1 from "../MegaMenu1";
import { Button, Img, Heading, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);
  const [menuOpen3, setMenuOpen3] = React.useState(false);
  const [menuOpen4, setMenuOpen4] = React.useState(false);

  return (
    <header
      {...props}
      className={`${props.className} flex items-center p-3.5 border-blue_gray-100 border-b border-solid bg-gray-50_01 relative`}
    >
      <div className="mx-auto flex w-full max-w-[1376px] justify-between gap-5 md:flex-col">
        <div className="flex items-center gap-9 md:flex-col">
          <Img src="images/img_header_logo.png" alt="Headerlogo" className="h-[48px] w-[140px] object-contain" />
          <ul className="flex gap-[30px] md:flex-col">
            <li
              onMouseLeave={() => {
                setMenuOpen(false);
              }}
              onMouseEnter={() => {
                setMenuOpen(true);
              }}
            >
              <div className="flex cursor-pointer items-center gap-1">
                <Text size="textlg" as="p" className="text-lg font-normal !text-blue_gray-800_02">
                  Buy Crypto
                </Text>
                <Img src="images/img_favorite.svg" alt="Favorite" className="h-[12px] w-[12px] rounded-sm" />
              </div>
              {menuOpen ? <MegaMenu1 /> : null}
            </li>
            <li>
              <a href="#">
                <Text size="textlg" as="p" className="text-lg font-normal !text-blue_gray-800_02">
                  Markets
                </Text>
              </a>
            </li>
            <li
              onMouseLeave={() => {
                setMenuOpen1(false);
              }}
              onMouseEnter={() => {
                setMenuOpen1(true);
              }}
            >
              <div className="flex cursor-pointer items-center gap-1">
                <Text size="textlg" as="p" className="text-lg font-normal !text-blue_gray-800_02">
                  Trades
                </Text>
                <Img src="images/img_favorite.svg" alt="Favorite" className="h-[12px] w-[12px] rounded-sm" />
              </div>
              {menuOpen1 ? <MegaMenu1 /> : null}
            </li>
            <li
              onMouseLeave={() => {
                setMenuOpen2(false);
              }}
              onMouseEnter={() => {
                setMenuOpen2(true);
              }}
            >
              <div className="flex cursor-pointer items-center gap-1">
                <Text size="textlg" as="p" className="text-lg font-normal !text-blue_gray-800_02">
                  Derivates
                </Text>
                <Img src="images/img_favorite.svg" alt="Favorite" className="h-[12px] w-[12px] rounded-sm" />
              </div>
              {menuOpen2 ? <MegaMenu1 /> : null}
            </li>
            <li
              onMouseLeave={() => {
                setMenuOpen3(false);
              }}
              onMouseEnter={() => {
                setMenuOpen3(true);
              }}
            >
              <div className="flex cursor-pointer items-center gap-1">
                <Text size="textlg" as="p" className="text-lg font-normal !text-blue_gray-800_02">
                  Earn
                </Text>
                <Img src="images/img_favorite.svg" alt="Favorite" className="h-[12px] w-[12px] rounded-sm" />
              </div>
              {menuOpen3 ? <MegaMenu1 /> : null}
            </li>
            <li
              onMouseLeave={() => {
                setMenuOpen4(false);
              }}
              onMouseEnter={() => {
                setMenuOpen4(true);
              }}
            >
              <div className="flex cursor-pointer items-center gap-1">
                <Text size="textlg" as="p" className="text-lg font-normal !text-blue_gray-800_02">
                  NFT
                </Text>
                <Img src="images/img_favorite.svg" alt="Favorite" className="h-[12px] w-[12px] rounded-sm" />
              </div>
              {menuOpen4 ? <MegaMenu1 /> : null}
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <Heading size="headingxs" as="h6" className="mb-2.5 self-end text-base font-semibold !text-teal-400">
            Sign In
          </Heading>
          <Button size="lg" shape="round" className="ml-[34px] min-w-[126px] rounded-lg px-[18px] font-semibold">
            Get Started
          </Button>
          <a href="#">
            <Button color="gray_100" size="md" shape="round" className="ml-4 w-[48px] rounded-lg px-2">
              <Img src="images/img_icons_black.svg" />
            </Button>
          </a>
          <a href="#">
            <Button color="gray_100" size="md" shape="round" className="ml-4 w-[48px] rounded-lg px-2">
              <Img src="images/img_icons_black_blue_gray_800_02.svg" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
