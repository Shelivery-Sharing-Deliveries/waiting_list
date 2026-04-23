'use client';

import React from 'react';
import Logo from '@/components/common/Logo';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const Navbar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-gray-100"
      style={{
        background: 'rgba(255,255,255,0.9)',
        boxShadow: '0 2px 15px -3px rgba(0,0,0,0.04)',
      }}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Logo size="md" />

        {/* Right side: CTA */}
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all active:scale-95 inline-block"
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              background: '#245B7B',
              borderTop: '1px solid rgba(255,255,255,0.2)',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.9')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
          >
            {t('nav.joinBeta')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;