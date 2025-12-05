export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-4 md:py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-8 px-4 sm:px-5">業績</h2>
        
        <div className="px-4 sm:px-5">
          <div className="flex flex-col gap-3 items-start">
            <div className="p-4 rounded-lg bg-[#1e1e3f]/50 border border-[#2d2d4d] w-fit max-w-full">
              <p className="text-sm sm:text-base font-medium text-white leading-relaxed whitespace-normal">
                基礎工学部賞（2024年度生物工学コース首席）
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#1e1e3f]/50 border border-[#2d2d4d] w-fit max-w-full">
              <p className="text-sm sm:text-base font-medium text-white leading-relaxed whitespace-normal">
                MicroTas 2025 ポスター発表（テーマ：INFERENCING PSEUDO-TEMPORAL DYNAMICS AND CELL TYPES IN LABEL-FREE SPECTRAL FLOW CYTOMETRY）
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

