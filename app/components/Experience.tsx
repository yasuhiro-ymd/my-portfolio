interface ExperienceItem {
  id: number;
  period: string;
  title: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    period: '2025 - 現在',
    title: '東京大学総合文化研究科広域科学専攻',
  },
  {
    id: 2,
    period: '2021 - 2025',
    title: '大阪大学基礎工学部システム科学科',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-4 md:py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 px-4 sm:px-5">経歴 / 学歴</h2>
        
        <div className="flex flex-col gap-2 px-4 sm:px-5 py-0">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="flex gap-2">
              {/* Timeline */}
              <div className="flex flex-col items-center pt-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#4a9eff] flex items-center justify-center bg-[#0a0a1a] flex-shrink-0 shadow-lg shadow-[#4a9eff]/30">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#4a9eff]" />
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-0.5 h-2 sm:h-4 bg-gradient-to-b from-[#4a9eff] to-[#2d2d4d] mt-1" />
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-5 pt-3">
                <p className="text-sm sm:text-base font-medium text-white leading-relaxed">
                  {exp.period}: {exp.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

