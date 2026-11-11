import { useEffect } from 'react';

interface KeyboardNavigationProps {
  onNext: () => void;
  onPrev: () => void;
  onFirst: () => void;
  onLast: () => void;
  onToggleOverview: () => void;
  onToggleNotes: () => void;
  onReplay: () => void;
  onToggleFullscreen: () => void;
  onToggleTheme?: () => void;
  enabled?: boolean;
}

export function useKeyboardNavigation({
  onNext,
  onPrev,
  onFirst,
  onLast,
  onToggleOverview,
  onToggleNotes,
  onReplay,
  onToggleFullscreen,
  onToggleTheme,
  enabled = true,
}: KeyboardNavigationProps) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input or textarea
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (event.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ': // Spacebar
          event.preventDefault();
          onNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          event.preventDefault();
          onPrev();
          break;
        case 'Home':
          event.preventDefault();
          onFirst();
          break;
        case 'End':
          event.preventDefault();
          onLast();
          break;
        case 'Escape':
          event.preventDefault();
          onToggleOverview();
          break;
        case 'n':
        case 'N':
          event.preventDefault();
          onToggleNotes();
          break;
        case 'r':
        case 'R':
          event.preventDefault();
          onReplay();
          break;
        case 'f':
        case 'F':
          event.preventDefault();
          onToggleFullscreen();
          break;
        case 't':
        case 'T':
          if (onToggleTheme) {
            event.preventDefault();
            onToggleTheme();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    enabled,
    onNext,
    onPrev,
    onFirst,
    onLast,
    onToggleOverview,
    onToggleNotes,
    onReplay,
    onToggleFullscreen,
    onToggleTheme,
  ]);
}

