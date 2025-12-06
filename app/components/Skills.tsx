const skills = [
  'プログラミング: Python, C, MATLAB, R',
  'アプリ開発（誠意習得中）',
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 px-4 sm:px-5">スキル</h2>
        
        <div className="flex flex-wrap gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1e1e3f] border border-[#2d2d4d] rounded-lg text-white text-[11px] sm:text-xs md:text-sm font-medium h-auto min-h-[32px] sm:min-h-[36px] flex items-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

