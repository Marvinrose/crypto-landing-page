import { Heading, Text, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  notificationIcon?: string;
  notificationText?: React.ReactNode;
  notificationCount?: React.ReactNode;
}

export default function NotificationRow({
  notificationIcon = "images/img_76_notification.svg",
  notificationText = "Notifications",
  notificationCount = "10",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center self-stretch gap-1 bg-gray-900_01 flex-1 rounded`}
    >
      <Img src={notificationIcon} alt="Notifications" className="h-[8px]" />
      <div className="flex flex-1 flex-wrap justify-center gap-2.5">
        <Text size="textlg" as="p" className="text-[6.35px] font-normal !text-blue_gray-100">
          {notificationText}
        </Text>
        <Heading
          as="p"
          className="flex h-[8px] w-[10px] items-center justify-center rounded-[3px] bg-red-500 text-[4.24px] font-semibold"
        >
          {notificationCount}
        </Heading>
      </div>
    </div>
  );
}
