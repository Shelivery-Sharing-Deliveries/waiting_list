import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-section-gap grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Content Left */}
      <div className="space-y-stack-md text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-surface-container)] rounded-full text-[var(--color-primary)] font-label-bold text-micro-copy">
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
          Starting in Lausanne
        </div>
        <h1 className="font-headline-xl text-headline-xl text-[var(--color-on-background)] lg:text-5xl lg:leading-[1.1]">
          Delivery costs, <span className="text-[var(--color-primary)]">Shared.</span>
        </h1>
        <p className="text-text-muted text-body-md max-w-md mx-auto lg:mx-0">
          No more minimum order limit, and no more delivery fee. Join forces with your neighbors to unlock premium delivery for free.
        </p>
      </div>
      
      {/* Central Animation Box (Visual Representation) */}
      <div className="relative max-w-lg mx-auto w-full">
        <div className="bg-white rounded-3xl p-6 border border-border-subtle ambient-shadow">
          {/* Link Pasting UI */}
          <div className="mb-6 space-y-3">
            <div className="flex items-center gap-3 p-3 bg-[var(--color-surface-muted)] rounded-xl border border-[var(--color-border-subtle)]">
              <span className="material-symbols-outlined text-[var(--color-primary)]" data-icon="link">link</span>
              <div className="flex-1 text-micro-copy text-[var(--color-text-muted)] truncate">ubereats.com/store/mcdonalds-lausanne...</div>
              <button className="bg-[var(--color-primary)] text-[var(--color-white)] px-4 py-1.5 rounded-lg text-micro-copy font-label-bold">Order</button>
            </div>
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-secondary)] text-sm" data-icon="check_circle" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-micro-copy font-label-bold">Cart Imported</span>
              </div>
              <div className="text-micro-copy text-[var(--color-text-muted)]">Processing...</div>
            </div>
          </div>
          
          {/* Community Pool UI */}
          <div className="bg-[var(--color-accent-soft)] p-4 rounded-2xl mb-6">
            <div className="flex justify-between items-center mb-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-[var(--color-white)] bg-[var(--color-surface-container-high)] overflow-hidden">
                  <img alt="User" data-alt="Portrait of a young professional smiling softly with a clean background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPv0jWYW5hP6VyF5gLaaK0X25R7FQ5KuMBwAisfqU-HG9nsSaAE-FH4soySoq2al9bxraa26iWC9DRDLqdV-2vcLME8mRKjxb7ejTMp9W8G9J2HPIpAAFppWYq3VO8BZgJ85X6jf8dIi-AX9-rsWDaEdW92L1Znd4Qv0kZqaO9l8eqozMi-udDhks70XLBIRsy0Wdz17zIlnAKazjZsCl7vq51En3Q6pTBu3qHmrAybcL4wOpZb9ktubFJI23C6SsJahRxoMe2jIp1" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[var(--color-white)] bg-[var(--color-surface-container-high)] overflow-hidden">
                  <img alt="User" data-alt="Close-up headshot of a woman with a warm expression in soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC__1r6pQspEshAkwjoKz_g1dj3wV4UuaW44ckHrDCkVudrUy2PYGhQZmHLZpfAUfxLZ538SQyLqjT0RetUSMbq1oO8sA8DZJ4b-nrxBo-D_EufvJiZ1aj7kCQlq7OX3pmeOI_1_NjUOakJA2iA7b1Wam3Lb-_ZQYOXsvJkJl9ogh_hD40QxY52Z8NcoBgLI6M9m7ViigRkJM9x8TPmuFyC1X_iFnAmdZ52bz6z1u1V_Q86rrUMGnMyZu5dUAI0tQffU5ULcRmrPG4X" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[var(--color-white)] bg-[var(--color-primary)] flex items-center justify-center text-[10px] text-[var(--color-white)] font-bold">YOU</div>
              </div>
              <span className="text-micro-copy font-label-bold text-[var(--color-primary)]">Pool progress: 3/3</span>
            </div>
            <div className="w-full h-2 bg-[var(--color-white)]/50 rounded-full overflow-hidden">
              <div className="w-full h-full bg-[var(--color-primary)]"></div>
            </div>
          </div>
          
          {/* Chat Visualization */}
          <div className="space-y-3 mb-6">
            <div className="flex gap-2">
              <div className="bg-[var(--color-surface-muted)] p-2 rounded-2xl rounded-tl-none max-w-[80%]">
                <p className="text-micro-copy">Order locked! We're saving $12 on delivery. 🚀</p>
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <div className="bg-[var(--color-primary)] text-[var(--color-white)] p-2 rounded-2xl rounded-tr-none max-w-[80%]">
                <p className="text-micro-copy">Amazing, let's go!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
