import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-[480px] bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#16213e] overflow-hidden">
      
      {/* 幾何学的な装飾要素 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* 円形の装飾 */}
        <div className="absolute top-16 left-8 sm:left-16 md:left-24 w-20 h-20 sm:w-32 sm:h-32 border-2 border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-12 sm:right-24 md:right-40 w-16 h-16 sm:w-24 sm:h-24 border-2 border-white/15 rounded-full"></div>
        <div className="absolute top-8 left-1/2 w-12 h-12 sm:w-16 sm:h-16 border border-white/15 rounded-full"></div>
        <div className="absolute top-48 left-20 sm:left-32 md:left-48 w-8 h-8 sm:w-12 sm:h-12 border border-white/20 rounded-full"></div>
        <div className="absolute top-60 right-20 sm:right-32 md:right-56 w-10 h-10 sm:w-14 sm:h-14 border-2 border-white/10 rounded-full"></div>
        
        {/* 三角形の装飾 */}
        <div className="absolute top-24 left-1/4 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-white/10 sm:border-l-[30px] sm:border-r-[30px] sm:border-b-[50px]"></div>
        <div className="absolute top-12 right-1/3 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[25px] border-l-transparent border-r-transparent border-t-white/12 sm:border-l-[22px] sm:border-r-[22px] sm:border-t-[38px]"></div>
        <div className="absolute top-52 left-1/3 w-0 h-0 border-t-[12px] border-b-[12px] border-l-[20px] border-t-transparent border-b-transparent border-l-white/15 sm:border-t-[18px] sm:border-b-[18px] sm:border-l-[30px]"></div>
        <div className="absolute top-36 right-1/5 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[18px] border-t-transparent border-b-transparent border-r-white/12 sm:border-t-[15px] sm:border-b-[15px] sm:border-r-[25px]"></div>
        
        {/* 線の装飾 */}
        <div className="absolute top-12 left-1/3 w-px h-32 bg-white/10"></div>
        <div className="absolute top-20 right-1/4 w-24 sm:w-40 h-px bg-white/10"></div>
        <div className="absolute top-8 left-1/5 w-16 sm:w-24 h-px bg-white/12"></div>
        <div className="absolute top-44 right-1/6 w-px h-20 sm:h-28 bg-white/10"></div>
        <div className="absolute top-56 left-1/2 w-20 sm:w-32 h-px bg-white/12"></div>
        {/* 対角線 */}
        <div className="absolute top-16 left-1/4 w-24 sm:w-32 h-px bg-white/10 rotate-45 origin-left"></div>
        <div className="absolute top-40 right-1/3 w-20 sm:w-28 h-px bg-white/10 -rotate-45 origin-right"></div>
        
        {/* 四角形の装飾 */}
        <div className="absolute top-40 left-12 sm:left-20 md:left-32 w-12 h-12 sm:w-16 sm:h-16 border-2 border-white/15 rotate-45"></div>
        <div className="absolute top-28 right-16 sm:right-32 md:right-48 w-8 h-8 sm:w-12 sm:h-12 border-2 border-white/20 rotate-12"></div>
        <div className="absolute top-8 left-3/4 w-10 h-10 sm:w-14 sm:h-14 border border-white/15 rotate-30"></div>
        <div className="absolute top-64 left-1/4 w-6 h-6 sm:w-10 sm:h-10 border-2 border-white/18 rotate-60"></div>
        <div className="absolute top-52 right-1/5 w-14 h-14 sm:w-18 sm:h-18 border border-white/12 -rotate-30"></div>
        
        {/* 六角形風の装飾（回転した四角形で表現） */}
        <div className="absolute top-20 left-2/3 w-8 h-8 sm:w-12 sm:h-12 border border-white/15 rotate-45" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        
        {/* 点/ドットの装飾 */}
        <div className="absolute top-14 left-1/6 w-2 h-2 sm:w-3 sm:h-3 bg-white/20 rounded-full"></div>
        <div className="absolute top-32 left-2/3 w-2 h-2 sm:w-3 sm:h-3 bg-white/25 rounded-full"></div>
        <div className="absolute top-48 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-white/20 rounded-full"></div>
        <div className="absolute top-64 left-3/5 w-2 h-2 sm:w-3 sm:h-3 bg-white/18 rounded-full"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-end px-4 sm:px-12 md:px-16 lg:px-52 pb-12">
        <div className="flex flex-col gap-2 mb-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-[-0.04em]">
            山田 泰大
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-2xl">
            東京大学総合文化研究科広域科学専攻 修士課程
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Link
            href="#about"
            className="px-5 py-3 bg-[#1e1e3f] hover:bg-[#4a9eff] text-white font-bold text-base rounded-lg transition-all duration-300 h-12 flex items-center justify-center min-w-[120px] shadow-lg hover:shadow-[#4a9eff]/50 hover:scale-105"
          >
            自己紹介
          </Link>
          <Link
            href="#projects"
            className="px-5 py-3 bg-[#1e1e3f] hover:bg-[#4a9eff] text-white font-bold text-base rounded-lg transition-all duration-300 h-12 flex items-center justify-center min-w-[120px] shadow-lg hover:shadow-[#4a9eff]/50 hover:scale-105"
          >
            プロジェクト
          </Link>
          <Link
            href="#achievements"
            className="px-5 py-3 bg-[#1e1e3f] hover:bg-[#4a9eff] text-white font-bold text-base rounded-lg transition-all duration-300 h-12 flex items-center justify-center min-w-[120px] shadow-lg hover:shadow-[#4a9eff]/50 hover:scale-105"
          >
            業績
          </Link>
          <Link
            href="#experience"
            className="px-5 py-3 bg-[#1e1e3f] hover:bg-[#4a9eff] text-white font-bold text-base rounded-lg transition-all duration-300 h-12 flex items-center justify-center min-w-[120px] shadow-lg hover:shadow-[#4a9eff]/50 hover:scale-105"
          >
            経歴/学歴
          </Link>
          <Link
            href="#skills"
            className="px-5 py-3 bg-[#1e1e3f] hover:bg-[#4a9eff] text-white font-bold text-base rounded-lg transition-all duration-300 h-12 flex items-center justify-center min-w-[120px] shadow-lg hover:shadow-[#4a9eff]/50 hover:scale-105"
          >
            スキル
          </Link>
          <Link
            href="#contact"
            className="px-5 py-3 bg-[#1e1e3f] hover:bg-[#4a9eff] text-white font-bold text-base rounded-lg transition-all duration-300 h-12 flex items-center justify-center min-w-[120px] shadow-lg hover:shadow-[#4a9eff]/50 hover:scale-105"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  );
}

