import { SectionTitle } from "@/components/custom";
import Image from "next/image";

// List of technology stack logos

export default function TechStack() {
  return (
    <>
      {/* ---------------------------- SECTION TITLE ---------------------------- */}
      <div className="w-[450px] mx-auto text-center mt-16 max-w-full">
        <SectionTitle className="text-center text-white" size="2xl">
          What Tech Stack We Work With
        </SectionTitle>
      </div>

      {/* ---------------------------- STACK LOGOS ---------------------------- */}
      {/* Responsive block:
          - `flex-wrap` ensures logos wrap naturally on smaller screens
          - fixed width center-aligned container for consistency
      */}
      <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {techStack?.map((tech, index) => (
          <div
            key={index}
            className={`bg-primary/10 p-6 text-center items-center justify-center flex  gap-3 cursor-pointer hover:bg-primary/20 transition`}
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
    </>
  );
}

const techStack = [
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
