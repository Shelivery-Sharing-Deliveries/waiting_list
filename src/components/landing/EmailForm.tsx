'use client';

import React, { useState } from 'react';
import { addToWaitingList, checkEmailExists } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const { exists } = await checkEmailExists(email);
      if (exists) {
        setError('This email is already on the waiting list!');
        setIsLoading(false);
        return;
      }

      const result = await addToWaitingList(email);

      if (result.success) {
        setSuccess(true);
        setEmail('');
        setTimeout(() => {
          router.push('/thank-you');
        }, 1500);
      } else {
        setError('Failed to join. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div
        className="p-6 rounded-xl text-center"
        style={{ background: 'rgba(108, 248, 187, 0.15)', border: '1px solid rgba(0, 108, 73, 0.2)' }}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <span
            className="material-symbols-outlined"
            style={{ color: '#006c49', fontSize: '24px', fontVariationSettings: "'FILL' 1" }}
          >check_circle</span>
          <span style={{ fontFamily: '"Inter", sans-serif', fontWeight: '600', color: '#006c49', fontSize: '16px' }}>
            You&apos;re on the list!
          </span>
        </div>
        <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#6B7280' }}>
          Redirecting to your confirmation page...
        </p>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '24px' }}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
      >
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              background: '#F9FAFB',
              border: error ? '1px solid #ba1a1a' : '1px solid #E5E7EB',
              borderRadius: '12px',
              outline: 'none',
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif',
              transition: 'all 0.15s ease',
              color: '#111827',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#2563EB';
              e.currentTarget.style.boxShadow = '0 0 0 2px rgba(37,99,235,0.2)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = error ? '#ba1a1a' : '#E5E7EB';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          style={{
            background: isLoading ? '#93aef0' : '#2563EB',
            color: '#ffffff',
            padding: '12px 32px',
            borderRadius: '12px',
            fontSize: '14px',
            fontFamily: '"Inter", sans-serif',
            fontWeight: '600',
            letterSpacing: '0.01em',
            border: '1px solid rgba(255,255,255,0.2)',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            transition: 'all 0.15s ease',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 6px -1px rgba(37,99,235,0.3)',
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
                  borderTopColor: 'white',
                  animation: 'spin 0.7s linear infinite',
                }}
              />
              Loading...
            </span>
          ) : 'Get Early Access'}
        </button>
      </form>

      {error && (
        <p style={{
          marginTop: '8px',
          fontSize: '13px',
          color: '#ba1a1a',
          fontFamily: '"Inter", sans-serif',
        }}>
          {error}
        </p>
      )}

      <p style={{
        marginTop: '16px',
        fontSize: '12px',
        color: '#6B7280',
        fontFamily: '"Inter", sans-serif',
        textAlign: 'left',
      }}>
        Join 1,200+ people in the Lausanne waitlist.
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