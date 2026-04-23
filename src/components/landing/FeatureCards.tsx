import React from 'react';
import { FeatureCardProps } from '@/types';

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, variant = 'default' }) => {
  const isAccent = variant === 'accent';
  
  return (
    <div className={`p-4 rounded-2xl border shadow-sm flex items-start gap-4 ${
      isAccent ? 'bg-accent-soft border-accent-soft' : 'bg-white border-border-subtle'
    }`}>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
        isAccent ? 'bg-primary' : 'bg-white border border-border-subtle'
      }`}>
        <span className={`material-symbols-outlined ${isAccent ? 'text-white' : 'text-primary'}`} data-icon={icon}>{icon}</span>
      </div>
      <div>
        <h3 className={`text-sm font-bold mb-1 ${isAccent ? 'text-primary' : 'text-text-main'}`}>{title}</h3>
        <p className={`text-xs leading-relaxed ${isAccent ? 'text-primary/80' : 'text-text-muted'}`}>{description}</p>
      </div>
    </div>
  );
};

const FeatureCards: React.FC = () => {
  const features = [
    {
      icon: 'groups',
      title: 'Order Together',
      description: 'Shelivery syncs orders from nearby neighbors, turning individual trips into community pools.',
    },
    {
      icon: 'savings',
      title: 'Save up to 70%',
      description: 'Split delivery fees and service charges. Most users reach zero delivery cost within 5 minutes of posting.',
    },
    {
      icon: 'eco',
      title: 'Eco-Friendly',
      description: 'Fewer delivery bikes on the road means less congestion and a smaller carbon footprint for every meal.',
      variant: 'accent' as const,
    },
  ];

  return (
    <section className="bg-surface-muted py-section-gap">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-background">Better for you, better for the city.</h2>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
