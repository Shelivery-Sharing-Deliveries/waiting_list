'use client';

import { useEffect, useRef, useState } from 'react';

const avatarUrls = [
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
];

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

// Inline styles for step layers (no .step-layer CSS dependency)
function stepStyle(active: boolean): React.CSSProperties {
  return {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    opacity: active ? 1 : 0,
    pointerEvents: active ? 'auto' : 'none',
    transition: 'opacity 0.4s ease-in-out',
  };
}

export default function AnimationBox() {
  const [step, setStep] = useState(1);

  // Refs for dynamic elements
  const typingRef = useRef<HTMLDivElement>(null);
  const confirmRef = useRef<HTMLDivElement>(null);
  const orderBtnRef = useRef<HTMLButtonElement>(null);
  const poolBarRef = useRef<HTMLDivElement>(null);
  const poolCountRef = useRef<HTMLSpanElement>(null);
  const avatarsRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  // Single circle element for step 4 – no separate movingRef needed
  const circleRef = useRef<HTMLDivElement>(null);
  const shopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Local variable – each effect run gets its own flag, fixing React Strict Mode
    let cancelled = false;

    async function runAnimation() {
      while (!cancelled) {
        // ── STEP 1: ORDER ──
        if (cancelled) return;
        setStep(1);

        const urlText = 'https://migros.ch/cart/7821';
        if (typingRef.current) typingRef.current.textContent = '';
        if (confirmRef.current) confirmRef.current.style.opacity = '0';
        if (orderBtnRef.current) {
          orderBtnRef.current.style.opacity = '0.5';
          orderBtnRef.current.style.cursor = 'default';
        }

        for (const char of urlText) {
          if (cancelled) return;
          if (typingRef.current) typingRef.current.textContent += char;
          await sleep(30);
        }
        if (cancelled) return;
        await sleep(300);

        if (orderBtnRef.current) {
          orderBtnRef.current.style.opacity = '1';
          orderBtnRef.current.style.cursor = 'pointer';
        }
        await sleep(300);
        if (cancelled) return;

        if (orderBtnRef.current) {
          orderBtnRef.current.style.transform = 'scale(0.95)';
          orderBtnRef.current.style.filter = 'brightness(0.9)';
        }
        await sleep(200);
        if (cancelled) return;
        if (orderBtnRef.current) {
          orderBtnRef.current.style.transform = '';
          orderBtnRef.current.style.filter = '';
        }
        if (confirmRef.current) confirmRef.current.style.opacity = '1';
        await sleep(800);
        if (cancelled) return;

        // ── STEP 2: POOL ──
        setStep(2);
        if (poolBarRef.current) poolBarRef.current.style.width = '0%';
        if (poolCountRef.current) poolCountRef.current.textContent = '0/3';
        if (avatarsRef.current) avatarsRef.current.innerHTML = '';

        for (let i = 1; i <= 3; i++) {
          if (cancelled) return;
          await sleep(600);
          if (poolBarRef.current) poolBarRef.current.style.width = `${(i / 3) * 100}%`;
          if (poolCountRef.current) poolCountRef.current.textContent = `${i}/3`;
          if (avatarsRef.current) {
            const img = document.createElement('img');
            img.src = avatarUrls[i - 1];
            img.alt = 'Neighbor';
            img.style.cssText =
              'width:32px;height:32px;border-radius:50%;border:2px solid white;box-shadow:0 1px 2px rgba(0,0,0,0.1);object-fit:cover;transform:scale(0);opacity:0;transition:transform 0.5s,opacity 0.5s;margin-left:-8px;';
            avatarsRef.current.appendChild(img);
            requestAnimationFrame(() => {
              img.style.transform = 'scale(1)';
              img.style.opacity = '1';
            });
          }
        }
        await sleep(1000);
        if (cancelled) return;

        // ── STEP 3: CHAT ──
        setStep(3);
        if (chatRef.current) chatRef.current.innerHTML = '';

        const messages = [
          { text: "Joining! I need this product from Migros", side: 'left' },
          { text: "My cart is here ! Let's have it delivered.", side: 'right' },
          { text: "Order locked. Let's go!", side: 'left' },
        ];

        for (const msg of messages) {
          if (cancelled) return;
          await sleep(800);
          if (chatRef.current) {
            const row = document.createElement('div');
            row.style.display = 'flex';
            row.style.justifyContent = msg.side === 'right' ? 'flex-end' : 'flex-start';

            const bubble = document.createElement('div');
            bubble.textContent = msg.text;
            bubble.style.cssText = `
              padding: 10px 12px;
              font-size: 11px;
              font-weight: 500;
              max-width: 80%;
              background: ${msg.side === 'right' ? 'var(--color-primary)' : 'var(--color-white)'};
              color: ${msg.side === 'right' ? 'var(--color-on-primary)' : 'var(--color-text-main)'};
              border: ${msg.side === 'right' ? 'none' : '1px solid var(--color-border-subtle)'};
              border-radius: ${msg.side === 'right' ? '16px 0 16px 16px' : '0 16px 16px 16px'};
              box-shadow: 0 1px 2px rgba(var(--color-black-rgb),0.05);
            `;
            row.appendChild(bubble);
            chatRef.current.appendChild(row);
          }
        }
        await sleep(1000);
        if (cancelled) return;

        // ── STEP 4: MAP ──
        setStep(4);

        // Reset dots
        if (dotsRef.current) {
          dotsRef.current.innerHTML = '';
          dotsRef.current.style.opacity = '1';
        }

        // Reset circle: snap to center, hidden, no transition
        if (circleRef.current) {
          circleRef.current.style.transition = 'none';
          circleRef.current.style.transform = 'translate(-50%, -50%) scale(0)';
          circleRef.current.style.opacity = '0';
        }

        // Small settle delay so React/DOM finishes step transition
        await sleep(50);
        if (cancelled) return;

        // Show avatar dots one by one
        const positions = [
          { t: '25%', l: '30%' },
          { t: '65%', l: '35%' },
          { t: '45%', l: '65%' },
        ];

        for (let i = 0; i < positions.length; i++) {
          if (cancelled) return;
          await sleep(300);
          if (dotsRef.current) {
            const dot = document.createElement('img');
            dot.src = avatarUrls[i];
            dot.alt = '';
            dot.style.cssText = `
              position: absolute;
              width: 24px; height: 24px;
              object-fit: cover;
              border-radius: 50%;
              border: 2px solid var(--color-white);
              box-shadow: 0 2px 4px rgba(var(--color-black-rgb),0.15);
              top: ${positions[i].t};
              left: ${positions[i].l};
              animation: dotPulse 0.4s ease-out forwards;
            `;
            dotsRef.current.appendChild(dot);
          }
        }

        await sleep(400);
        if (cancelled) return;

        // Pop the circle in — spring easing
        if (circleRef.current) {
          circleRef.current.style.transition =
            'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease';
          circleRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
          circleRef.current.style.opacity = '1';
        }

        await sleep(800);
        if (cancelled) return;

        // Fade dots out
        if (dotsRef.current) dotsRef.current.style.opacity = '0';

        await sleep(300);
        if (cancelled) return;

        // Move the circle TO the shop using exact screen coordinates
        if (circleRef.current && shopRef.current) {
          const circleEl = circleRef.current;
          const shopEl = shopRef.current;

          const circleRect = circleEl.getBoundingClientRect();
          const shopRect = shopEl.getBoundingClientRect();

          // Offset from circle center → shop center (screen coords)
          const dx =
            shopRect.left + shopRect.width / 2 - (circleRect.left + circleRect.width / 2);
          const dy =
            shopRect.top + shopRect.height / 2 - (circleRect.top + circleRect.height / 2);

          // Translate adds on top of the existing -50% centering offset
          circleEl.style.transition =
            'transform 1.2s cubic-bezier(0.45, 0, 0.55, 1), opacity 0.9s ease';
          circleEl.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0)`;
          circleEl.style.opacity = '0';
        }

        await sleep(1500);
        if (cancelled) return;
      }
    }

    runAnimation();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className="relative w-full bg-white rounded-2xl border border-border-subtle shadow-lg overflow-hidden"
      style={{ height: '220px' }}
    >
      {/* STEP 1: ORDER */}
      <div style={stepStyle(step === 1)}>
        <div style={{ width: '100%', maxWidth: '320px' }}>
          {/* Cart link box */}
          <div
            style={{
              background: 'var(--color-surface-muted)',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid var(--color-border-subtle)',
              boxShadow: '0 1px 2px rgba(var(--color-black-rgb),0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
            }}
          >
            <span className="material-symbols-outlined" style={{ color: 'var(--color-text-muted)' }}>link</span>
            <div style={{ textAlign: 'left', overflow: 'hidden', flexGrow: 1 }}>
              <div style={{ fontSize: '10px', color: 'var(--color-text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Paste cart link
              </div>
              <div
                ref={typingRef}
                style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-main)' }}
                className="typing-text"
              >
                https://migros.ch/cart/7821
              </div>
            </div>
          </div>

          {/* Order button */}
          <button
            ref={orderBtnRef}
            style={{
              width: '100%',
              padding: '10px 0',
              background: 'var(--color-primary)',
              color: 'var(--color-on-primary)',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 6px -1px rgba(var(--color-black-rgb),0.1)',
              marginBottom: '16px',
              transition: 'transform 0.15s, filter 0.15s',
            }}
          >
            Order
          </button>

          {/* Confirm */}
          <div
            ref={confirmRef}
            style={{ textAlign: 'center', opacity: 1, transition: 'opacity 0.3s' }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '9999px',
                background: 'rgba(var(--color-secondary-rgb),0.1)',
                color: 'var(--color-secondary)',
                fontSize: '12px',
                fontWeight: 700,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: '16px' }}
              >
                check_circle
              </span>
              Cart Imported
            </span>
          </div>
        </div>
      </div>

      {/* STEP 2: POOL */}
      <div style={{ ...stepStyle(step === 2), background: 'var(--color-accent-soft)' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '360px',
            background: 'var(--color-white)',
            padding: '20px',
            borderRadius: '16px',
            border: '1px solid var(--color-border-subtle)',
            boxShadow: '0 4px 6px -1px rgba(var(--color-black-rgb),0.1)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px' }}>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--color-text-main)', fontSize: '14px' }}>Delivery Pool</div>
              <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Waiting for neighbors...</div>
            </div>
            <span ref={poolCountRef} style={{ color: 'var(--color-primary)', fontWeight: 800, fontSize: '16px' }}>
              3/3
            </span>
          </div>
          <div
            style={{
              height: '10px',
              width: '100%',
              background: 'var(--color-surface-container)',
              borderRadius: '9999px',
              overflow: 'hidden',
              marginBottom: '16px',
            }}
          >
            <div
              ref={poolBarRef}
              style={{
                height: '100%',
                width: '100%',
                background: 'var(--color-primary)',
                transition: 'width 0.5s ease',
              }}
            />
          </div>
          <div
            ref={avatarsRef}
            style={{ display: 'flex', justifyContent: 'center', height: '32px' }}
          >
            {avatarUrls.map((url, i) => (
              <img
                key={i}
                src={url}
                alt="Neighbor"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '2px solid var(--color-white)',
                  objectFit: 'cover',
                  marginLeft: i === 0 ? 0 : '-8px',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* STEP 3: CHAT */}
      <div style={{ ...stepStyle(step === 3), background: 'var(--color-surface)', flexDirection: 'column' }}>
        <div
          ref={chatRef}
          style={{ width: '100%', maxWidth: '320px', display: 'flex', flexDirection: 'column', gap: '12px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{ padding: '10px 12px', fontSize: '11px', fontWeight: 500, maxWidth: '80%', background: 'var(--color-white)', color: 'var(--color-text-main)', border: '1px solid var(--color-border-subtle)', borderRadius: '0 16px 16px 16px', boxShadow: '0 1px 2px rgba(var(--color-black-rgb),0.05)' }}>
              Joining! I need this product from Migros.
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ padding: '10px 12px', fontSize: '11px', fontWeight: 500, maxWidth: '80%', background: 'var(--color-primary)', color: 'var(--color-on-primary)', borderRadius: '16px 0 16px 16px' }}>
              My cart is here ! Let's have it delivered.
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{ padding: '10px 12px', fontSize: '11px', fontWeight: 500, maxWidth: '80%', background: 'var(--color-white)', color: 'var(--color-text-main)', border: '1px solid var(--color-border-subtle)', borderRadius: '0 16px 16px 16px', boxShadow: '0 1px 2px rgba(var(--color-black-rgb),0.05)' }}>
              Order locked. Let's go!
            </div>
          </div>
        </div>
      </div>

      {/* STEP 4: MAP */}
      <div style={{ ...stepStyle(step === 4), padding: 0, overflow: 'hidden' }}>
        {/* Map background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida/ADBb0uierMkk4Xl0EFRfFPSps6K4A7erKoFYSHp-GZCNTKe2BwKHhWJY_YX7quuNFzDA-oXUKNGmS70AvP_9aM47A-6DAUQ_-j28B3e2JQQbRbfDU9fDicBe3qf559dV26TakEoy-nMXnCrF81ORkBO-paK3TcPe42Kv3uvBFHZEP8JG6Qaoe0fAtdEWps-XRGhFRYP9-KTk2paaxtq8pOOAZ06-7M8iQioI-uNeKnf1M4uWJ0lBZKNtCE9b1W6W')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Map elements layer */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* Avatar dots container */}
          <div
            ref={dotsRef}
            style={{ position: 'absolute', inset: 0, opacity: 0, transition: 'opacity 0.3s' }}
          />

          {/* Single big circle – centered via top/left 50% + translate(-50%,-50%) */}
          <div
            ref={circleRef}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '160px',
              height: '160px',
              background: 'rgba(var(--color-primary-rgb),0.35)',
              border: '3px solid rgba(var(--color-primary-rgb),0.55)',
              borderRadius: '50%',
              /* start hidden; JS will drive all transitions */
              transform: 'translate(-50%, -50%) scale(0)',
              opacity: 0,
            }}
          />

          {/* Shop icon */}
          <div
            ref={shopRef}
            style={{
              position: 'absolute',
              top: '25%',
              right: '25%',
              transform: 'translate(50%, -50%)',
              background: 'var(--color-white)',
              padding: '8px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px -1px rgba(var(--color-black-rgb),0.1)',
              border: '1px solid var(--color-border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '24px' }}>
              storefront
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}