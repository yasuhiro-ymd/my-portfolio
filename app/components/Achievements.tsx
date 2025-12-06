'use client';

export default function Achievements() {
  const achievements = [
    '基礎工学部賞（2024年度生物工学コース首席）',
    'MicroTas 2025 ポスター発表',
  ];

  return (
    <section id="achievements" className="w-full py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-8 px-4 sm:px-5">
          業績
        </h2>
        
        <div className="px-4 sm:px-5">
          <div className="flex flex-col gap-2 sm:gap-3 items-start">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-3 sm:p-4 rounded-lg bg-[#1e1e3f]/50 border border-[#2d2d4d] w-full sm:w-fit max-w-full"
              >
                <p className="text-xs sm:text-sm md:text-base font-medium text-white leading-relaxed whitespace-normal break-words">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

