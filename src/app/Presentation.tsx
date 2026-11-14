import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Grid, FileText, Minimize } from 'lucide-react';
import { useSlideNavigation } from '../hooks/useSlideNavigation';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import { ProgressBar } from '../components/ProgressBar';
import { SlideContainer } from '../components/SlideContainer';
import { SlideNavigation } from '../components/SlideNavigation';
import { SlideOverview } from '../components/SlideOverview';
import { SpeakerNotes } from '../components/SpeakerNotes';
import { defaultTheme, PresentationTheme } from '../theme/theme';
import { availableThemes, applyThemeToCSS } from '../theme/themes';

// Import all 19 slides
import { Slide01Title } from '../slides/Slide01Title';
import { Slide02Motivation } from '../slides/Slide02Motivation';
import { Slide03ARvsVP } from '../slides/Slide03ARvsVP';
import { Slide04ProblemFormulation } from '../slides/Slide04ProblemFormulation';
import { Slide05BlackVIPArchitecture } from '../slides/Slide05BlackVIPArchitecture';
import { Slide06Coordinator } from '../slides/Slide06Coordinator';
import { Slide07TriggerVector } from '../slides/Slide07TriggerVector';
import { Slide08ZOO } from '../slides/Slide08ZOO';
import { Slide09SPSAConcept } from '../slides/Slide09SPSAConcept';
import { Slide10SPSAGradient } from '../slides/Slide10SPSAGradient';
import { Slide11SPSALimitations } from '../slides/Slide11SPSALimitations';
import { Slide12NAG } from '../slides/Slide12NAG';
import { Slide13SPSAGC } from '../slides/Slide13SPSAGC';
import { Slide14ExperimentalSetup } from '../slides/Slide14ExperimentalSetup';
import { Slide15SyntheticResults } from '../slides/Slide15SyntheticResults';
import { Slide16OptimizationComparison } from '../slides/Slide16OptimizationComparison';
import { Slide17Robustness } from '../slides/Slide17Robustness';
import { Slide18Ablation } from '../slides/Slide18Ablation';
import { Slide19Conclusion } from '../slides/Slide19Conclusion';

export const Presentation: React.FC = () => {
  const {
    currentSlide,
    totalSlides,
    direction,
    animationKey,
    isOverviewOpen,
    isNotesOpen,
    nextSlide,
    prevSlide,
    goToSlide,
    goToFirst,
    goToLast,
    replayAnimation,
    toggleOverview,
    toggleNotes,
    setIsOverviewOpen,
    setIsNotesOpen,
  } = useSlideNavigation(1);

  // Fullscreen State
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Draggable Split State (default 70% slide / 30% notes)
  const [splitPercent, setSplitPercent] = useState(70);
  const [isDraggingSplit, setIsDraggingSplit] = useState(false);
  const splitContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDraggingSplit) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = splitContainerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const isDesktop = window.innerWidth >= 768;
      const raw = isDesktop
        ? ((e.clientX - rect.left) / rect.width) * 100
        : ((e.clientY - rect.top) / rect.height) * 100;
      const clamped = Math.min(85, Math.max(35, raw));
      setSplitPercent(clamped);
    };

    const handlePointerUp = () => {
      setIsDraggingSplit(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDraggingSplit]);

  // Touch swipe tracking for mobile navigation
  const touchStartRef = React.useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStartRef.current || e.changedTouches.length !== 1) return;
      const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
      const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
      touchStartRef.current = null;

      // Require clear horizontal swipe (> 55px and mostly horizontal)
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        if (dx < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    },
    [nextSlide, prevSlide]
  );

  // Theme State
  const [currentTheme, setCurrentTheme] = useState<PresentationTheme>(defaultTheme);

  useEffect(() => {
    applyThemeToCSS(currentTheme);
  }, [currentTheme]);

  const toggleTheme = useCallback(() => {
    setCurrentTheme((prev) => {
      const currentIndex = availableThemes.findIndex((t) => t.id === prev.id);
      const nextIndex = (currentIndex + 1) % availableThemes.length;
      return availableThemes[nextIndex];
    });
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.error('Error attempting to enable fullscreen:', err);
        });
      }
      setIsFullscreen(true);
    } else {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  }, [isFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation hook
  useKeyboardNavigation({
    onNext: nextSlide,
    onPrev: prevSlide,
    onFirst: goToFirst,
    onLast: goToLast,
    onToggleOverview: toggleOverview,
    onToggleNotes: toggleNotes,
    onReplay: replayAnimation,
    onToggleFullscreen: toggleFullscreen,
    onToggleTheme: toggleTheme,
    enabled: true,
  });

  // Render the current slide component dynamically
  const renderSlideContent = () => {
    switch (currentSlide) {
      case 1:
        return <Slide01Title />;
      case 2:
        return <Slide02Motivation />;
      case 3:
        return <Slide03ARvsVP />;
      case 4:
        return <Slide04ProblemFormulation />;
      case 5:
        return <Slide05BlackVIPArchitecture />;
      case 6:
        return <Slide06Coordinator />;
      case 7:
        return <Slide07TriggerVector />;
      case 8:
        return <Slide08ZOO />;
      case 9:
        return <Slide09SPSAConcept />;
      case 10:
        return <Slide10SPSAGradient />;
      case 11:
        return <Slide11SPSALimitations />;
      case 12:
        return <Slide12NAG />;
      case 13:
        return <Slide13SPSAGC />;
      case 14:
        return <Slide14ExperimentalSetup />;
      case 15:
        return <Slide15SyntheticResults />;
      case 16:
        return <Slide16OptimizationComparison />;
      case 17:
        return <Slide17Robustness />;
      case 18:
        return <Slide18Ablation />;
      case 19:
        return <Slide19Conclusion />;
      default:
        return <Slide01Title />;
    }
  };

  return (
    <div
      className={`w-screen h-screen supports-[height:100dvh]:h-[100dvh] flex flex-col bg-theme-bg text-theme-primary overflow-hidden relative font-sans ${
        isDraggingSplit ? 'select-none' : ''
      }`}
    >
      {/* Top Slide Progress Bar */}
      <ProgressBar current={currentSlide} total={totalSlides} />

      {/* Main Content Area: Slide + Optional Draggable Speaker Notes Split */}
      <div
        ref={splitContainerRef}
        className="flex-1 min-h-0 w-full flex flex-col md:flex-row overflow-hidden"
      >
        {/* Main Slide Presentation Viewport (swipeable on mobile) */}
        <div
          className="flex-1 min-h-0 min-w-0 flex flex-col overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <SlideContainer
            currentSlide={currentSlide}
            direction={direction}
            animationKey={animationKey}
          >
            {renderSlideContent()}
          </SlideContainer>
        </div>

        {/* Draggable Split Handle & Speaker Notes Section */}
        {isNotesOpen && (
          <>
            <div
              role="separator"
              aria-orientation="vertical"
              tabIndex={0}
              onPointerDown={(e) => {
                e.preventDefault();
                setIsDraggingSplit(true);
              }}
              onDoubleClick={() => setSplitPercent(70)}
              title="Drag to resize slide & notes (double-click to reset 70/30)"
              className={`group flex-shrink-0 touch-none flex items-center justify-center transition-colors ${
                isDraggingSplit ? 'bg-theme-accent/25' : 'bg-theme-border/30 hover:bg-theme-accent/20'
              } h-3 w-full cursor-row-resize md:h-full md:w-2.5 md:cursor-col-resize z-20`}
            >
              <div
                className={`rounded-full transition-colors ${
                  isDraggingSplit ? 'bg-theme-accent' : 'bg-theme-muted/50 group-hover:bg-theme-accent'
                } w-12 h-1 md:w-1 md:h-10`}
              />
            </div>

            <div
              className="flex-shrink-0 min-h-0 min-w-0 overflow-hidden"
              style={{ flexBasis: `${100 - splitPercent}%` }}
            >
              <SpeakerNotes
                currentSlide={currentSlide}
                isOpen={isNotesOpen}
                onClose={() => setIsNotesOpen(false)}
              />
            </div>
          </>
        )}
      </div>

      {/* Bottom Presentation Controls Bar (hidden in fullscreen) */}
      {!isFullscreen && (
        <SlideNavigation
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onPrev={prevSlide}
          onNext={nextSlide}
          onToggleOverview={toggleOverview}
          onToggleNotes={toggleNotes}
          onReplay={replayAnimation}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
          currentTheme={currentTheme}
          onSelectTheme={setCurrentTheme}
          isNotesOpen={isNotesOpen}
        />
      )}

      {/* Fullscreen Floating Bottom Controls (mobile & quick actions) */}
      {isFullscreen && (
        <div className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-theme-card/85 backdrop-blur-md border border-theme-border/70 shadow-xl opacity-95 sm:opacity-35 sm:hover:opacity-100 sm:focus-within:opacity-100 transition-opacity touch-manipulation">
          <button
            onClick={prevSlide}
            disabled={currentSlide <= 1}
            className="p-1.5 rounded-full text-theme-primary hover:bg-theme-cardHover disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Previous slide"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono font-semibold text-theme-secondary px-1 select-none">
            {currentSlide}/{totalSlides}
          </span>
          <button
            onClick={nextSlide}
            disabled={currentSlide >= totalSlides}
            className="p-1.5 rounded-full text-theme-primary hover:bg-theme-cardHover disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Next slide"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="w-px h-4 bg-theme-border mx-0.5" />

          <button
            onClick={toggleOverview}
            className="p-1.5 rounded-full text-theme-muted hover:text-theme-primary hover:bg-theme-cardHover transition-colors"
            title="Slide Overview"
            aria-label="Slide Overview"
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={toggleNotes}
            className={`p-1.5 rounded-full transition-colors ${
              isNotesOpen
                ? 'bg-theme-highlight text-theme-accent'
                : 'text-theme-muted hover:text-theme-primary hover:bg-theme-cardHover'
            }`}
            title="Speaker Notes"
            aria-label="Speaker Notes"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-full text-theme-muted hover:text-theme-primary hover:bg-theme-cardHover transition-colors"
            title="Exit Fullscreen (F / Esc)"
            aria-label="Exit Fullscreen"
          >
            <Minimize className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Slide Overview Grid Modal */}
      <SlideOverview
        currentSlide={currentSlide}
        isOpen={isOverviewOpen}
        onSelectSlide={goToSlide}
        onClose={() => setIsOverviewOpen(false)}
      />
    </div>
  );
};
