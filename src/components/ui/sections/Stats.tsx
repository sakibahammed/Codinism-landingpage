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
        {/* <div className="text-center">
          <h1 className="text-[90px] font-bold text-[#007AFF] leading-none">100K</h1>

          <p className="text-gray-300 text-lg mt-4">
            of dreams that come true <br /> in reality.
          </p>
        </div> */}
        <div className="text-center">
          <h1 className="text-[90px] font-bold text-[#007AFF] leading-none">100K</h1>

          <p className="text-gray-300 text-lg mt-4">
            of dreams that come true <br /> in reality.
          </p>
        </div>
      </section>
    </>
  );
};

export default Stats;
