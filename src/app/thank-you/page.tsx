'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import React, { useState, useEffect } from 'react';

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
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 24px',
        background: '#FFFFFF',
      }}
    >
      <div
        style={{
          maxWidth: '480px',
          width: '100%',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
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
        <div
          style={{
            background: '#F9FAFB',
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '32px',
          }}
        >
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '14px',
              color: '#6B7280',
              lineHeight: '1.5',
            }}
          >
            <span style={{ fontWeight: '600', color: '#2563EB' }}>{t('thankYou.waitingCount', waitingListCount)}</span>{' '}
            {t('thankYou.waitingText')}
          </p>
        </div>

        {/* Share Section */}
        <div style={{ marginBottom: '32px' }}>
          <h3
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '16px',
              fontWeight: '600',
              color: '#191b23',
              marginBottom: '8px',
            }}
          >
            {t('thankYou.shareTitle')}
          </h3>
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '14px',
              color: '#6B7280',
              marginBottom: '16px',
            }}
          >
            {t('thankYou.shareSubtitle')}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button
              onClick={handleShare}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 20px',
                border: '1px solid #2563EB',
                borderRadius: '8px',
                background: 'transparent',
                color: '#2563EB',
                fontFamily: '"Inter", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                share
              </span>
              {t('thankYou.shareButton')}
            </button>
            <button
              onClick={handleCopyLink}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 20px',
                border: '1px solid #2563EB',
                borderRadius: '8px',
                background: 'transparent',
                color: '#2563EB',
                fontFamily: '"Inter", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                link
              </span>
              {t('thankYou.copyLink')}
            </button>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '32px' }}>
          {/* Back to Home */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: '100%',
              padding: '14px 32px',
              background: '#2563EB',
              color: '#ffffff',
              borderRadius: '10px',
              fontFamily: '"Inter", sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              boxShadow: '0 4px 6px -1px rgba(37,99,235,0.3)',
              transition: 'all 0.15s ease',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              arrow_back
            </span>
            {t('thankYou.backToHome')}
          </Link>

          <p
            style={{
              marginTop: '16px',
              fontSize: '12px',
              color: '#6B7280',
              fontFamily: '"Inter", sans-serif',
            }}
          >
            {t('thankYou.questions')}{' '}
            <a
              href="mailto:info@shelivery.com"
              style={{ color: '#2563EB', textDecoration: 'none' }}
            >
              info@shelivery.com
            </a>
          </p>
        </div>

        {/* Logo */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '8px',
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ color: '#2563EB', fontSize: '24px' }}
            >
              delivery_dining
            </span>
            <span
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '20px',
                fontWeight: '800',
                color: '#111827',
                letterSpacing: '-0.05em',
              }}
            >
              Shelivery
            </span>
          </div>
          <p
            style={{
              fontSize: '12px',
              color: '#6B7280',
              fontFamily: '"Inter", sans-serif',
            }}
          >
            {t('thankYou.tagline')}
          </p>
        </div>
      </div>
    </div>
  );
}