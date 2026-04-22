import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="material-symbols-outlined text-primary" data-icon="delivery_dining">
        delivery_dining
      </span>
      <span className={`font-extrabold tracking-tighter text-gray-900 ${sizeClasses[size]}`}>
        Shelivery
      </span>
    </div>
  );
};

export default Logo;
