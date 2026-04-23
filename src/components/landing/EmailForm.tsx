'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface EmailFormProps {
  textColor?: string;
}

const EmailForm: React.FC<EmailFormProps> = ({ textColor }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [waitingListCount, setWaitingListCount] = useState(0);
  const router = useRouter();
  const { t } = useLanguage();

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

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError(t('emailForm.errorInvalidEmail'));
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.toLowerCase().trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || t('emailForm.errorFailed'));
        return;
      }

      setSuccess(true);
      setEmail('');
      setTimeout(() => {
        router.push('/thank-you');
      }, 1500);
    } catch (err) {
      setError(t('emailForm.errorGeneral'));
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div
        style={{ paddingTop: '24px' }}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0 items-center"
      >
        <div
          className="flex items-center gap-3 px-5 py-3 rounded-xl"
          style={{
            background: 'rgba(var(--color-primary-rgb), 0.1)',
            border: '1px solid var(--color-secondary-fixed)',
          }}
        >
          <span
            className="inline-block rounded-full border-2 shrink-0"
            style={{
              width: '18px',
              height: '18px',
              borderColor: 'rgba(var(--color-secondary-rgb),0.25)',
              borderTopColor: 'var(--color-secondary)',
              animation: 'spin 0.7s linear infinite',
            }}
          />
          <span
            style={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: '600',
              fontSize: '14px',
              color: 'var(--color-secondary)',
              whiteSpace: 'nowrap',
            }}
          >
            {t('emailForm.successMessage')}
          </span>
        </div>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '24px'  }}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0 "
      >
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('emailForm.placeholder')}
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              background: 'var(--color-surface-muted)',
              border: error ? '1px solid var(--color-error)' : '1px solid var(--color-border-subtle)',
              borderRadius: '12px',
              outline: 'none',
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif',
              transition: 'all 0.15s ease',
              color: 'var(--color-text-main)',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-primary)';
              e.currentTarget.style.boxShadow = '0 0 0 2px rgba(var(--color-primary-rgb),0.2)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = error ? 'var(--color-error)' : 'var(--color-border-subtle)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          style={{
            background: isLoading ? 'var(--color-primary-fixed-dim)' : 'var(--color-primary)',
            color: 'var(--color-on-primary)',
            padding: '12px 32px',
            borderRadius: '12px',
            fontSize: '14px',
            fontFamily: '"Inter", sans-serif',
            fontWeight: '600',
            letterSpacing: '0.01em',
            border: '1px solid rgba(255,255,255,0.2)',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            transition: 'all 0.15s ease',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 6px -1px rgba(var(--color-primary-rgb),0.3)',
          }}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span
                className="inline-block rounded-full border-2"
                style={{
                  width: '14px',
                  height: '14px',
                  borderColor: 'rgba(255,255,255,0.3)',
                  borderTopColor: 'var(--color-on-primary)',
                  animation: 'spin 0.7s linear infinite',
                }}
              />
              {t('emailForm.loading')}
            </span>
          ) : (
            t('emailForm.button')
          )}
        </button>
      </form>

      {error && (
        <p
          style={{
            marginTop: '8px',
            fontSize: '13px',
            color: 'var(--color-error)',
            fontFamily: '"Inter", sans-serif',
          }}
        >
          {error}
        </p>
      )}

      <p
        style={{
          marginTop: '16px',
          fontSize: '12px',
          color: textColor || 'var(--color-text-muted)',
          fontFamily: '"Inter", sans-serif',
          textAlign: 'left',
        }}
      >
        {t('emailForm.helperText', waitingListCount)}
      </p>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default EmailForm;