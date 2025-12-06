import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-[400px] sm:h-[450px] md:h-[480px] bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#16213e] overflow-hidden">
      
      {/* 幾何学的な装飾要素 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* 円形の装飾 */}
        <div className="absolute top-8 sm:top-12 md:top-16 left-8 sm:left-16 md:left-24 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-2 border-white/20 rounded-full"></div>
        <div className="absolute top-16 sm:top-24 md:top-32 right-8 sm:right-20 md:right-40 w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 border-2 border-white/15 rounded-full"></div>
        <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border border-white/15 rounded-full"></div>
        <div className="absolute top-24 sm:top-32 md:top-48 left-16 sm:left-32 md:left-48 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 sm:top-40 md:top-60 right-12 sm:right-28 md:right-56 w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14 border-2 border-white/10 rounded-full"></div>
        
        {/* 三角形の装飾 */}
        <div className="absolute top-12 sm:top-16 md:top-24 left-1/4 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] sm:border-l-[20px] sm:border-r-[20px] sm:border-b-[35px] md:border-l-[30px] md:border-r-[30px] md:border-b-[50px] border-l-transparent border-r-transparent border-b-white/10"></div>
        <div className="absolute top-6 sm:top-8 md:top-12 right-1/3 w-0 h-0 border-l-[11px] border-r-[11px] border-t-[19px] sm:border-l-[16px] sm:border-r-[16px] sm:border-t-[28px] md:border-l-[22px] md:border-r-[22px] md:border-t-[38px] border-l-transparent border-r-transparent border-t-white/12"></div>
        <div className="absolute top-28 sm:top-36 md:top-52 left-1/3 w-0 h-0 border-t-[9px] border-b-[9px] border-l-[15px] sm:border-t-[12px] sm:border-b-[12px] sm:border-l-[20px] md:border-t-[18px] md:border-b-[18px] md:border-l-[30px] border-t-transparent border-b-transparent border-l-white/15"></div>
        <div className="absolute top-20 sm:top-24 md:top-36 right-1/5 w-0 h-0 border-t-[8px] border-b-[8px] border-r-[13px] sm:border-t-[10px] sm:border-b-[10px] sm:border-r-[18px] md:border-t-[15px] md:border-b-[15px] md:border-r-[25px] border-t-transparent border-b-transparent border-r-white/12"></div>
        
        {/* 線の装飾 */}
        <div className="absolute top-6 sm:top-8 md:top-12 left-1/3 w-px h-16 sm:h-24 md:h-32 bg-white/10"></div>
        <div className="absolute top-10 sm:top-14 md:top-20 right-1/4 w-20 sm:w-32 md:w-40 h-px bg-white/10"></div>
        <div className="absolute top-4 sm:top-6 md:top-8 left-1/5 w-12 sm:w-18 md:w-24 h-px bg-white/12"></div>
        <div className="absolute top-24 sm:top-32 md:top-44 right-1/6 w-px h-14 sm:h-20 md:h-28 bg-white/10"></div>
        <div className="absolute top-28 sm:top-36 md:top-56 left-1/2 w-16 sm:w-24 md:w-32 h-px bg-white/12"></div>
        {/* 対角線 */}
        <div className="absolute top-8 sm:top-12 md:top-16 left-1/4 w-16 sm:w-24 md:w-32 h-px bg-white/10 rotate-45 origin-left"></div>
        <div className="absolute top-20 sm:top-28 md:top-40 right-1/3 w-14 sm:w-20 md:w-28 h-px bg-white/10 -rotate-45 origin-right"></div>
        
        {/* 四角形の装飾 */}
        <div className="absolute top-20 sm:top-28 md:top-40 left-12 sm:left-20 md:left-32 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 border-white/15 rotate-45"></div>
        <div className="absolute top-14 sm:top-20 md:top-28 right-16 sm:right-32 md:right-48 w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 border-2 border-white/20 rotate-12"></div>
        <div className="absolute top-4 sm:top-6 md:top-8 left-3/4 w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14 border border-white/15 rotate-30"></div>
        <div className="absolute top-32 sm:top-40 md:top-64 left-1/4 w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 border-2 border-white/18 rotate-60"></div>
        <div className="absolute top-28 sm:top-36 md:top-52 right-1/5 w-9 h-9 sm:w-13 sm:h-13 md:w-18 md:h-18 border border-white/12 -rotate-30"></div>
        
        {/* 六角形風の装飾（回転した四角形で表現） */}
        <div className="absolute top-10 sm:top-14 md:top-20 left-2/3 w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 border border-white/15 rotate-45"></div>
        
        {/* 点/ドットの装飾 */}
        <div className="absolute top-7 sm:top-10 md:top-14 left-1/6 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-white/20 rounded-full"></div>
        <div className="absolute top-16 sm:top-22 md:top-32 left-2/3 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-white/25 rounded-full"></div>
        <div className="absolute top-24 sm:top-32 md:top-48 right-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-white/20 rounded-full"></div>
        <div className="absolute top-32 sm:top-40 md:top-64 left-3/5 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-white/18 rounded-full"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-center sm:justify-end px-4 sm:px-8 md:px-16 lg:px-52 pb-6 sm:pb-12">
        <div className="flex flex-col gap-2 mb-4 sm:mb-6 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-[-0.04em]">
            山田 泰大
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed max-w-2xl">
            東京大学総合文化研究科広域科学専攻 修士課程
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Link
            href="#about"
            className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 bg-[#1e1e3f] hover:bg-[#4a9eff] active:bg-[#4a9eff] text-white font-bold text-xs sm:text-sm md:text-base rounded-lg transition-all duration-300 h-10 sm:h-11 md:h-12 flex items-center justify-center min-w-[100px] sm:min-w-[120px] shadow-lg hover:shadow-[#4a9eff]/50 active:scale-95 sm:hover:scale-105"
          >
            自己紹介
          </Link>
          <Link
            href="#projects"
            className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 bg-[#1e1e3f] hover:bg-[#4a9eff] active:bg-[#4a9eff] text-white font-bold text-xs sm:text-sm md:text-base rounded-lg transition-all duration-300 h-10 sm:h-11 md:h-12 flex items-center justify-center min-w-[100px] sm:min-w-[120px] shadow-lg hover:shadow-[#4a9eff]/50 active:scale-95 sm:hover:scale-105"
          >
            プロジェクト
          </Link>
          <Link
            href="#achievements"
            className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 bg-[#1e1e3f] hover:bg-[#4a9eff] active:bg-[#4a9eff] text-white font-bold text-xs sm:text-sm md:text-base rounded-lg transition-all duration-300 h-10 sm:h-11 md:h-12 flex items-center justify-center min-w-[100px] sm:min-w-[120px] shadow-lg hover:shadow-[#4a9eff]/50 active:scale-95 sm:hover:scale-105"
          >
            業績
          </Link>
          <Link
            href="#experience"
            className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 bg-[#1e1e3f] hover:bg-[#4a9eff] active:bg-[#4a9eff] text-white font-bold text-xs sm:text-sm md:text-base rounded-lg transition-all duration-300 h-10 sm:h-11 md:h-12 flex items-center justify-center min-w-[100px] sm:min-w-[120px] shadow-lg hover:shadow-[#4a9eff]/50 active:scale-95 sm:hover:scale-105"
          >
            経歴/学歴
          </Link>
          <Link
            href="#skills"
            className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 bg-[#1e1e3f] hover:bg-[#4a9eff] active:bg-[#4a9eff] text-white font-bold text-xs sm:text-sm md:text-base rounded-lg transition-all duration-300 h-10 sm:h-11 md:h-12 flex items-center justify-center min-w-[100px] sm:min-w-[120px] shadow-lg hover:shadow-[#4a9eff]/50 active:scale-95 sm:hover:scale-105"
          >
            スキル
          </Link>
          <Link
            href="#contact"
            className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 bg-[#1e1e3f] hover:bg-[#4a9eff] active:bg-[#4a9eff] text-white font-bold text-xs sm:text-sm md:text-base rounded-lg transition-all duration-300 h-10 sm:h-11 md:h-12 flex items-center justify-center min-w-[100px] sm:min-w-[120px] shadow-lg hover:shadow-[#4a9eff]/50 active:scale-95 sm:hover:scale-105"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  );
}

