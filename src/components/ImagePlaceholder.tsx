import React from 'react';
import { Image as ImageIcon, ExternalLink } from 'lucide-react';
import { PaperFigureConfig } from '../data/paperFigures';

interface ImagePlaceholderProps {
  figure?: PaperFigureConfig;
  title?: string;
  caption?: string;
  source?: string;
  aspectRatio?: string;
  src?: string | null;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  figure,
  title,
  caption,
  source,
  aspectRatio = '16 / 9',
  src,
  className = '',
}) => {
  const displayTitle = figure?.title || title || 'Original Paper Figure';
  const displayCaption = figure?.caption || caption || 'Original figure from the CVPR 2023 paper.';
  const displaySource = figure?.source || source || 'CVPR 2023 Paper';
  const displaySrc = figure?.src || src;
  const displayAspect = figure?.aspectRatio || aspectRatio;

  return (
    <div className={`flex flex-col border border-theme-border rounded-xl bg-theme-card overflow-hidden shadow-slide-card ${className}`}>
      <div
        className="w-full relative flex items-center justify-center bg-slate-900/5 dark:bg-slate-950/40 border-b border-theme-border/60"
        style={{ aspectRatio: displayAspect }}
      >
        {displaySrc ? (
          <img
            src={displaySrc}
            alt={displayTitle}
            className="w-full h-full object-contain p-2"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-theme-highlight flex items-center justify-center text-theme-accent mb-3 shadow-inner">
              <ImageIcon className="w-6 h-6 animate-pulse" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-theme-accent bg-theme-highlight/60 px-3 py-1 rounded-full mb-1">
              Original Paper Figure Placeholder
            </span>
            <p className="text-sm font-semibold text-theme-primary max-w-sm mt-1">
              {displayTitle}
            </p>
            <span className="text-xs text-theme-muted mt-1 flex items-center gap-1">
              <ExternalLink className="w-3 h-3" /> {displaySource}
            </span>
          </div>
        )}
      </div>

      <div className="p-3 bg-theme-card/80 flex flex-col gap-1">
        <p className="text-xs text-theme-secondary leading-relaxed">
          <strong className="text-theme-primary font-semibold">Figure Note: </strong>
          {displayCaption}
        </p>
        {figure?.keyTakeaway && (
          <p className="text-xs text-theme-accent font-medium mt-0.5">
            Key takeaway: {figure.keyTakeaway}
          </p>
        )}
      </div>
    </div>
  );
};

