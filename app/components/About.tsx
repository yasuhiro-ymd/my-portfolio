import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="w-full py-4 md:py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-8 px-4 sm:px-5">自己紹介</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 px-4 sm:px-5">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full bg-gray-600 overflow-hidden">
              <Image
                src="/profile.JPG"
                alt="山田 泰大"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
                quality={85}
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">山田 泰大</h3>
            <p className="text-sm sm:text-base text-[#a8a8c8] leading-relaxed max-w-3xl mx-auto md:mx-0">
              東京大学でAI駆動型光学計測・解析に関する研究を行っています。現実世界で計測されたデータに数理的手法を適用し、有益な情報を見出すことに興味を持っています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

