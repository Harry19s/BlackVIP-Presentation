import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  className = '',
}) => {
  const percentage = Math.min(100, Math.max(0, ((current - 1) / (total - 1)) * 100));

  return (
    <div className={`w-full bg-slate-200/50 dark:bg-slate-800/80 h-1 overflow-hidden ${className}`}>
      <div
        className="bg-gradient-to-r from-theme-accent via-theme-secondaryAccent to-theme-accent h-full transition-all duration-300 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

