import React from 'react';

interface SlideCounterProps {
  current: number;
  total: number;
  className?: string;
}

export const SlideCounter: React.FC<SlideCounterProps> = ({
  current,
  total,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-1 font-mono text-xs font-semibold tracking-wider text-theme-muted ${className}`}>
      <span className="text-theme-accent font-bold text-sm">
        {String(current).padStart(2, '0')}
      </span>
      <span className="opacity-40">/</span>
      <span>{String(total).padStart(2, '0')}</span>
    </div>
  );
};

