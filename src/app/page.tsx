import AnimationBox from '@/components/landing/AnimationBox';
import EmailForm from '@/components/landing/EmailForm';

export default function Home() {
  return (
    <>
      {/* ── MOBILE LAYOUT (hidden on lg+) ── */}
      <div className="lg:hidden px-5 pt-6 pb-8 max-w-[768px] mx-auto w-full">
        {/* Compact Hero */}
        <section className="text-center space-y-3 mb-6">
          <h1
            className="text-3xl font-extrabold text-text-main tracking-tight leading-tight"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Delivery costs, Shared.
          </h1>
          <p className="text-sm text-text-muted max-w-[480px] mx-auto leading-relaxed">
            No more minimum order limit, and no more delivery fee.
          </p>
          {/* Email + button */}
          <div className="max-w-md mx-auto pt-2">
            <EmailForm />
          </div>
          <div className="flex justify-center items-center gap-2 pt-1">
            <span className="text-xs text-text-muted flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              Starting in Lausanne
            </span>
          </div>
        </section>

        {/* Animation Box */}
        <AnimationBox />

        {/* Feature Cards – 1 column */}
        <div className="grid grid-cols-1 gap-3 mt-5">
          <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-border-subtle shadow-sm">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-border-subtle shadow-sm shrink-0">
              <span className="material-symbols-outlined text-primary">group_add</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-text-main">Order Together</h3>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                Browse local spots, see who&apos;s ordering nearby, and hop on their delivery run instantly.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-border-subtle shadow-sm">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-border-subtle shadow-sm shrink-0">
              <span className="material-symbols-outlined text-primary">savings</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-text-main">Save up to 70%</h3>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                The delivery fee is split equally among everyone in the group. One stop, minimal cost.
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-4 p-4 rounded-2xl shadow-sm"
            style={{ background: '#EFF6FF', border: '1px solid #EFF6FF' }}
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl shadow-sm shrink-0 bg-primary"
            >
              <span className="material-symbols-outlined text-white">eco</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-primary">Eco-Friendly</h3>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: 'rgba(37,99,235,0.8)' }}>
                Reducing Lausanne&apos;s traffic and carbon footprint by consolidating multiple deliveries into one.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT (hidden below lg) ── */}
      <div className="hidden lg:block">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 gap-12 items-center">
          {/* Content Left */}
          <div className="space-y-6 text-left">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-primary text-xs font-semibold"
              style={{ fontFamily: '"Inter", sans-serif', background: '#ededf9' }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block"></span>
              Starting in Lausanne
            </div>
            <h1
              className="text-on-background"
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '36px',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                fontWeight: '800',
              }}
            >
              Delivery costs, <span className="text-primary">Shared.</span>
            </h1>
            <p
              className="text-text-muted max-w-md"
              style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', lineHeight: '1.6' }}
            >
              No more minimum order limit, and no more delivery fee. Join forces with your neighbors to unlock premium delivery for free.
            </p>
            <EmailForm />
          </div>

          {/* Right: Animated Box */}
          <div className="relative max-w-lg mx-auto w-full">
            {/* Taller on desktop */}
            <AnimationBox />
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="py-20" style={{ background: '#F9FAFB' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-on-background"
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '28px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.01em',
                  fontWeight: '700',
                }}
              >
                Better for you, better for the city.
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {/* Order Together */}
              <div
                className="p-8 rounded-3xl border border-border-subtle bg-white flex flex-col items-center text-center"
                style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.06)' }}
              >
                <div className="w-14 h-14 bg-white border border-border-subtle rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">groups</span>
                </div>
                <h3 className="text-lg mb-3 text-text-main" style={{ fontFamily: '"Inter", sans-serif', fontWeight: '600' }}>
                  Order Together
                </h3>
                <p className="text-sm text-text-muted" style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.5' }}>
                  Shelivery syncs orders from nearby neighbors, turning individual trips into community pools.
                </p>
              </div>

              {/* Save up to 70% */}
              <div
                className="p-8 rounded-3xl border border-border-subtle bg-white flex flex-col items-center text-center"
                style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.06)' }}
              >
                <div className="w-14 h-14 bg-white border border-border-subtle rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">savings</span>
                </div>
                <h3 className="text-lg mb-3 text-text-main" style={{ fontFamily: '"Inter", sans-serif', fontWeight: '600' }}>
                  Save up to 70%
                </h3>
                <p className="text-sm text-text-muted" style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.5' }}>
                  Split delivery fees and service charges. Most users reach zero delivery cost within 5 minutes of posting.
                </p>
              </div>

              {/* Eco-Friendly */}
              <div
                className="p-8 rounded-3xl border border-accent-soft bg-accent-soft flex flex-col items-center text-center"
                style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.06)' }}
              >
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white text-3xl">eco</span>
                </div>
                <h3 className="text-lg mb-3 text-primary" style={{ fontFamily: '"Inter", sans-serif', fontWeight: '600' }}>
                  Eco-Friendly
                </h3>
                <p className="text-sm text-primary/80" style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.5' }}>
                  Fewer delivery bikes on the road means less congestion and a smaller carbon footprint for every meal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div
            className="p-12 text-white relative overflow-hidden"
            style={{ background: '#2563eb', borderRadius: '2rem' }}
          >
            <div
              className="absolute top-0 right-0 rounded-full blur-3xl"
              style={{
                width: '256px',
                height: '256px',
                background: 'rgba(255,255,255,0.1)',
                transform: 'translate(50%, -50%)',
              }}
            ></div>
            <div className="relative z-10">
              <h2
                className="text-white mb-4"
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '36px',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  fontWeight: '800',
                }}
              >
                Ready to stop paying for delivery?
              </h2>
              <p
                className="mb-8 max-w-md mx-auto"
                style={{ fontFamily: '"Inter", sans-serif', color: '#dbe1ff' }}
              >
                Be the first to know when we launch in your neighborhood. Limited slots for beta testers.
              </p>
              <div className="flex justify-center">
                <EmailForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}