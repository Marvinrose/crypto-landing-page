import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CryptoJourneySection from "./CryptoJourneySection";
import CryptoLandingSection from "./CryptoLandingSection";
import CryptoPortfolioSection from "./CryptoPortfolioSection";
import CryptoStakingSection from "./CryptoStakingSection";
import CustomerSupportSection from "./CustomerSupportSection";
import HeroSection from "./HeroSection";
import PopularMarketsSection from "./PopularMarketsSection";
import StatisticsSection from "./StatisticsSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import React from "react";

export default function CryptoLandingPage() {
  return (
    <>
      <Helmet>
        <title>
          Crypto Exchange - Trade and Earn Cryptocurrencies | VeeWallet
        </title>
        <meta
          name="description"
          content="Join VeeWallet, the leading crypto exchange platform with over 1200 cryptocurrencies listed. Enjoy the lowest trading fees, secure storage, and 24/7 customer support. Start trading Bitcoin, Ethereum, Solana, and more today."
        />
      </Helmet>
      <div className="w-full bg-gray-50_01">
        <Header />
        <div>
          {/* hero section */}
          <HeroSection />

          {/* statistics section */}
          <StatisticsSection />

          {/* popular markets section */}
          <PopularMarketsSection />

          {/* crypto portfolio section */}
          <CryptoPortfolioSection />
          <div className="mt-16">
            {/* crypto staking section */}
            <CryptoStakingSection />

            {/* why choose us section */}
            <WhyChooseUsSection />
            <div className="bg-gray-50_01 py-16 md:py-5">
              {/* crypto landing section */}
              <CryptoLandingSection />
            </div>
          </div>
          <div className="bg-gray-50_01 py-[62px] md:py-5">
            {/* customer support section */}
            <CustomerSupportSection />
          </div>

          {/* crypto journey section */}
          <CryptoJourneySection />
        </div>
        <Footer />
      </div>
    </>
  );
}
