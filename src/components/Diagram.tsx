import React from 'react';
import { motion } from 'framer-motion';

export interface DiagramNodeProps {
  label: string;
  sublabel?: string;
  type?: 'frozen' | 'trainable' | 'input' | 'output' | 'loss' | 'neutral';
  icon?: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

export const DiagramNode: React.FC<DiagramNodeProps> = ({
  label,
  sublabel,
  type = 'neutral',
  icon,
  isActive = false,
  className = '',
}) => {
  const typeStyles = {
    frozen: 'bg-slate-200/80 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300',
    trainable: 'bg-blue-50 dark:bg-blue-950/60 border-blue-400 dark:border-blue-500 text-blue-700 dark:text-blue-300 shadow-sm ring-1 ring-blue-500/20',
    input: 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200',
    output: 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-400 dark:border-emerald-600 text-emerald-700 dark:text-emerald-300',
    loss: 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-400 dark:border-cyan-600 text-cyan-800 dark:text-cyan-300',
    neutral: 'bg-theme-card border-theme-border text-theme-primary',
  };

  const badgeLabels = {
    frozen: 'Frozen',
    trainable: 'Trainable',
    input: 'Input',
    output: 'Output',
    loss: 'Loss Oracle',
    neutral: '',
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`relative flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
        typeStyles[type]
      } ${isActive ? 'ring-2 ring-theme-accent shadow-md' : ''} ${className}`}
    >
      {badgeLabels[type] && (
        <span
          className={`absolute -top-2.5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border shadow-xs ${
            type === 'trainable'
              ? 'bg-blue-600 text-white border-blue-600'
              : type === 'frozen'
              ? 'bg-slate-500 text-white border-slate-500'
              : 'bg-cyan-600 text-white border-cyan-600'
          }`}
        >
          {badgeLabels[type]}
        </span>
      )}
      {icon && <div className="mb-1.5 opacity-90">{icon}</div>}
      <span className="text-xs font-bold leading-tight">{label}</span>
      {sublabel && (
        <span className="text-[11px] opacity-75 mt-0.5 font-medium leading-tight">
          {sublabel}
        </span>
      )}
    </motion.div>
  );
};

export const ArrowConnector: React.FC<{
  label?: string;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'feedback';
  className?: string;
}> = ({ label, orientation = 'horizontal', variant = 'solid', className = '' }) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div
      className={`flex items-center justify-center relative select-none ${
        isHorizontal ? 'flex-col px-2' : 'flex-row py-2'
      } ${className}`}
    >
      {label && (
        <span
          className={`text-[10px] font-semibold text-theme-accent bg-theme-highlight/80 px-1.5 py-0.5 rounded shadow-xs mb-0.5 z-10 whitespace-nowrap`}
        >
          {label}
        </span>
      )}
      <div
        className={`flex items-center justify-center ${
          isHorizontal ? 'w-10 h-4' : 'w-4 h-10 flex-col'
        }`}
      >
        <div
          className={`${
            isHorizontal ? 'h-0.5 w-full' : 'w-0.5 h-full'
          } ${
            variant === 'dashed'
              ? 'border-t-2 border-dashed border-theme-accent'
              : variant === 'feedback'
              ? 'bg-blue-600 animate-pulse'
              : 'bg-theme-muted/50'
          }`}
        />
        <div
          className={`${
            isHorizontal
              ? 'border-l-4 border-l-theme-accent border-y-4 border-y-transparent ml-[-2px]'
              : 'border-t-4 border-t-theme-accent border-x-4 border-x-transparent mt-[-2px]'
          }`}
        />
      </div>
    </div>
  );
};

