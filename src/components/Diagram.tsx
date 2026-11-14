import React from 'react';
import { motion } from 'framer-motion';
import { Equation } from './Equation';

export interface DiagramNodeProps {
  label: React.ReactNode;
  sublabel?: React.ReactNode;
  type?: 'frozen' | 'trainable' | 'input' | 'output' | 'loss' | 'neutral';
  icon?: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

// Helper to automatically render LaTeX math if present in strings
const renderMathOrText = (content: React.ReactNode) => {
  if (typeof content !== 'string') return content;
  if (content.includes('\\') || content.includes('_{') || content.includes('^{')) {
    return <Equation math={content} block={false} className="font-semibold" />;
  }
  return content;
};

export const DiagramNode: React.FC<DiagramNodeProps> = ({
  label,
  sublabel,
  type = 'neutral',
  icon,
  isActive = false,
  className = '',
}) => {
  const typeStyles = {
    frozen: 'bg-slate-200/90 dark:bg-slate-800/90 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-sm',
    trainable: 'bg-blue-50/90 dark:bg-blue-950/70 border-blue-400 dark:border-blue-500 text-blue-800 dark:text-blue-200 shadow-md ring-1 ring-blue-500/30',
    input: 'bg-gray-100 dark:bg-gray-800/90 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 shadow-sm',
    output: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-600 text-emerald-800 dark:text-emerald-200 shadow-sm',
    loss: 'bg-cyan-50 dark:bg-cyan-950/70 border-cyan-400 dark:border-cyan-600 text-cyan-900 dark:text-cyan-200 shadow-sm',
    neutral: 'bg-theme-card border-theme-border text-theme-primary shadow-sm',
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
      className={`relative flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-xl border text-center transition-all ${
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
      <span className="text-xs font-bold leading-tight">{renderMathOrText(label)}</span>
      {sublabel && (
        <span className="text-[11px] opacity-80 mt-0.5 font-medium leading-tight">
          {renderMathOrText(sublabel)}
        </span>
      )}
    </motion.div>
  );
};

export const ArrowConnector: React.FC<{
  label?: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  responsive?: 'sm' | 'md' | 'lg' | false;
  variant?: 'solid' | 'dashed' | 'feedback';
  length?: 'short' | 'medium' | 'long';
  className?: string;
}> = ({
  label,
  orientation = 'horizontal',
  responsive = false,
  variant = 'solid',
  length = 'medium',
  className = '',
}) => {
  const widthClass = {
    short: 'w-12 sm:w-16',
    medium: 'w-16 sm:w-28',
    long: 'w-24 sm:w-36',
  }[length];

  const heightClass = {
    short: 'h-9',
    medium: 'h-12',
    long: 'h-16',
  }[length];

  const renderHorizontal = (extraClass = '') => (
    <div className={`flex flex-col items-center justify-center px-1 select-none flex-shrink-0 ${extraClass} ${className}`}>
      {label && (
        <span className="text-[10px] font-bold text-theme-accent bg-theme-highlight px-2 py-0.5 rounded-full shadow-xs mb-1 whitespace-nowrap border border-theme-accent/30 z-10 flex items-center justify-center">
          {renderMathOrText(label)}
        </span>
      )}
      <div className={`relative flex items-center justify-center ${widthClass} h-6`}>
        <svg className="w-full h-6 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 24">
          <defs>
            <marker
              id="arrowhead-flow"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
            >
              <path d="M 0 0 L 8 4 L 0 8 z" fill="var(--color-accent, #2563EB)" />
            </marker>
          </defs>
          <line
            x1="2"
            y1="12"
            x2="90"
            y2="12"
            stroke="var(--color-accent, #2563EB)"
            strokeWidth="2.5"
            strokeDasharray={variant === 'dashed' ? '5,4' : undefined}
            className={variant === 'feedback' ? 'animate-pulse' : ''}
            markerEnd="url(#arrowhead-flow)"
          />
        </svg>
      </div>
    </div>
  );

  const renderVertical = (extraClass = '') => (
    <div className={`flex flex-row items-center justify-center py-0.5 select-none flex-shrink-0 ${extraClass} ${className}`}>
      <div className={`relative flex flex-col items-center justify-center ${heightClass} w-6`}>
        <svg className="w-6 h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 24 100">
          <defs>
            <marker
              id="arrowhead-flow-v"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
            >
              <path d="M 0 0 L 8 4 L 0 8 z" fill="var(--color-accent, #2563EB)" />
            </marker>
          </defs>
          <line
            x1="12"
            y1="2"
            x2="12"
            y2="90"
            stroke="var(--color-accent, #2563EB)"
            strokeWidth="2.5"
            strokeDasharray={variant === 'dashed' ? '5,4' : undefined}
            className={variant === 'feedback' ? 'animate-pulse' : ''}
            markerEnd="url(#arrowhead-flow-v)"
          />
        </svg>
      </div>
      {label && (
        <span className="text-[10px] font-bold text-theme-accent bg-theme-highlight px-2 py-0.5 rounded-full shadow-xs ml-1.5 whitespace-nowrap border border-theme-accent/30 z-10 flex items-center justify-center">
          {renderMathOrText(label)}
        </span>
      )}
    </div>
  );

  if (responsive) {
    const showH = responsive === 'sm' ? 'hidden sm:flex' : responsive === 'md' ? 'hidden md:flex' : 'hidden lg:flex';
    const showV = responsive === 'sm' ? 'flex sm:hidden' : responsive === 'md' ? 'flex md:hidden' : 'flex lg:hidden';
    return (
      <>
        {renderVertical(showV)}
        {renderHorizontal(showH)}
      </>
    );
  }

  return orientation === 'horizontal' ? renderHorizontal() : renderVertical();
};
