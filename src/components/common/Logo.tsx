import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'; // Keep size prop for potential future use or if it affects parent components
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const imageSize = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 40, height: 40 },
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const { width, height } = imageSize[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/icons/shelivery-logo.svg"
        alt="Shelivery Logo"
        width={width}
        height={height}
        className="object-contain"
      />
      <span className={`font-headline-xl font-extrabold tracking-tighter text-text-main ${textSizeClasses[size]}`}>
        Shelivery
      </span>
    </div>
  );
};

export default Logo;
