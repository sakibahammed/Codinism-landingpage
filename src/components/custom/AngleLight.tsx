import Image from "next/image";
import React from "react";

export default function AngleLight() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute" />
      <Image
        src="/layer/angel.png"
        alt="Blue angled glow"
        width={1400}
        height={700}
        className="
          absolute 
          -top-40
          left-[80%] 
          -rotate-16
          -translate-x-1/2 
          w-[2000px]
          h-[580px]
          md:-top-52
          lg:-top-60
        "
      />
    </div>
  );
}
