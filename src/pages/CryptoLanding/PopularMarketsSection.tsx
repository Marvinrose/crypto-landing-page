import { Img, Heading, Button, Text } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const tableData = [
  {
    name: "BTC",
    lastprice: "$16,834.56",
    row24Hchange: "-3.23%",
    btcbitcoinOne: "images/img_btc_bitcoin.png",
    bitcoin: "Bitcoin",
    bitcoinchart: "images/img_bitcoin_chart.png",
  },
  {
    btcbitcoinOne: "images/img_eth_ethereum_token.png",
    name: "ETH",
    bitcoin: "Ethereum",
    lastprice: "$1267.23",
    row24Hchange: "+4.26%",
    bitcoinchart: "images/img_eth_chart.png",
  },
  {
    btcbitcoinOne: "images/img_sol_solana.png",
    name: "SOL",
    bitcoin: "Solana",
    lastprice: "$204.67",
    row24Hchange: "-2.45%",
    bitcoinchart: "images/img_solana_chart.png",
  },
  {
    btcbitcoinOne: "images/img_bnb_bnb.png",
    name: "BNB",
    bitcoin: "Binance Coin",
    lastprice: "$305.12",
    row24Hchange: "+1.56%",
    bitcoinchart: "images/img_bnb_chart.png",
  },
  {
    btcbitcoinOne: "images/img_ltc_litecoin_token.png",
    name: "LTC",
    bitcoin: "Litecoin",
    lastprice: "$769.45",
    row24Hchange: "-4.33%",
    bitcoinchart: "images/img_ltc_chart.png",
  },
];

type TableRowType = {
  name: string;
  lastprice: string;
  row24Hchange: string;
  btcbitcoinOne: string;
  bitcoin: string;
  bitcoinchart: string;
};

export default function PopularMarketsSection() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex items-center gap-2">
            <Img
              src={info.row.original.btcbitcoinOne as unknown as string}
              alt="Btcbitcoin"
              className="h-[24px] object-cover"
            />
            <div className="flex flex-wrap gap-2">
              <Text
                as="p"
                className="!text-[14px] font-normal !text-gray-900_06"
              >
                {info.getValue<string>()}
              </Text>
              <Text as="p" className="!text-[14px] font-normal !text-gray-500">
                {info.row.original.bitcoin as unknown as string}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            as="p"
            className="pb-1.5 text-left !text-[14px] font-normal !text-gray-500"
          >
            Name
          </Text>
        ),
        meta: { width: "276px" },
      }),
      tableColumnHelper.accessor("lastprice", {
        cell: (info) => (
          <Text as="p" className="!text-[14px] font-normal !text-gray-900_06">
            {info.getValue<string>()}
          </Text>
        ),
        header: (info) => (
          <Text
            as="p"
            className="pb-1.5 text-left !text-[14px] font-normal !text-gray-500"
          >
            Last Price
          </Text>
        ),
        meta: { width: "250px" },
      }),
      tableColumnHelper.accessor("row24Hchange", {
        cell: (info) => (
          <div className="flex flex-1 items-center justify-between gap-5">
            <Text as="p" className="!text-[14px] font-normal !text-red-700">
              {info.getValue<string>()}
            </Text>
            <Img
              src={info.row.original.bitcoinchart as unknown as string}
              alt="Bitcoinchart"
              className="h-[30px] w-[10%] object-contain"
            />
            <Button
              shape="round"
              className="min-w-[72px] rounded-lg px-4 font-semibold"
            >
              Trade
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1 flex-wrap items-start justify-between gap-5">
            <Text
              as="p"
              className="mb-1.5 !text-[14px] font-normal !text-gray-500"
            >
              24h Change
            </Text>
            <Text
              as="p"
              className="mr-[282px] !text-[14px] font-normal !text-gray-500"
            >
              Chart
            </Text>
          </div>
        ),
        meta: { width: "624px" },
      }),
    ];
  }, []);

  return (
    <>
      {/* popular markets section */}
      <div>
        <div className="flex flex-col items-center justify-center bg-gray-50_01 py-[62px] md:py-5">
          <div className="container-xs flex flex-col items-center gap-[30px] md:px-5">
            <Heading
              size="headinglg"
              as="h2"
              className="self-start !text-[39px] font-semibold tracking-[-0.78px] !text-gray-900_06 md:text-[37px] sm:text-[35px]"
            >
              Popular Markets
            </Heading>
            <div className="flex flex-col gap-[22px] self-stretch bg-gray-50_01">
              <div className="flex flex-wrap items-start gap-9 bg-gray-50_01">
                <Heading
                  size="headingmd"
                  as="h3"
                  className="mb-1.5 text-xl font-semibold !text-gray-500"
                >
                  Hot
                </Heading>
                <Heading
                  size="headingmd"
                  as="h4"
                  className="text-xl font-semibold !text-gray-500"
                >
                  New Coins
                </Heading>
                <Heading
                  size="headingmd"
                  as="h5"
                  className="text-xl font-semibold !text-gray-500"
                >
                  Top Gainers
                </Heading>
              </div>
              <ReactTable
                size="xs"
                variant="simple"
                bodyProps={{ className: "" }}
                headerCellProps={{ className: "bg-gray-50_01" }}
                rowDataProps={{ className: "bg-gray-50_01" }}
                className="md:block md:overflow-x-auto md:whitespace-nowrap"
                columns={tableColumns}
                data={tableData}
              />
            </div>
            <div className="flex items-center gap-2 p-3">
              <a href="#">
                <Heading
                  size="headingxs"
                  as="h6"
                  className="!text-[16px] font-semibold !text-teal-400"
                >
                  View More
                </Heading>
              </a>
              <Img
                src="images/img_arrow_right.svg"
                alt="Arrowright"
                className="h-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
