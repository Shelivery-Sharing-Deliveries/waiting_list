'use client';

import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Contact Us', href: 'mailto:info@shelivery.com' },
    { label: 'Instagram', href: '#' },
  ];

  return (
    <footer className="w-full py-12 mt-auto bg-white border-t border-gray-100">
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto px-6 text-xs font-normal"
        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
      >
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-lg font-semibold text-gray-900">Shelivery</div>
          <p className="text-gray-500">© {new Date().getFullYear()} Shelivery. Starting in Lausanne.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-gray-500">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="transition-colors cursor-pointer"
              style={{ color: '#6B7280', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;