'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import React, { useState, useEffect } from 'react';
import Logo from '@/components/common/Logo';

export default function ThankYouPage() {
  const { t } = useLanguage();
  const [waitingListCount, setWaitingListCount] = useState(0);

  useEffect(() => {
    const fetchWaitingListCount = async () => {
      try {
        const response = await fetch('/api/waitlist-count');
        const data = await response.json();
        if (response.ok) {
          setWaitingListCount(data.count + 100); // Add 100 as per requirement
        } else {
          console.error('Failed to fetch waiting list count:', data.error);
        }
      } catch (err) {
        console.error('Error fetching waiting list count:', err);
      }
    };
    fetchWaitingListCount();
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: t('thankYou.shareNativeTitle'),
        text: t('thankYou.shareNativeText'),
        url: window.location.origin,
      });
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-12 px-6 bg-background">
      <div className="max-w-md w-full mx-auto text-center">
        {/* Success Icon */}
        <div style={{ position: 'relative', marginBottom: '32px' }}>
          <div
            style={{
              width: '96px',
              height: '96px',
              background: 'rgba(108, 248, 187, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: '48px',
                color: '#006c49',
                fontVariationSettings: "'FILL' 1",
              }}
            >
              check_circle
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '36px',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            fontWeight: '800',
            color: '#191b23',
            marginBottom: '16px',
          }}
        >
          {t('thankYou.title')}
        </h1>

        {/* Description */}
        <p
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#6B7280',
            marginBottom: '24px',
          }}
        >
          {t('thankYou.description')}
        </p>

        {/* Info box */}
        <div className="bg-surface-muted border border-border-subtle rounded-xl p-4 mb-8">
          <p className="font-body-sm text-text-muted">
            <span className="font-label-bold text-primary">{t('thankYou.waitingCount', waitingListCount)}</span>{' '}
            {t('thankYou.waitingText')}
          </p>
        </div>

        {/* Share Section */}
        <div className="mb-8">
          <h3 className="font-label-bold text-text-main mb-2">
            {t('thankYou.shareTitle')}
          </h3>
          <p className="font-body-sm text-text-muted mb-4">
            {t('thankYou.shareSubtitle')}
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-5 py-2.5 border border-primary rounded-lg bg-transparent text-primary font-label-bold cursor-pointer transition-all duration-150 ease-in-out"
            >
              <span className="material-symbols-outlined text-lg">
                share
              </span>
              {t('thankYou.shareButton')}
            </button>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-5 py-2.5 border border-primary rounded-lg bg-transparent text-primary font-label-bold cursor-pointer transition-all duration-150 ease-in-out"
            >
              <span className="material-symbols-outlined text-lg">
                link
              </span>
              {t('thankYou.copyLink')}
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border-subtle pt-8">
          {/* Back to Home */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full py-3.5 px-8 bg-primary text-on-primary rounded-lg font-label-bold no-underline tracking-wide shadow-primary-md transition-all duration-150 ease-in-out"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_back
            </span>
            {t('thankYou.backToHome')}
          </Link>

          <p className="mt-4 font-micro-copy text-text-muted">
            {t('thankYou.questions')}{' '}
            <a
              href="mailto:info@shelivery.com"
              className="text-primary no-underline"
            >
              info@shelivery.com
            </a>
          </p>
        </div>

        {/* Logo */}
        <div className="mt-10 text-center">
          <Logo size="md" className="justify-center" />
          <p className="font-micro-copy text-text-muted mt-2">
            {t('thankYou.tagline')}
          </p>
        </div>
      </div>
    </div>
  );
}