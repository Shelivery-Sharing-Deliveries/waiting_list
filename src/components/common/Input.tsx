import React from 'react';
import { InputProps } from '@/types';

const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text-main mb-1">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-3 bg-surface-muted border 
          ${error ? 'border-error' : 'border-border-subtle'} 
          rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent 
          outline-none transition-all text-body-sm
          placeholder:text-text-muted/60
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  );
};

export default Input;
