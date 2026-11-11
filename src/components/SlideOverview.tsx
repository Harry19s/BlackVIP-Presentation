import React from 'react';
import { X, Grid } from 'lucide-react';
import { slidesMeta } from '../data/slides';

interface SlideOverviewProps {
  currentSlide: number;
  isOpen: boolean;
  onSelectSlide: (slideId: number) => void;
  onClose: () => void;
}

export const SlideOverview: React.FC<SlideOverviewProps> = ({
  currentSlide,
  isOpen,
  onSelectSlide,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-6 animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-theme-border rounded-2xl w-full max-w-5xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 border-b border-theme-border flex items-center justify-between bg-slate-50/60 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-theme-highlight text-theme-accent">
              <Grid className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-theme-primary">
                Presentation Slide Overview
              </h2>
              <p className="text-xs text-theme-muted">
                19 Slides • Select any slide to jump immediately
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-700/60 text-theme-muted hover:text-theme-primary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid of slides */}
        <div className="p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {slidesMeta.map((slide) => {
            const isCurrent = slide.id === currentSlide;

            return (
              <button
                key={slide.id}
                onClick={() => onSelectSlide(slide.id)}
                className={`flex flex-col text-left p-3.5 rounded-xl border transition-all text-xs group relative ${
                  isCurrent
                    ? 'bg-theme-highlight/50 border-theme-accent ring-2 ring-theme-accent/30 shadow-md'
                    : 'bg-theme-card/60 hover:bg-theme-card border-theme-border hover:border-theme-accent/50 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono font-bold text-xs px-2 py-0.5 rounded-md ${
                      isCurrent
                        ? 'bg-theme-accent text-white'
                        : 'bg-theme-border/60 text-theme-secondary group-hover:bg-theme-accent group-hover:text-white'
                    }`}
                  >
                    #{String(slide.id).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-theme-muted">
                    {slide.part}
                  </span>
                </div>

                <h4 className="font-semibold text-theme-primary line-clamp-2 leading-snug group-hover:text-theme-accent">
                  {slide.title}
                </h4>

                <span className="text-[10px] text-theme-muted mt-2 line-clamp-1">
                  {slide.section}
                </span>

                {isCurrent && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-theme-accent rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Footer shortcuts note */}
        <div className="px-6 py-3 border-t border-theme-border/60 bg-theme-card/30 flex items-center justify-between text-xs text-theme-muted font-mono">
          <span>Shortcuts: [Esc] Close • [←/→] Navigate • [N] Notes • [F] Fullscreen • [R] Replay</span>
          <span>CVPR 2023 BlackVIP</span>
        </div>
      </div>
    </div>
  );
};

