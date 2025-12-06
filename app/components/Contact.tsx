export default function Contact() {
  return (
    <section id="contact" className="w-full py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 px-4 sm:px-5">お問い合わせ</h2>
        
        <div className="px-4 sm:px-5 py-2 sm:py-3">
          <p className="text-xs sm:text-sm md:text-base text-[#a8a8c8] mb-6 sm:mb-8 md:mb-10 leading-relaxed">
            メールアドレス: <a href="mailto:yamada-yasuhiro@g.ecc.u-tokyo.ac.jp" className="text-white hover:text-[#4a9eff] active:text-[#4a9eff] transition-colors underline decoration-[#4a9eff]/50 hover:decoration-[#4a9eff] break-all">yamada-yasuhiro@g.ecc.u-tokyo.ac.jp</a>
          </p>
        </div>
      </div>
    </section>
  );
}

