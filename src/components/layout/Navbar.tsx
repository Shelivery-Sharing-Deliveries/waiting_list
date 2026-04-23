'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { locales, Locale } from '@/lib/i18n/translations';
import Logo from '@/components/common/Logo';

const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
};

const Navbar: React.FC = () => {
  const { locale, setLocale, t } = useLanguage();

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

        {/* Right side: Language switcher + CTA */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <div
            className="flex items-center rounded-lg overflow-hidden border border-gray-200"
            style={{ background: '#F9FAFB' }}
          >
            {locales.map((lang, index) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                className="text-xs font-semibold transition-all px-3 py-1.5"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  background: locale === lang ? '#245B7B' : 'transparent',
                  color: locale === lang ? '#ffffff' : '#6B7280',
                  borderRight: index < locales.length - 1 ? '1px solid #E5E7EB' : 'none',
                  cursor: locale === lang ? 'default' : 'pointer',
                }}
                aria-label={`Switch to ${lang.toUpperCase()}`}
                aria-pressed={locale === lang}
              >
                {LOCALE_LABELS[lang]}
              </button>
            ))}
          </div>

          {/* CTA Button */}
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