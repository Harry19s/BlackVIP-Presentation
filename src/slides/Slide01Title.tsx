import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Sparkles, ShieldCheck, Box, Cpu } from 'lucide-react';

export const Slide01Title: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between"
    >
      {/* Top Banner / Venue badge */}
      <motion.div variants={fadeUp} className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-theme-accent text-white shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> CVPR 2023
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-theme-highlight text-theme-accent border border-theme-accent/20">
            IEEE / CVF Conference on Computer Vision & Pattern Recognition
          </span>
        </div>
        <span className="text-xs font-mono font-medium text-theme-muted">
          Oral / Research Presentation
        </span>
      </motion.div>

      {/* Main Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        <motion.div variants={fadeUp} className="lg:col-span-7 space-y-5">
          <div className="space-y-2">
            <span className="text-sm font-bold uppercase tracking-wider text-theme-accent">
              Foundation Model Transfer
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-theme-primary leading-tight tracking-tight">
              BlackVIP: <span className="text-theme-accent">Black-Box</span> Visual Prompting for Robust Transfer Learning
            </h1>
            <p className="text-base sm:text-lg text-theme-secondary font-normal leading-relaxed">
              Enabling efficient, robust downstream adaptation of proprietary vision models without model weights, backpropagation, or gradient access.
            </p>
          </div>

          {/* Authors */}
          <div className="pt-2 border-t border-theme-border/60">
            <p className="text-xs font-bold uppercase tracking-wider text-theme-muted mb-1">
              Original Authors
            </p>
            <p className="text-sm font-semibold text-theme-primary">
              Changdae Oh · Hyeji Hwang · Hee-sun Bae · Hosik Choi · Kyungwoo Song
            </p>
            <p className="text-xs text-theme-muted mt-0.5">
              University of Seoul · Yonsei University
            </p>
          </div>

          {/* Presenter & Affiliation */}
          <div className="p-3.5 rounded-xl bg-theme-card border border-theme-border/80 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-theme-accent">
                Presenter
              </span>
              <p className="text-sm font-semibold text-theme-primary">
                Research Seminar Presentation
              </p>
            </div>
            <div className="text-right">
              <span className="text-[11px] font-bold uppercase tracking-wider text-theme-muted">
                Institution
              </span>
              <p className="text-xs font-medium text-theme-secondary">
                IIIT Bangalore
              </p>
            </div>
          </div>
        </motion.div>

        {/* Abstract Interactive Visual representation */}
        <motion.div
          variants={scaleIn}
          className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-theme-card to-slate-100 dark:to-slate-800 border border-theme-border shadow-slide-card relative"
        >
          {/* Conceptual visual frame */}
          <div className="relative w-64 h-64 rounded-xl border-4 border-dashed border-theme-accent p-3 bg-white dark:bg-slate-900 shadow-inner flex flex-col items-center justify-between">
            {/* Visual Prompt Border Label */}
            <div className="w-full flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-theme-accent px-1">
              <span>Learnable Prompt Canvas</span>
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>

            {/* Downstream Image inside prompt */}
            <div className="w-44 h-44 rounded-lg bg-slate-200 dark:bg-slate-800 border border-theme-border flex flex-col items-center justify-center p-3 text-center relative overflow-hidden group">
              <div className="w-16 h-16 rounded-full bg-theme-highlight/80 flex items-center justify-center text-theme-accent mb-2">
                <Box className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-theme-primary">Input Image x</span>
              <span className="text-[10px] text-theme-muted">Target Domain</span>

              {/* Animated scanning beam */}
              <motion.div
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-theme-secondaryAccent to-transparent"
                animate={{ y: [-70, 70] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Prompt Tag */}
            <div className="text-[10px] font-mono font-semibold text-theme-secondary bg-theme-card px-2 py-0.5 rounded-full border border-theme-border">
              v(x; &phi;) + x &rarr; Target Model
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-theme-secondary">
            <Cpu className="w-4 h-4 text-theme-accent" />
            <span>Black-Box Vision Model: Parameters Frozen & Hidden</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer Note */}
      <motion.div
        variants={fadeUp}
        className="pt-3 border-t border-theme-border/60 flex items-center justify-between text-xs text-theme-muted"
      >
        <span>Press <kbd className="px-1.5 py-0.5 rounded bg-theme-card border font-mono">Space</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-theme-card border font-mono">&rarr;</kbd> to advance</span>
        <span>Press <kbd className="px-1.5 py-0.5 rounded bg-theme-card border font-mono">N</kbd> for Speaker Notes</span>
      </motion.div>
    </motion.div>
  );
};

