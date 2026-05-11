'use client';

import { useState, useEffect } from 'react';
import Logo from '@/components/common/Logo';

type CalcData = {
  monthly: number;
  saved: number;
  yearSaved: number;
  orders: number;
  fee: number;
};

async function addToWaitingList(
  email: string
): Promise<{ success?: boolean; duplicate?: boolean }> {
  const res = await fetch('/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  if (res.status === 409) return { duplicate: true };
  if (!res.ok) throw new Error('Failed to save email');
  return { success: true };
}

// --- Animated counter hook ---
function useCountUp(target: number, duration = 800, active = true) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.round(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, active, duration]);
  return val;
}

// --- Floating particle background ---
function Particles() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: i % 3 === 0 ? 8 : i % 3 === 1 ? 5 : 3,
            height: i % 3 === 0 ? 8 : i % 3 === 1 ? 5 : 3,
            borderRadius: '50%',
            background: 'var(--color-primary)',
            opacity: 0.1 + (i % 4) * 0.04,
            left: `${8 + i * 7.5}%`,
            top: `${10 + ((i * 13) % 80)}%`,
            animation: `float-${i % 3} ${4 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${(i * 0.4) % 3}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes float-0 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes float-1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        @keyframes float-2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      `}</style>
    </div>
  );
}

// --- Step 1: Calculator ---
function CalculatorStep({ onResult }: { onResult: (data: CalcData) => void }) {
  const [orders, setOrders] = useState(4);
  const [fee, setFee] = useState(6);
  const [submitted, setSubmitted] = useState(false);

  const monthly = orders * fee;
  const saved = Math.round(monthly * 0.7);
  const yearSaved = saved * 12;

  const displayMonthly = useCountUp(monthly, 600, submitted);
  const displaySaved = useCountUp(saved, 800, submitted);
  const displayYear = useCountUp(yearSaved, 1000, submitted);

  const handleReveal = () => {
    setSubmitted(true);
    setTimeout(() => onResult({ monthly, saved, yearSaved, orders, fee }), 1200);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            color: 'var(--color-primary)',
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            margin: '0 0 8px',
          }}
        >
          Quick calculation
        </p>
        <h2
          style={{
            color: 'var(--color-text-main)',
            fontSize: 26,
            fontWeight: 800,
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          How much are you
          <br />
          wasting on delivery?
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Slider 1 */}
        <div
          style={{
            background: 'var(--color-surface-muted)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 16,
            padding: '16px 20px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ color: 'var(--color-text-muted)', fontSize: 14 }}>Orders per month</span>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 16 }}>{orders}</span>
          </div>
          <input
            type="range"
            min={1}
            max={20}
            value={orders}
            onChange={(e) => setOrders(+e.target.value)}
            style={{ width: '100%', accentColor: 'var(--color-primary)', height: 4 }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span style={{ color: 'var(--color-text-muted)', fontSize: 12 }}>1</span>
            <span style={{ color: 'var(--color-text-muted)', fontSize: 12 }}>20</span>
          </div>
        </div>

        {/* Slider 2 */}
        <div
          style={{
            background: 'var(--color-surface-muted)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 16,
            padding: '16px 20px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ color: 'var(--color-text-muted)', fontSize: 14 }}>Avg delivery fee</span>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 16 }}>CHF {fee}</span>
          </div>
          <input
            type="range"
            min={2}
            max={15}
            value={fee}
            onChange={(e) => setFee(+e.target.value)}
            style={{ width: '100%', accentColor: 'var(--color-primary)', height: 4 }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span style={{ color: 'var(--color-text-muted)', fontSize: 12 }}>CHF 2</span>
            <span style={{ color: 'var(--color-text-muted)', fontSize: 12 }}>CHF 15</span>
          </div>
        </div>
      </div>

      {/* Preview */}
      {!submitted ? (
        <div
          style={{
            background: 'var(--color-accent-soft)',
            border: '1px solid rgba(var(--color-primary-rgb),0.2)',
            borderRadius: 16,
            padding: '16px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 12, margin: '0 0 2px' }}>
              You currently pay
            </p>
            <p style={{ color: 'var(--color-text-main)', fontSize: 22, fontWeight: 800, margin: 0 }}>
              CHF {monthly}/mo
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 12, margin: '0 0 2px' }}>
              With Shelivery
            </p>
            <p style={{ color: 'var(--color-primary)', fontSize: 22, fontWeight: 800, margin: 0 }}>
              CHF {monthly - saved}/mo
            </p>
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
          {[
            { label: 'You pay now', value: `CHF ${displayMonthly}`, sub: 'per month', highlight: false },
            { label: 'You save', value: `CHF ${displaySaved}`, sub: 'per month', highlight: true },
            { label: 'Per year', value: `CHF ${displayYear}`, sub: 'saved', highlight: true },
          ].map((c) => (
            <div
              key={c.label}
              style={{
                background: c.highlight ? 'var(--color-accent-soft)' : 'var(--color-surface-muted)',
                border: c.highlight
                  ? '1px solid rgba(var(--color-primary-rgb),0.25)'
                  : '1px solid var(--color-border-subtle)',
                borderRadius: 14,
                padding: '14px 10px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  color: c.highlight ? 'var(--color-primary)' : 'var(--color-text-muted)',
                  fontSize: 11,
                  margin: '0 0 4px',
                  fontWeight: 600,
                }}
              >
                {c.label}
              </p>
              <p
                style={{
                  color: c.highlight ? 'var(--color-primary)' : 'var(--color-text-main)',
                  fontSize: 16,
                  fontWeight: 800,
                  margin: '0 0 2px',
                }}
              >
                {c.value}
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 10, margin: 0 }}>{c.sub}</p>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleReveal}
        disabled={submitted}
        style={{
          background: submitted ? 'rgba(var(--color-primary-rgb),0.35)' : 'var(--color-primary)',
          color: 'var(--color-on-primary)',
          border: 'none',
          borderRadius: 16,
          padding: '18px 24px',
          fontSize: 16,
          fontWeight: 800,
          cursor: submitted ? 'default' : 'pointer',
          transition: 'all 0.3s',
          fontFamily: 'inherit',
          letterSpacing: '-0.01em',
        }}
      >
        {submitted ? '✓ Calculating your savings...' : "Show me how much I'm losing →"}
      </button>
    </div>
  );
}

// --- Step 2: Result + Email ---
function ResultStep({
  data,
  onSuccess,
}: {
  data: CalcData;
  onSuccess: (email: string) => void;
}) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const countYear = useCountUp(data.yearSaved, 1000, true);

  const handleSubmit = async () => {
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const result = await addToWaitingList(email.trim().toLowerCase());
      setDone(true);
      onSuccess(email);
      void result;
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (done) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Big result */}
      <div style={{ textAlign: 'center', padding: '24px 0 8px' }}>
        <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: '0 0 8px' }}>
          You&apos;re losing to delivery fees every year
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          <span
            style={{
              color: 'rgba(var(--color-primary-rgb),0.7)',
              fontSize: 24,
              fontWeight: 700,
              marginTop: 6,
            }}
          >
            CHF
          </span>
          <span style={{ color: 'var(--color-primary)', fontSize: 72, fontWeight: 900, lineHeight: 1 }}>
            {countYear}
          </span>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: 13, margin: '8px 0 0' }}>
          Based on {data.orders} orders/month at CHF {data.fee} each
        </p>
      </div>

      {/* Visual breakdown */}
      <div
        style={{
          background: 'var(--color-surface-muted)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 16,
          padding: '16px 20px',
        }}
      >
        <p
          style={{
            color: 'var(--color-text-muted)',
            fontSize: 13,
            margin: '0 0 12px',
            fontWeight: 600,
          }}
        >
          Where does it go?
        </p>
        {[
          {
            label: 'Your actual order',
            pct: Math.round((1 - data.fee / (data.fee + 25)) * 100),
            color: 'var(--color-outline)',
          },
          {
            label: 'Delivery fees (your share)',
            pct: Math.round((data.fee / (data.fee + 25)) * 100),
            color: 'var(--color-primary)',
          },
        ].map((b) => (
          <div key={b.label} style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: 12 }}>{b.label}</span>
              <span style={{ color: b.color, fontSize: 12, fontWeight: 600 }}>{b.pct}%</span>
            </div>
            <div style={{ background: 'var(--color-border-subtle)', borderRadius: 4, height: 6 }}>
              <div
                style={{
                  background: b.color,
                  borderRadius: 4,
                  height: 6,
                  width: `${b.pct}%`,
                  transition: 'width 1s ease',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          background: 'var(--color-accent-soft)',
          border: '1px solid rgba(var(--color-primary-rgb),0.25)',
          borderRadius: 18,
          padding: '20px',
        }}
      >
        <p style={{ color: 'var(--color-primary)', fontWeight: 800, fontSize: 16, margin: '0 0 4px' }}>
          Get CHF {data.saved} back every month.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: 13, margin: '0 0 16px' }}>
          Join the waitlist — be first when Shelivery launches near you.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            style={{
              background: '#ffffff',
              border: error
                ? '1px solid rgba(255,80,80,0.6)'
                : '1px solid var(--color-border-subtle)',
              borderRadius: 12,
              padding: '14px 16px',
              color: 'var(--color-text-main)',
              fontSize: 15,
              fontFamily: 'inherit',
              outline: 'none',
              transition: 'border 0.2s',
            }}
          />
          {error && <p style={{ color: '#ff6b6b', fontSize: 13, margin: 0 }}>{error}</p>}
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              background: 'var(--color-primary)',
              color: 'var(--color-on-primary)',
              border: 'none',
              borderRadius: 12,
              padding: '16px',
              fontSize: 15,
              fontWeight: 800,
              cursor: loading ? 'default' : 'pointer',
              fontFamily: 'inherit',
              opacity: loading ? 0.7 : 1,
              transition: 'opacity 0.2s',
            }}
          >
            {loading ? 'Joining...' : `Save CHF ${data.yearSaved}/year — Join waitlist →`}
          </button>
        </div>
      </div>

      <p
        style={{
          color: 'var(--color-text-muted)',
          fontSize: 12,
          textAlign: 'center',
          margin: 0,
        }}
      >
        No spam. No credit card. Just an early invite when we launch.
      </p>
    </div>
  );
}

// --- Step 3: Success ---
function SuccessStep({ email, yearSaved }: { email: string; yearSaved: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = Math.floor(Math.random() * 80) + 120;
    let c = 0;
    const interval = setInterval(() => {
      c += Math.ceil((target - c) / 8);
      if (c >= target) {
        c = target;
        clearInterval(interval);
      }
      setCount(c);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
        padding: '16px 0',
        textAlign: 'center',
      }}
    >
      {/* Checkmark animation */}
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'rgba(var(--color-primary-rgb),0.1)',
          border: '2px solid rgba(var(--color-primary-rgb),0.28)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'pop 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        <span style={{ fontSize: 36 }}>✓</span>
        <style>{`@keyframes pop { 0%{transform:scale(0)} 100%{transform:scale(1)} }`}</style>
      </div>

      <div>
        <h2 style={{ color: 'var(--color-text-main)', fontSize: 24, fontWeight: 800, margin: '0 0 8px' }}>
          You&apos;re on the list!
        </h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0 }}>
          We&apos;ll notify <span style={{ color: 'var(--color-primary)' }}>{email}</span> the
          moment Shelivery launches near you.
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, width: '100%' }}>
        <div
          style={{
            background: 'var(--color-accent-soft)',
            border: '1px solid rgba(var(--color-primary-rgb),0.2)',
            borderRadius: 14,
            padding: '16px 12px',
          }}
        >
          <p style={{ color: 'var(--color-text-muted)', fontSize: 12, margin: '0 0 4px' }}>
            Your spot
          </p>
          <p style={{ color: 'var(--color-primary)', fontSize: 28, fontWeight: 900, margin: 0 }}>
            #{count}
          </p>
        </div>
        <div
          style={{
            background: 'var(--color-surface-muted)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 14,
            padding: '16px 12px',
          }}
        >
          <p style={{ color: 'var(--color-text-muted)', fontSize: 12, margin: '0 0 4px' }}>
            You&apos;ll save
          </p>
          <p style={{ color: 'var(--color-text-main)', fontSize: 24, fontWeight: 800, margin: 0 }}>
            CHF {yearSaved}/yr
          </p>
        </div>
      </div>

      {/* Share nudge */}
      <div
        style={{
          background: 'var(--color-surface-muted)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 16,
          padding: '16px 20px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <p
          style={{
            color: 'var(--color-text-main)',
            fontSize: 14,
            margin: '0 0 12px',
            fontWeight: 600,
          }}
        >
          Move up the list — share with a friend
        </p>
        <button
          onClick={() => {
            const text = `I just joined the Shelivery waitlist — a platform that splits delivery costs so you never pay full price alone. Save CHF ${yearSaved}/year! Join here: https://shelivery.com`;
            if (typeof navigator !== 'undefined' && navigator.share) {
              navigator.share({ text }).catch(() => {});
            } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
              navigator.clipboard
                .writeText(text)
                .then(() => alert('Copied to clipboard!'))
                .catch(() => {});
            }
          }}
          style={{
            background: 'var(--color-accent-soft)',
            border: '1px solid rgba(var(--color-primary-rgb),0.24)',
            color: 'var(--color-primary)',
            borderRadius: 12,
            padding: '12px 20px',
            fontSize: 14,
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: 'inherit',
            width: '100%',
          }}
        >
          Share Shelivery →
        </button>
      </div>

      <p style={{ color: 'var(--color-text-muted)', fontSize: 12, margin: 0 }}>
        shelivery.com · Split deliveries. Save money. Less packaging.
      </p>
    </div>
  );
}

// --- Main Page ---
export default function CalculatorPage() {
  const [step, setStep] = useState<'calc' | 'result' | 'success'>('calc');
  const [calcData, setCalcData] = useState<CalcData | null>(null);
  const [userEmail, setUserEmail] = useState('');

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--color-background)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 16px',
        fontFamily: '"Inter", "Plus Jakarta Sans", sans-serif',
      }}
    >
      {/* Outer card */}
      <div
        style={{
          width: '100%',
          maxWidth: 420,
          position: 'relative',
          background: '#ffffff',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 28,
          padding: '32px 28px',
          boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)',
          overflow: 'hidden',
        }}
      >
        <Particles />

        {/* Logo / Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 28,
            position: 'relative',
          }}
        >
          <Logo size="md" />
          <span
            style={{
              marginLeft: 'auto',
              background: 'var(--color-accent-soft)',
              color: 'var(--color-primary)',
              fontSize: 11,
              fontWeight: 700,
              padding: '3px 10px',
              borderRadius: 20,
              letterSpacing: '0.05em',
            }}
          >
            EARLY ACCESS
          </span>
        </div>

        {/* Step content */}
        <div style={{ position: 'relative' }}>
          {step === 'calc' && (
            <CalculatorStep
              onResult={(data) => {
                setCalcData(data);
                setStep('result');
              }}
            />
          )}
          {step === 'result' && calcData && (
            <ResultStep
              data={calcData}
              onSuccess={(email) => {
                setUserEmail(email);
                setStep('success');
              }}
            />
          )}
          {step === 'success' && (
            <SuccessStep email={userEmail} yearSaved={calcData?.yearSaved || 0} />
          )}
        </div>
      </div>
    </div>
  );
}
