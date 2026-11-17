import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { HelpCircle, Sparkles, GraduationCap, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Slide20ThankYou: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 95,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#2563EB', '#06B6D4', '#0D9488', '#F59E0B', '#C2410C'],
    });
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between gap-4"
    >
      <div className="flex items-center justify-between pb-2 border-b border-theme-border/60 flex-shrink-0">
        <SectionLabel part="Closing" section="Questions & Discussion" />
        <span className="text-xs font-mono text-theme-muted">CVPR 2023 · BlackVIP</span>
      </div>

      {/* Center Thank You Card */}
      <motion.div
        variants={scaleIn}
        className="flex-1 flex flex-col items-center justify-center text-center p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-theme-card via-theme-bg to-theme-highlight/25 border border-theme-border shadow-slide-card gap-5"
      >
        <div className="w-16 h-16 rounded-2xl bg-theme-highlight text-theme-accent flex items-center justify-center shadow-inner border border-theme-accent/20">
          <HelpCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2 max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-black text-theme-primary tracking-tight">
            Thank You!
          </h1>
          <p className="text-sm sm:text-base text-theme-secondary leading-relaxed">
            Thank you for your time and attention.
          </p>
        </div>

        <button
          onClick={triggerConfetti}
          className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-theme-accent text-white dark:text-slate-950 hover:opacity-90 transition-all shadow-md hover:shadow-lg flex items-center gap-2 touch-manipulation"
        >
          <Sparkles className="w-4 h-4" />
          <span>Celebrate Presentation</span>
        </button>

        {/* Presenters Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-4 border-t border-theme-border/60 text-left">
          <div className="p-3 rounded-xl bg-theme-card border border-theme-border/80">
            <span className="text-xs font-bold text-theme-primary block">Jhalak Kotwani</span>
            <span className="text-[11px] text-theme-secondary">Motivation &amp; Architecture</span>
          </div>
          <div className="p-3 rounded-xl bg-theme-card border border-theme-border/80">
            <span className="text-xs font-bold text-theme-primary block">Aditi Babu</span>
            <span className="text-[11px] text-theme-secondary">SPSA-GC Optimization</span>
          </div>
          <div className="p-3 rounded-xl bg-theme-card border border-theme-border/80">
            <span className="text-xs font-bold text-theme-primary block">Sahil Tailor</span>
            <span className="text-[11px] text-theme-secondary">Results &amp; Conclusion</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        variants={fadeUp}
        className="text-xs text-theme-secondary bg-theme-card/80 p-3 rounded-xl border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0"
      >
        <span className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-theme-accent flex-shrink-0" />
          <span><strong>IIIT Bangalore</strong> · Black-Box Visual Prompting for Robust Transfer Learning</span>
        </span>
        <span className="text-[11px] font-mono text-theme-muted flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-theme-accent" /> Oh et al., CVPR 2023
        </span>
      </motion.div>
    </motion.div>
  );
};
