import Image from "next/image";

const Stats = () => {
  return (
    <>
      <section className="relative w-full h-[450px] bg-black flex items-center justify-center overflow-hidden">
        {/* Decorative TOP border */}
        <div className="absolute top-10 flex items-center justify-center w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-blue-500 shadow-[0_0_10px_#3b82f6]/40" />

          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />

          <div className="w-[350px] h-px bg-blue-500 shadow-[0_0_15px_#3b82f6]" />

          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />

          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-blue-500/40 to-blue-500 shadow-[0_0_10px_#3b82f6]/40" />
        </div>

        {/* === LEFT VERTICAL BORDER === */}
        <div className="absolute left-1/2 -translate-x-[179px] top-[-20px] h-[calc(100%+40px)] flex flex-col items-center justify-center">
          <div className="flex-1 w-px bg-primary" />
          <div className="flex-1 w-px bg-primary" />
        </div>

        {/* === RIGHT VERTICAL BORDER === */}
        <div className="absolute left-1/2 translate-x-[179px] top-[-20px] h-[calc(100%+40px)] flex flex-col items-center justify-center">
          <div className="flex-1 w-px bg-primary" />
          <div className="flex-1 w-px bg-primary" />
        </div>

        {/* Decorative BOTTOM border */}
        <div className="absolute bottom-10 flex items-center justify-center w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-blue-500 shadow-[0_0_10px_#3b82f6]/40" />
          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
          <div className="w-[350px] h-px bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-blue-500/40 to-blue-500 shadow-[0_0_10px_#3b82f6]/40" />
        </div>

        {/* Main Content */}
        <div className="relative z-[1] w-full max-w-5xl px-8">
          <div className="grid grid-cols-3 items-center">
            <div className="flex flex-col items-center">
              <div className="relative w-[220px] h-[90px]">
                <a href="https://www.edulavo.com" target="_blank">
                  <Image
                    src="/logos/Edulavo.png"
                    alt="Edulavo logo"
                    fill
                    className="object-contain"
                  />
                </a>
              </div>

              <p className="text-gray-200 text-[14px] mt-6  leading-relaxed pr-8">
                Edulavo is a personal AI-powered skill coach designed to understand how people learn
                and adapt to their goals. It creates a smart, personalized learning path tailored to
                individual pace and ambitions—helping users grow faster and more effectively. Join
                25,000+ daily learners already leveling up with Edulavo.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-[220px] h-[90px]">
                <a href="https://phitron.io/" target="_blank">
                  <Image
                    src="/logos/Phitron.png"
                    alt="Phitron logo"
                    fill
                    className="object-contain"
                  />
                </a>
              </div>

              <p className="text-gray-200 text-[14px] mt-6 leading-relaxed ">
                Phitron helps build a strong foundation and secure a career with a super supportive
                learning platform. Master competitive programming, problem solving, logic building,
                and core programming through structured, hands-on learning. Join 10,000+ daily
                learners advancing toward a strong tech future with Phitron.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-[220px] h-[90px]">
                <a href="https://www.programming-hero.com/" target="_blank">
                  <Image
                    src="/logos/ProgrammingHero.png"
                    alt="ph logo"
                    fill
                    className="object-contain"
                  />
                </a>
              </div>

              <p className="text-gray-200 text-[14px] mt-6  leading-relaxed pl-8">
                Programming Hero is on a mission to deliver personalized learning and empower
                individuals to kick-start their careers. With engaging, interactive content and a
                learner-focused approach, it helps users build real-world skills effectively.
                Trusted by 40,000+ daily learners, Programming Hero is shaping the next generation
                of developers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
