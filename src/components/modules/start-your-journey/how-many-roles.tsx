"use client";
import { TeamSize, useTeamSpecs } from "@/stores/useTeamSpecs";
import Image from "next/image";
import React from "react";

export default function HowManyRoles() {
  const { teamSize, setTeamSize } = useTeamSpecs();

  return (
    <div>
      <div className="text-white flex items-center gap-3">
        <div className="bg-primary/30 p-3 w-12 h-12 rounded-full flex justify-center items-center">
          <h5 className="text-center text-primary text-xl font-semibold">01</h5>
        </div>
        <p className="text-xl">How many roles are you looking to feel ?</p>
      </div>
      <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {rolesData?.map((role, index) => (
          <div
            key={index}
            className={`bg-primary/10 p-6 text-center items-center justify-center flex flex-col gap-3 cursor-pointer hover:bg-primary/20 transition ${teamSize === role.spec ? "border-2 border-primary" : "border-transparent border-2"}`}
            onClick={() => setTeamSize(role.spec)}
          >
            <Image
              src={role.icon}
              width={48}
              height={48}
              alt={`${role.title} icon`}
              className="object-contain"
              priority
            />
            <p className="text-md">{role?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const rolesData = [
  {
    title: "1 Developer",
    icon: "/icon/developers/1_Developer.png",
    spec: TeamSize.OneDeveloper,
  },

  {
    title: "2-3 Developers",
    icon: "/icon/developers/2-3_Developers.png",
    spec: TeamSize.TwoThreeDevelopers,
  },
  {
    title: "Full-team (4+ Roles)",
    icon: "/icon/developers/FullTeamFourRoles.png",
    spec: TeamSize.FullTeamFourPlusDevelopers,
  },
  {
    title: "Not sure yet",
    icon: "/icon/developers/NotSureYet.png",
    spec: TeamSize.NotSureYet,
  },
];
