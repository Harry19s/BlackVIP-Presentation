import React from 'react';
import { motion } from 'framer-motion';
import { Equation } from '../components/Equation';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Sparkles, ShieldCheck, Box, Cpu, Lock, Sliders, Zap } from 'lucide-react';

export const Slide01Title: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between gap-4"
    >
      {/* Top Banner / Venue badge */}
      <motion.div variants={fadeUp} className="flex items-center justify-between pb-2 border-b border-theme-border/60">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-theme-accent text-white dark:text-slate-950 shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> CVPR 2023
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-theme-highlight text-theme-accent border border-theme-accent/20">
            IEEE / CVF Conference on Computer Vision & Pattern Recognition
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-medium text-theme-muted">
          <span>Oral Presentation</span>
          <span className="opacity-40">|</span>
          <span className="text-theme-accent font-semibold">Transfer Learning</span>
        </div>
      </motion.div>

      {/* Main Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1 my-auto">
        <motion.div variants={fadeUp} className="lg:col-span-7 flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5">
              <Zap className="w-4 h-4" /> Zero-Access Foundation Model Adaptation
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-theme-primary leading-tight tracking-tight">
              BlackVIP: <span className="text-theme-accent">Black-Box</span> Visual Prompting for Robust Transfer Learning
            </h1>
            <p className="text-sm sm:text-base text-theme-secondary font-normal leading-relaxed">
              Enabling efficient, robust downstream adaptation of proprietary vision models without modifying model weights, reading architectures, or requiring backpropagation gradients.
            </p>
          </div>

          {/* Authors Card */}
          <div className="p-3.5 rounded-xl bg-theme-card/60 border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-theme-muted mb-0.5">
                Original Paper Authors (CVPR 2023)
              </p>
              <p className="text-sm font-semibold text-theme-primary">
                Changdae Oh · Hyeji Hwang · Hee-sun Bae · Hosik Choi · Kyungwoo Song
              </p>
              <p className="text-xs text-theme-muted mt-0.5">
                University of Seoul · Yonsei University
              </p>
            </div>
            <div className="hidden sm:block text-right">
              <span className="text-[11px] font-bold uppercase tracking-wider text-theme-accent">
                Venue
              </span>
              <p className="text-xs font-mono font-semibold text-theme-secondary">
                CVPR 2023 Main Conference
              </p>
            </div>
          </div>

          {/* Presenter & Academic Affiliation */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-theme-card border border-theme-border/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-theme-accent block mb-0.5">
                Presenter & Seminar
              </span>
              <p className="text-xs font-bold text-theme-primary">
                Research Presentation
              </p>
              <p className="text-[11px] text-theme-muted">Advanced Deep Neural Networks</p>
            </div>
            <div className="p-3 rounded-xl bg-theme-card border border-theme-border/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-theme-muted block mb-0.5">
                Academic Affiliation
              </span>
              <p className="text-xs font-bold text-theme-primary">
                IIIT Bangalore
              </p>
              <p className="text-[11px] text-theme-muted">M.Tech / Research Seminar</p>
            </div>
          </div>
        </motion.div>

        {/* Abstract Interactive Visual representation */}
        <motion.div
          variants={scaleIn}
          className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-theme-card to-theme-highlight/20 border border-theme-border shadow-slide-card relative h-full min-h-[300px]"
        >
          {/* Conceptual visual frame */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl border-4 border-dashed border-theme-accent p-3 bg-white dark:bg-slate-900 shadow-inner flex flex-col items-center justify-between">
            {/* Visual Prompt Border Label */}
            <div className="w-full flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-theme-accent px-1">
              <span>Learnable Prompt Canvas</span>
              <ShieldCheck className="w-4 h-4" />
            </div>

            {/* Downstream Image inside prompt */}
            <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-xl bg-slate-200 dark:bg-slate-800 border border-theme-border flex flex-col items-center justify-center p-3 text-center relative overflow-hidden group">
              <div className="w-16 h-16 rounded-full bg-theme-highlight flex items-center justify-center text-theme-accent mb-2 shadow-sm">
                <Box className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-theme-primary">Input Image x</span>
              <span className="text-[10px] text-theme-muted">Target Domain Query</span>

              {/* Animated scanning beam */}
              <motion.div
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-theme-secondaryAccent to-transparent"
                animate={{ y: [-80, 80] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Prompt Tag */}
            <div className="text-[11px] font-mono font-semibold text-theme-secondary bg-theme-card px-2.5 py-1 rounded-full border border-theme-border shadow-xs flex items-center gap-1.5">
              <Equation math="x + v(x; \phi)" block={false} />
              <span className="text-theme-muted">&rarr;</span>
              <span>Target Model</span>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-theme-secondary">
            <Cpu className="w-4 h-4 text-theme-accent" />
            <span>Black-Box Vision Model: Parameters Sealed & Frozen</span>
          </div>
        </motion.div>
      </div>

      {/* 3 Research Highlights Strip across bottom (replaces empty space) */}
      <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <div className="p-2.5 rounded-xl bg-theme-card border border-theme-border/80 flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-theme-highlight text-theme-accent">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-theme-primary block">1. Zero-Access Transfer</span>
            <span className="text-[11px] text-theme-secondary">Adapts models via forward queries only.</span>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-theme-card border border-theme-border/80 flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-theme-highlight text-theme-accent">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-theme-primary block">2. Coordinator Architecture</span>
            <span className="text-[11px] text-theme-secondary">Solves pixel curse of dimensionality.</span>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-theme-card border border-theme-border/80 flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-theme-highlight text-theme-accent">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-theme-primary block">3. SPSA-GC Optimization</span>
            <span className="text-[11px] text-theme-secondary">Look-ahead momentum variance damping.</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
