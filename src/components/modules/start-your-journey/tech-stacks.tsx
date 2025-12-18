"use client";
import { useTeamSpecs } from "@/stores/useTeamSpecs";
import Image from "next/image";
import React from "react";

export default function TechStacks() {
  const { toggleTechStack, techStacks } = useTeamSpecs();
  const isSelected = (tech: string) => techStacks.includes(tech);
  return (
    <div>
      <div className="text-white flex items-center gap-3">
        <div className="bg-primary/30 p-3 w-12 h-12 rounded-full flex justify-center items-center">
          <h5 className="text-center text-primary text-xl font-semibold">02</h5>
        </div>
        <p className="text-xl">What Tech Stack You Are Looking For?</p>
      </div>
      <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {rolesData?.map((tech, index) => (
          <div
            key={index}
            className={`bg-primary/10 p-6 text-center items-center justify-center flex  gap-3 cursor-pointer hover:bg-primary/20 transition ${isSelected(tech.title) ? "border-2 border-primary" : "border-transparent border-2"}`}
            onClick={() => toggleTechStack(tech.title)}
          >
            <Image
              src={tech.icon}
              width={48}
              height={48}
              alt={`${tech.title} icon`}
              className="object-contain"
              priority
            />
            <p className="text-md">{tech?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const rolesData = [
  { title: "Javascript", icon: "/icon/stacks/javascript.png" },
  { title: "TypeScript", icon: "/icon/stacks/typescript.png" },
  { title: "React", icon: "/icon/stacks/react.png" },
  { title: "Vue.JS", icon: "/icon/stacks/vue.png" },

  // Backend
  { title: "Node JS", icon: "/icon/stacks/node.png" },
  { title: "Python", icon: "/icon/stacks/python.png" },
  { title: "PHP", icon: "/icon/stacks/php.png" },
  { title: "Django", icon: "/icon/stacks/dj.png" },
  { title: "GraphQL", icon: "/icon/stacks/graphql.png" },

  // Mobile
  { title: "Android", icon: "/icon/stacks/android.png" },
  { title: "Flutter", icon: "/icon/stacks/flutter.png" },
  { title: "Swift", icon: "/icon/stacks/swift.png" },

  // Database
  { title: "PostgreSQL", icon: "/icon/stacks/postgres.png" },
  { title: "MongoDB", icon: "/icon/stacks/mongodb.png" },

  // DevOps
  { title: "DevOps", icon: "/icon/stacks/devops.png" },
  { title: "AWS", icon: "/icon/aws.png" },
];
