import React, { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState(0);

  const displayTitle = figure?.title || title || 'Original Paper Figure';
  const displayCaption = figure?.caption || caption || 'Original figure from the CVPR 2023 paper.';
  const displaySource = figure?.source || source || 'CVPR 2023 Paper';
  const displaySrc = figure?.src || src;
  const displayAspect = figure?.aspectRatio || aspectRatio;
  const items = figure?.items;
  const layout = figure?.layout || 'stack';
  const hasContent = Boolean((items && items.length > 0) || displaySrc);

  return (
    <div className={`flex flex-col min-h-0 border border-theme-border rounded-xl bg-theme-card overflow-hidden shadow-slide-card ${className}`}>
      {items && items.length > 1 && layout === 'tabs' && (
        <div className="flex-shrink-0 flex items-center justify-between gap-2 px-3 py-1.5 border-b border-theme-border/60 bg-theme-bg/60">
          <span className="text-[11px] font-semibold text-theme-muted truncate">{displaySource}</span>
          <div className="flex items-center gap-1 flex-shrink-0">
            {items.map((item, idx) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-2 py-0.5 rounded-md text-[11px] font-mono transition-colors ${
                  activeTab === idx
                    ? 'bg-theme-accent text-white dark:text-slate-950 font-semibold'
                    : 'text-theme-muted hover:text-theme-primary hover:bg-theme-card'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div
        className={`w-full flex-1 min-h-0 relative flex items-center justify-center border-b border-theme-border/60 overflow-hidden ${
          hasContent ? 'bg-white p-2 sm:p-2.5' : 'bg-slate-900/5 dark:bg-slate-950/40'
        }`}
        style={!hasContent ? { aspectRatio: displayAspect } : undefined}
      >
        {items && items.length > 0 ? (
          layout === 'tabs' ? (
            <img
              src={items[activeTab]?.src || items[0].src}
              alt={items[activeTab]?.label || displayTitle}
              className="max-w-full max-h-[42vh] md:max-h-full w-auto h-auto object-contain"
            />
          ) : (
            <div className="w-full h-full min-h-0 flex flex-col items-center justify-center gap-2">
              {items.map((item) => (
                <div
                  key={item.label}
                  className="w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="max-w-full max-h-[26vh] md:max-h-full w-auto h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          )
        ) : displaySrc ? (
          <img
            src={displaySrc}
            alt={displayTitle}
            className="max-w-full max-h-[42vh] md:max-h-full w-auto h-auto object-contain"
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

      <div className="flex-shrink-0 p-2.5 sm:p-3 bg-theme-card/80 flex flex-col gap-0.5">
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

