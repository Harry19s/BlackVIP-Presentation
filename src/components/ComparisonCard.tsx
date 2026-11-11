import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ComparisonCardProps {
  title: string;
  badge?: string;
  badgeVariant?: 'accent' | 'secondary' | 'neutral' | 'success';
  icon?: LucideIcon;
  points: string[];
  footerNote?: string;
  isFocal?: boolean;
  className?: string;
}

export const ComparisonCard: React.FC<ComparisonCardProps> = ({
  title,
  badge,
  badgeVariant = 'accent',
  icon: Icon,
  points,
  footerNote,
  isFocal = false,
  className = '',
}) => {
  const badgeStyles = {
    accent: 'bg-theme-highlight text-theme-accent border-theme-accent/30',
    secondary: 'bg-cyan-50 dark:bg-cyan-950/40 text-theme-secondaryAccent border-theme-secondaryAccent/30',
    neutral: 'bg-slate-100 dark:bg-slate-800 text-theme-muted border-theme-border',
    success: 'bg-emerald-50 dark:bg-emerald-950/40 text-theme-success border-theme-success/30',
  };

  return (
    <div
      className={`flex flex-col p-5 rounded-xl border transition-all duration-300 shadow-slide-card ${
        isFocal
          ? 'bg-theme-card border-theme-accent shadow-slide-card-hover ring-1 ring-theme-accent/20'
          : 'bg-theme-card/60 hover:bg-theme-card border-theme-border'
      } ${className}`}
    >
      <div className="flex items-center justify-between gap-3 mb-3 pb-2 border-b border-theme-border/60">
        <div className="flex items-center gap-2.5">
          {Icon && (
            <div
              className={`p-2 rounded-lg ${
                isFocal
                  ? 'bg-theme-accent text-white'
                  : 'bg-theme-border/50 text-theme-secondary'
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
          )}
          <h3 className="font-semibold text-base text-theme-primary">{title}</h3>
        </div>
        {badge && (
          <span
            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${badgeStyles[badgeVariant]}`}
          >
            {badge}
          </span>
        )}
      </div>

      <ul className="flex-1 space-y-2 mb-2">
        {points.map((pt, idx) => (
          <li key={idx} className="flex items-start gap-2 text-xs text-theme-secondary leading-relaxed">
            <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
              isFocal ? 'bg-theme-accent' : 'bg-theme-muted'
            }`} />
            <span>{pt}</span>
          </li>
        ))}
      </ul>

      {footerNote && (
        <div className="mt-2 pt-2 border-t border-theme-border/40 text-xs font-medium text-theme-muted">
          {footerNote}
        </div>
      )}
    </div>
  );
};

