import React, { useMemo } from 'react';
import katex from 'katex';

interface EquationProps {
  math: string;
  block?: boolean;
  className?: string;
  highlight?: boolean;
}

export const Equation: React.FC<EquationProps> = ({
  math,
  block = true,
  className = '',
  highlight = false,
}) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
      });
    } catch (e) {
      console.error('KaTeX error:', e);
      return math;
    }
  }, [math, block]);

  if (block) {
    return (
      <div
        className={`my-3 px-4 py-2.5 rounded-lg transition-all duration-300 overflow-x-auto text-center ${
          highlight
            ? 'bg-theme-highlight/40 border border-theme-accent/40 shadow-sm text-theme-accent'
            : 'bg-theme-card border border-theme-border/60 text-theme-primary'
        } ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={`inline-block px-1.5 py-0.5 rounded text-theme-primary font-medium ${
        highlight ? 'bg-theme-highlight text-theme-accent font-semibold' : ''
      } ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

