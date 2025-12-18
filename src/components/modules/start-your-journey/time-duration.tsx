"use client";
import { TimeFrame, useTeamSpecs } from "@/stores/useTeamSpecs";
import Image from "next/image";
import React from "react";

export default function TimeDuration() {
  const { timeFrame, setTimeFrame } = useTeamSpecs();
  return (
    <div>
      <div className="text-white flex items-center gap-3">
        <div className="bg-primary/30 p-3 w-12 h-12 rounded-full flex justify-center items-center">
          <h5 className="text-center text-primary text-xl font-semibold">03</h5>
        </div>
        <p className="text-xl">Time frame you&apos;re expecting ?</p>
      </div>
      <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {rolesData?.map((time, index) => (
          <div
            key={index}
            className={`bg-primary/10 p-6 text-center items-center justify-center flex flex-col gap-3 cursor-pointer hover:bg-primary/20 transition ${timeFrame === time.spec ? "border-2 border-primary" : "border-transparent border-2"}`}
            onClick={() => setTimeFrame(time.spec)}
          >
            <Image
              src={time.icon}
              width={48}
              height={48}
              alt={`${time.title} icon`}
              className="object-contain"
              priority
            />
            <p className="text-md">{time?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const rolesData = [
  {
    title: "Immediately",
    icon: "/icon/time-line/Immediately.png",
    spec: TimeFrame.Immediately,
  },
  {
    title: "Within 1-2 weeks",
    icon: "/icon/time-line/WithinOneTwoWeeks.png",
    spec: TimeFrame.WithinOneTwoWeeks,
  },
  {
    title: "Within 2-4 weeks",
    icon: "/icon/time-line/WithinTwoFourWeeks.png",
    spec: TimeFrame.WithinTwoFourWeeks,
  },
  {
    title: "Not sure yet",
    icon: "/icon/time-line/NotSureYet.png",
    spec: TimeFrame.NotSureYet,
  },
];
