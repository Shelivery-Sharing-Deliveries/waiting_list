'use client';

import Link from 'next/link';

export default function ThankYouPage() {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join Shelivery Waitlist',
        text: 'Join me on the Shelivery waiting list - Delivery costs, Shared!',
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
          You&apos;re on the list! 🎉
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
          Thank you for joining the Shelivery waiting list. We&apos;ll notify you as soon as we launch in Lausanne.
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
          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#6B7280', lineHeight: '1.5' }}>
            <span style={{ fontWeight: '600', color: '#2563EB' }}>1,201 people</span> are now waiting with you.
            The more people join, the faster we can launch!
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
            Help us grow faster
          </h3>
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '14px',
              color: '#6B7280',
              marginBottom: '16px',
            }}
          >
            Share with friends in Lausanne to move up the list.
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
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>share</span>
              Share
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
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>link</span>
              Copy Link
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
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
            Back to Home
          </Link>

          <p style={{
            marginTop: '16px',
            fontSize: '12px',
            color: '#6B7280',
            fontFamily: '"Inter", sans-serif',
          }}>
            Questions? Contact us at{' '}
            <a
              href="mailto:hello@shelivery.ch"
              style={{ color: '#2563EB', textDecoration: 'none' }}
            >
              hello@shelivery.ch
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
            <span className="material-symbols-outlined" style={{ color: '#2563EB', fontSize: '24px' }}>
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
          <p style={{ fontSize: '12px', color: '#6B7280', fontFamily: '"Inter", sans-serif' }}>
            Delivery costs, Shared. Starting in Lausanne.
          </p>
        </div>
      </div>
    </div>
  );
}