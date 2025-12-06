'use client';

import { useState } from 'react';
import Image from 'next/image';

function ProfileImage() {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="w-full h-full flex items-center justify-center text-[#a8a8c8] text-xs bg-gray-600">
        画像を読み込めませんでした
      </div>
    );
  }

  return (
    <Image
      src="/profile.JPG"
      alt="山田 泰大"
      width={160}
      height={160}
      className="w-full h-full object-cover"
      priority
      unoptimized={true}
      onError={() => setImageError(true)}
    />
  );
}

export default function About() {
  return (
    <section id="about" className="w-full py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-8 px-4 sm:px-5">自己紹介</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-5">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-gray-600 overflow-hidden">
              <ProfileImage />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">山田 泰大</h3>
            <p className="text-xs sm:text-sm md:text-base text-[#a8a8c8] leading-relaxed max-w-3xl mx-auto md:mx-0">
              東京大学でAI駆動型光学計測・解析に関する研究を行っています。現実世界で計測されたデータに数理的手法を適用し、有益な情報を見出すことに興味を持っています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

