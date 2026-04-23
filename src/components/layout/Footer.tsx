'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { locales, Locale } from '@/lib/i18n/translations';

const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
};

const Footer: React.FC = () => {
  const { locale, setLocale, t } = useLanguage();

  const footerLinks = [
    { key: 'footer.privacyPolicy', href: '/privacy-policy' },
    { key: 'footer.termsOfService', href: '/terms-of-service' },
    { key: 'footer.contactUs', href: 'mailto:info@shelivery.com' },
    { key: 'footer.instagram', href: '#' },
  ];

  return (
    <footer className="w-full py-12 mt-auto bg-white border-t border-gray-100">
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto px-6 text-xs font-normal"
        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
      >
        <div className="flex flex-col items-center md:items-start gap-2 mb-4 md:mb-0">
          <div className="text-lg font-semibold text-gray-900">Shelivery</div>
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Shelivery. {t('footer.tagline')}
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-2 text-gray-500 text-[8px] sm:text-xs">
          {footerLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="transition-colors cursor-pointer"
              style={{ color: '#6B7280', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
            >
              {t(link.key)}
            </a>
          ))}
          {/* Language Dropdown */}
          <div className="relative inline-block text-gray-500">
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as Locale)}
              className="block appearance-none bg-transparent border border-gray-200 text-gray-700 py-1 px-2 pr-6 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-[10px] sm:text-xs font-semibold cursor-pointer"
              style={{ fontFamily: '"Inter", sans-serif', color: '#6B7280' }}
              aria-label="Select language"
            >
              {locales.map((lang) => (
                <option key={lang} value={lang}>
                  {LOCALE_LABELS[lang]}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
              <svg
                className="fill-current h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;