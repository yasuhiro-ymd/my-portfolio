const skills = [
  'プログラミング: Python, C, MATLAB, R',
  'アプリ開発（誠意習得中）',
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-4 md:py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 px-4 sm:px-5">スキル</h2>
        
        <div className="flex flex-wrap gap-3 px-4 sm:px-5 py-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-[#1e1e3f] border border-[#2d2d4d] rounded-lg text-white text-xs sm:text-sm font-medium h-8 flex items-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

