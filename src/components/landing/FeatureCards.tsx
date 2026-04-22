import React from 'react';
import { FeatureCardProps } from '@/types';

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, variant = 'default' }) => {
  const isAccent = variant === 'accent';
  
  return (
    <div className={`p-8 rounded-3xl border border-border-subtle ambient-shadow flex flex-col items-center text-center ${
      isAccent ? 'bg-accent-soft' : 'bg-white'
    }`}>
      <div className={`w-14 h-14 ${
        isAccent ? 'bg-primary' : 'bg-accent-soft'
      } rounded-2xl flex items-center justify-center mb-6`}>
        <span className={`material-symbols-outlined ${
          isAccent ? 'text-white' : 'text-primary'
        } text-3xl`} data-icon={icon}>{icon}</span>
      </div>
      <h3 className="font-label-bold text-lg mb-3">{title}</h3>
      <p className="text-body-sm text-text-muted">{description}</p>
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
    },
  ];

  return (
    <section className="bg-surface-muted py-section-gap">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-background">Better for you, better for the city.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
