'use client';

import AnimationBox from '@/components/landing/AnimationBox';
import EmailForm from '@/components/landing/EmailForm';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

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
            {t('hero.title')} <span className="text-primary">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-sm text-text-muted max-w-[480px] mx-auto leading-relaxed">
            {t('hero.subtitleShort')}
          </p>
          {/* Email + button */}
          <div className="max-w-md mx-auto pt-2">
            <EmailForm textColor="var(--color-text-muted)" />
          </div>
          <div className="flex justify-center items-center gap-2 pt-1">
            <span className="text-xs text-text-muted flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              {t('hero.badge')}
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
              <h3 className="text-sm font-bold text-text-main">
                {t('features.orderTogether.title')}
              </h3>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                {t('features.orderTogether.descriptionShort')}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-border-subtle shadow-sm">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-border-subtle shadow-sm shrink-0">
              <span className="material-symbols-outlined text-primary">savings</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-text-main">{t('features.save.title')}</h3>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                {t('features.save.descriptionShort')}
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-4 p-4 rounded-2xl shadow-sm"
            style={{ background: '#EFF6FF', border: '1px solid #EFF6FF' }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl shadow-sm shrink-0 bg-primary">
              <span className="material-symbols-outlined text-white">eco</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-primary">{t('features.eco.title')}</h3>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--color-primary)' }}>
                {t('features.eco.descriptionShort')}
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
              {t('hero.badge')}
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
              {t('hero.title')} <span className="text-primary">{t('hero.titleHighlight')}</span>
            </h1>
            <p
              className="text-text-muted max-w-md"
              style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', lineHeight: '1.6' }}
            >
              {t('hero.subtitle')}
            </p>
            <EmailForm />
          </div>

          {/* Right: Animated Box */}
          <div className="relative max-w-lg mx-auto w-full">
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
                {t('features.sectionTitle')}
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
                <h3
                  className="text-lg mb-3 text-text-main"
                  style={{ fontFamily: '"Inter", sans-serif', fontWeight: '600' }}
                >
                  {t('features.orderTogether.title')}
                </h3>
                <p
                  className="text-sm text-text-muted"
                  style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.5' }}
                >
                  {t('features.orderTogether.descriptionLong')}
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
                <h3
                  className="text-lg mb-3 text-text-main"
                  style={{ fontFamily: '"Inter", sans-serif', fontWeight: '600' }}
                >
                  {t('features.save.title')}
                </h3>
                <p
                  className="text-sm text-text-muted"
                  style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.5' }}
                >
                  {t('features.save.descriptionLong')}
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
                <h3
                  className="text-lg mb-3 text-primary"
                  style={{ fontFamily: '"Inter", sans-serif', fontWeight: '600' }}
                >
                  {t('features.eco.title')}
                </h3>
                <p
                  className="text-sm text-primary/80"
                  style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.5' }}
                >
                  {t('features.eco.descriptionLong')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div
            className="p-12 text-white relative overflow-hidden"
            style={{ background: 'var(--color-primary)', borderRadius: '2rem' }}
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
                {t('cta.title')}
              </h2>
              <p
                className="mb-8 max-w-md mx-auto"
                style={{ fontFamily: '"Inter", sans-serif', color: '#dbe1ff' }}
              >
                {t('cta.subtitle')}
              </p>
              <div className="flex justify-center">
                <EmailForm textColor="var(--color-on-primary-dim)" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}