import React, { useState, useEffect, useCallback } from 'react';
import { useSlideNavigation } from '../hooks/useSlideNavigation';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import { ProgressBar } from '../components/ProgressBar';
import { SlideContainer } from '../components/SlideContainer';
import { SlideNavigation } from '../components/SlideNavigation';
import { SlideOverview } from '../components/SlideOverview';
import { SpeakerNotes } from '../components/SpeakerNotes';
import { defaultTheme, PresentationTheme } from '../theme/theme';
import { darkAcademicTheme, applyThemeToCSS } from '../theme/themes';

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

  // Theme State
  const [currentTheme, setCurrentTheme] = useState<PresentationTheme>(defaultTheme);

  useEffect(() => {
    applyThemeToCSS(currentTheme);
  }, [currentTheme]);

  const toggleTheme = useCallback(() => {
    setCurrentTheme((prev) =>
      prev.id === 'cool-clean' ? darkAcademicTheme : defaultTheme
    );
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable fullscreen:', err);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  }, []);

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
    <div className="w-screen h-screen flex flex-col bg-slate-900 text-theme-primary overflow-hidden relative font-sans">
      {/* Top Slide Progress Bar */}
      <ProgressBar current={currentSlide} total={totalSlides} />

      {/* Main Slide Presentation Viewport */}
      <SlideContainer
        currentSlide={currentSlide}
        direction={direction}
        animationKey={animationKey}
      >
        {renderSlideContent()}
      </SlideContainer>

      {/* Bottom Presentation Controls Bar */}
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
        onToggleTheme={toggleTheme}
        isNotesOpen={isNotesOpen}
      />

      {/* Slide Overview Grid Modal */}
      <SlideOverview
        currentSlide={currentSlide}
        isOpen={isOverviewOpen}
        onSelectSlide={goToSlide}
        onClose={() => setIsOverviewOpen(false)}
      />

      {/* Speaker Notes Drawer Panel */}
      <SpeakerNotes
        currentSlide={currentSlide}
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
      />
    </div>
  );
};

