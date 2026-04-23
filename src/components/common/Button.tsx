import React from 'react';
import { ButtonProps } from '@/types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'font-label-bold transition-all active:scale-95 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:brightness-110 border-t border-white/20',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-body-sm',
    lg: 'px-8 py-4 text-body-md'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white/30 border-t-[var(--color-on-primary)] rounded-full animate-spin mr-2"></div>
          Loading...
        </div>
      ) : children}
    </button>
  );
};

export default Button;
