import React, { useState, useEffect } from 'react';
import { X, Clock, Play, RotateCcw, BookOpen, Sparkles, HelpCircle, ArrowRight, Layers } from 'lucide-react';
import { speakerNotes } from '../data/notes';
import { slidesMeta } from '../data/slides';

interface SpeakerNotesProps {
  currentSlide: number;
  isOpen: boolean;
  onClose: () => void;
}

export const SpeakerNotes: React.FC<SpeakerNotesProps> = ({
  currentSlide,
  isOpen,
  onClose,
}) => {
  const note = speakerNotes[currentSlide];
  const slide = slidesMeta.find((s) => s.id === currentSlide);

  // Presenter practice timer
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    // Reset timer on slide change
    setSecondsElapsed(0);
    setIsTimerRunning(false);
  }, [currentSlide]);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[480px] z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl border-l border-theme-border flex flex-col text-theme-primary transition-all duration-300">
      {/* Header */}
      <div className="p-4 border-b border-theme-border flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/40">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-theme-accent" />
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-theme-accent">
              Speaker Notes & Script
            </h2>
            <p className="text-xs text-theme-muted">
              Slide {currentSlide}: {slide?.title}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-700/60 text-theme-muted hover:text-theme-primary transition-colors"
          title="Close notes (N)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Timer Bar */}
      <div className="px-4 py-2 border-b border-theme-border/60 bg-theme-card/50 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-theme-secondary">
          <Clock className="w-3.5 h-3.5 text-theme-accent" />
          <span>Target: <strong className="text-theme-primary">{note?.durationEstimate || '75s'}</strong></span>
          <span className="opacity-40">|</span>
          <span>Elapsed: <strong className="text-theme-accent">{secondsElapsed}s</strong></span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className={`px-2 py-0.5 rounded text-[11px] font-semibold flex items-center gap-1 ${
              isTimerRunning
                ? 'bg-amber-500 text-white'
                : 'bg-theme-accent text-white dark:text-slate-950 hover:bg-blue-600'
            }`}
          >
            <Play className="w-2.5 h-2.5" /> {isTimerRunning ? 'Pause' : 'Start Timer'}
          </button>
          <button
            onClick={() => {
              setIsTimerRunning(false);
              setSecondsElapsed(0);
            }}
            className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-theme-muted"
            title="Reset timer"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Notes Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5 text-sm">
        {/* Objective */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5 mb-1">
            <Sparkles className="w-3.5 h-3.5" /> Slide Goal
          </span>
          <p className="text-xs text-theme-secondary leading-relaxed bg-theme-card p-3 rounded-lg border border-theme-border/60">
            {note?.objective}
          </p>
        </div>

        {/* Spoken Explanation */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
            <BookOpen className="w-3.5 h-3.5" /> What to Say (Spoken Script)
          </span>
          <p className="text-xs text-theme-primary leading-relaxed bg-emerald-50/50 dark:bg-emerald-950/20 p-3 rounded-lg border border-emerald-200/60 dark:border-emerald-800/40">
            "{note?.simpleExplanation}"
          </p>
        </div>

        {/* Diagram walkthrough */}
        {note?.diagramWalkthrough && (
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5 mb-1">
              <Layers className="w-3.5 h-3.5" /> How to Walk Through the Visuals
            </span>
            <p className="text-xs text-theme-secondary leading-relaxed bg-cyan-50/50 dark:bg-cyan-950/20 p-3 rounded-lg border border-cyan-200/60 dark:border-cyan-800/40">
              {note.diagramWalkthrough}
            </p>
          </div>
        )}

        {/* Math walk-through if applicable */}
        {note?.mathWalkthrough && (
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5 mb-1">
              <HelpCircle className="w-3.5 h-3.5" /> Mathematical Explanation
            </span>
            <p className="text-xs font-mono text-theme-primary leading-relaxed bg-purple-50/50 dark:bg-purple-950/20 p-3 rounded-lg border border-purple-200/60 dark:border-purple-800/40">
              {note.mathWalkthrough}
            </p>
          </div>
        )}

        {/* Key Terminology */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-theme-muted mb-1.5 block">
            Key Terminology
          </span>
          <div className="flex flex-wrap gap-1.5">
            {note?.keyTerminology.map((term, i) => (
              <span
                key={i}
                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-theme-border/60 text-theme-secondary"
              >
                {term}
              </span>
            ))}
          </div>
        </div>

        {/* Why it Matters */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1 block">
            Why this Matters for BlackVIP
          </span>
          <p className="text-xs text-theme-secondary leading-relaxed bg-amber-50/50 dark:bg-amber-950/20 p-3 rounded-lg border border-amber-200/60 dark:border-amber-800/40">
            {note?.whyItMatters}
          </p>
        </div>

        {/* Transition prompt */}
        <div className="pt-2 border-t border-theme-border/60">
          <span className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5 mb-1">
            <ArrowRight className="w-3.5 h-3.5" /> Next Slide Transition
          </span>
          <p className="text-xs italic text-theme-secondary leading-relaxed bg-slate-100 dark:bg-slate-800/60 p-3 rounded-lg">
            "{note?.transitionPrompt}"
          </p>
        </div>
      </div>
    </div>
  );
};

