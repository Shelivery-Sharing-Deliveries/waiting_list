'use client';

import React from 'react';

const Navbar: React.FC = () => {
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
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">delivery_dining</span>
          <span
            className="text-xl font-extrabold tracking-tighter text-gray-900"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Shelivery
          </span>
        </div>

        {/* Nav Links - Desktop */}
        <div
          className="hidden md:flex items-center gap-8 text-sm font-medium"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          <a
            href="#"
            className="border-b-2 pb-1"
            style={{ color: '#2563eb', borderColor: '#2563eb' }}
          >
            How It Works
          </a>
          <a
            href="#"
            className="transition-colors"
            style={{ color: '#6B7280' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#111827')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
          >
            Pricing
          </a>
          <a
            href="#"
            className="transition-colors"
            style={{ color: '#6B7280' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#111827')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
          >
            Community
          </a>
        </div>

        {/* CTA Button */}
        <button
          className="text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all active:scale-95"
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            background: '#2563EB',
            borderTop: '1px solid rgba(255,255,255,0.2)',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.9')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
        >
          Join Beta
        </button>
      </div>
    </nav>
  );
};

export default Navbar;