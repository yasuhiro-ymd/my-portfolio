import Link from 'next/link';

export default function Navigation() {
  const navItems = [
    { href: '#about', label: '自己紹介' },
    { href: '#projects', label: 'プロジェクト/研究' },
    { href: '#achievements', label: '業績' },
    { href: '#experience', label: '経歴/学歴' },
    { href: '#skills', label: 'スキル' },
    { href: '#contact', label: 'お問い合わせ' },
  ];

  return (
    <nav className="w-full border-b border-[#2d2d4d]/50 sticky top-0 z-50 bg-[#0a0a1a]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-40 py-3 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-white rounded flex-shrink-0" />
          <h1 className="text-base sm:text-lg font-bold text-white whitespace-nowrap">山田 泰大</h1>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-9 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs sm:text-sm font-medium text-[#e8e8f0] hover:text-[#4a9eff] transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

