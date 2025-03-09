import { Text, Img, Heading } from "../../components";
import React from "react";

export default function CustomerSupportSection() {
  return (
    <>
      {/* customer support section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-start gap-[54px] md:px-5 sm:gap-[27px]">
          <Heading
            size="headinglg"
            as="h2"
            className="text-[39px] font-semibold tracking-[-0.78px] !text-gray-900_06 md:text-[37px] sm:text-[35px]"
          >
            We Are Always Here
          </Heading>
          <div className="flex items-center gap-9 self-stretch md:flex-col">
            <div className="relative h-[208px] w-full content-center md:h-auto">
              <div className="flex flex-1 flex-col items-start">
                <Img src="images/img_ri_customer_service_2_fill.svg" alt="Ricustomer" className="h-[48px]" />
                <Heading size="headingmd" as="h3" className="mt-3 text-[20px] font-semibold !text-gray-900_06">
                  24/7 Customer Service
                </Heading>
                <div className="mt-[88px] flex gap-2 self-stretch py-2">
                  <Text as="p" className="text-[14px] font-normal !text-teal-400">
                    Chat Now
                  </Text>
                  <Img src="images/img_arrow_right_teal_400.svg" alt="Arrowright" className="h-[16px]" />
                </div>
              </div>
              <Text
                size="textmd"
                as="p"
                className="absolute bottom-[19%] left-0 right-0 mx-auto w-full text-[16px] font-normal leading-6 !text-blue_gray-800_02"
              >
                If you have any questions, please do not hesitate to contact VeeWallet&#39;s customer support.
              </Text>
            </div>
            <div className="w-full self-start">
              <div className="flex items-center">
                <div className="flex w-[22%] flex-col items-start">
                  <Img src="images/img_flat_color_icons_faq.svg" alt="Flatcolor" className="h-[48px]" />
                  <Heading size="headingmd" as="h4" className="mt-3 text-[20px] font-semibold !text-gray-900_06">
                    FAQ
                  </Heading>
                  <div className="mt-16 flex gap-2 self-stretch py-2">
                    <a href="#">
                      <Text as="p" className="text-[14px] font-normal !text-teal-400">
                        Learn More
                      </Text>
                    </a>
                    <Img src="images/img_arrow_right_teal_400.svg" alt="Arrowright" className="h-[16px]" />
                  </div>
                </div>
                <Text
                  size="textmd"
                  as="p"
                  className="relative mb-10 ml-[-100px] w-[78%] self-end text-[16px] font-normal leading-6 !text-blue_gray-800_02"
                >
                  For detailed instructions on specific features, please refer to the FAQs.
                </Text>
              </div>
            </div>
            <div className="flex w-full items-center">
              <div className="mb-2 w-[24%]">
                <div className="flex flex-col items-start">
                  <Img src="images/img_fluent_people_c.svg" alt="Fluentpeoplec" className="h-[48px]" />
                  <Heading size="headingmd" as="h5" className="mt-3 text-[20px] font-semibold !text-gray-900_06">
                    Community
                  </Heading>
                  <div className="mt-24 flex justify-center gap-2 self-stretch">
                    <a href="#">
                      <Text as="p" className="text-[14px] font-normal !text-teal-400">
                        Learn More
                      </Text>
                    </a>
                    <Img src="images/img_arrow_right_teal_400.svg" alt="Arrowright" className="h-[16px]" />
                  </div>
                </div>
              </div>
              <Text
                size="textmd"
                as="p"
                className="relative mb-10 ml-[-112px] w-[76%] self-end text-[16px] font-normal leading-6 !text-blue_gray-800_02"
              >
                With over 15 languages supported, the VeeWallet Global Community is home to millions of users from 20+
                countries.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
