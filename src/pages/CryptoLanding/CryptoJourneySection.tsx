import { Button, Heading } from "../../components";
import React from "react";

export default function CryptoJourneySection() {
  return (
    <>
      {/* crypto journey section */}
      <div>
        <div className="flex flex-col items-center justify-center bg-gray-100 py-[62px] md:py-5">
          <div className="container-xs flex flex-col items-center gap-[54px] px-14 md:px-5 sm:gap-[27px]">
            <Heading
              size="headingxl"
              as="h2"
              className="!text-5xl font-semibold tracking-[-1.92px] !text-gray-900_06 md:text-5xl sm:text-4xl"
            >
              Begin Your Crypto Journey Today!
            </Heading>
            <Button
              size="lg"
              shape="round"
              className="min-w-[152px] rounded-lg px-5 font-semibold"
            >
              Sign Up Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
