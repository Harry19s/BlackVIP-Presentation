import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Grid,
  FileText,
  RotateCcw,
  Maximize,
  Minimize,
} from 'lucide-react';
import { SlideCounter } from './SlideCounter';
import { ThemeDropdown } from './ThemeDropdown';
import { slidesMeta } from '../data/slides';
import { PresentationTheme } from '../theme/theme';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onToggleOverview: () => void;
  onToggleNotes: () => void;
  onReplay: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  currentTheme: PresentationTheme;
  onSelectTheme: (theme: PresentationTheme) => void;
  isNotesOpen: boolean;
}

export const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onToggleOverview,
  onToggleNotes,
  onReplay,
  isFullscreen,
  onToggleFullscreen,
  currentTheme,
  onSelectTheme,
  isNotesOpen,
}) => {
  const currentMeta = slidesMeta.find((s) => s.id === currentSlide);

  return (
    <footer className="h-14 border-t border-theme-border bg-theme-bg/95 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between z-30 select-none">
      {/* Left info: Section and Title snippet */}
      <div className="flex items-center gap-3 max-w-[32%] overflow-hidden">
        <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-theme-card border border-theme-border text-theme-muted hidden sm:inline-block">
          {currentMeta?.section}
        </span>
        <span className="text-xs font-semibold text-theme-primary truncate">
          {currentMeta?.title}
        </span>
      </div>

      {/* Center: Slide navigation controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={onPrev}
          disabled={currentSlide <= 1}
          className="p-1.5 rounded-lg border border-theme-border bg-theme-card text-theme-primary hover:bg-theme-cardHover disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs"
          title="Previous slide (Left Arrow)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <SlideCounter current={currentSlide} total={totalSlides} />

        <button
          onClick={onNext}
          disabled={currentSlide >= totalSlides}
          className="p-1.5 rounded-lg border border-theme-border bg-theme-card text-theme-primary hover:bg-theme-cardHover disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs"
          title="Next slide (Right Arrow / Space)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Right: Auxiliary tools & Theme Dropdown */}
      <div className="flex items-center gap-2">
        <button
          onClick={onReplay}
          className="p-2 rounded-lg text-theme-muted hover:text-theme-primary hover:bg-theme-card border border-transparent hover:border-theme-border transition-colors hidden md:flex items-center gap-1 text-xs"
          title="Replay slide animations (R)"
        >
          <RotateCcw className="w-4 h-4" />
          <span className="text-[11px] font-mono">Replay</span>
        </button>

        <button
          onClick={onToggleOverview}
          className="p-2 rounded-lg text-theme-muted hover:text-theme-primary hover:bg-theme-card border border-transparent hover:border-theme-border transition-colors flex items-center gap-1 text-xs"
          title="Slide Overview (Esc)"
        >
          <Grid className="w-4 h-4" />
          <span className="hidden sm:inline text-[11px] font-mono">Slides</span>
        </button>

        <button
          onClick={onToggleNotes}
          className={`p-2 rounded-lg border transition-colors flex items-center gap-1 text-xs ${
            isNotesOpen
              ? 'bg-theme-highlight text-theme-accent border-theme-accent/40 font-semibold'
              : 'text-theme-muted hover:text-theme-primary hover:bg-theme-card border-transparent hover:border-theme-border'
          }`}
          title="Speaker Notes & Script (N)"
        >
          <FileText className="w-4 h-4" />
          <span className="hidden sm:inline text-[11px] font-mono">Notes</span>
        </button>

        {/* Theme Dropdown */}
        <ThemeDropdown
          currentTheme={currentTheme}
          onSelectTheme={onSelectTheme}
        />

        <button
          onClick={onToggleFullscreen}
          className="p-2 rounded-lg text-theme-muted hover:text-theme-primary hover:bg-theme-card border border-transparent hover:border-theme-border transition-colors"
          title="Toggle Fullscreen (F)"
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>
      </div>
    </footer>
  );
};
