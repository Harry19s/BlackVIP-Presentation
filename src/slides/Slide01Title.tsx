import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Sparkles, ShieldCheck, Lock, Sliders, Zap } from 'lucide-react';
import fig1Overview from '../assets/figures/fig1_overview.png';

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

          {/* Academic Affiliation */}
          <div className="p-3 rounded-xl bg-theme-card border border-theme-border/80 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-theme-muted block mb-0.5">
                Academic Affiliation
              </span>
              <p className="text-xs font-bold text-theme-primary">
                IIIT Bangalore
              </p>
            </div>
          </div>
        </motion.div>

        {/* Paper Figure 1 Overview */}
        <motion.div
          variants={scaleIn}
          className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-theme-card border border-theme-border shadow-slide-card overflow-hidden"
        >
          <div className="px-4 py-2.5 border-b border-theme-border/60 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-theme-accent bg-theme-bg/40">
            <span>FT vs VP vs BlackVIP</span>
            <ShieldCheck className="w-4 h-4" />
          </div>

          <div className="bg-white p-3 flex-1 flex items-center justify-center">
            <img
              src={fig1Overview}
              alt="Comparison of Fine-Tuning (FT), Visual Prompting (VP), and BlackVIP"
              className="w-full h-auto max-h-[38vh] lg:max-h-[42vh] object-contain"
            />
          </div>

          <div className="px-4 py-2.5 border-t border-theme-border/60 text-[11px] text-theme-secondary flex items-center justify-between gap-2 bg-theme-card/80">
            <span>Input-dependent prompting with SPSA-GC — zero parameter access.</span>
            <span className="font-mono font-semibold text-theme-accent whitespace-nowrap">Fig. 1</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom 3 Presenters Strip */}
      <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <div className="p-2.5 rounded-xl bg-theme-card border border-theme-border/80 flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-theme-highlight text-theme-accent">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <span className="text-s font-bold text-theme-primary block">Motivation &amp; Architecture</span>
            <span className="text-[14px] text-theme-secondary">Jhalak Kotwani</span>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-theme-card border border-theme-border/80 flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-theme-highlight text-theme-accent">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <span className="text-s font-bold text-theme-primary block">SPSA-GC Optimization</span>
            <span className="text-[14px] text-theme-secondary">Aditi Babu</span>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-theme-card border border-theme-border/80 flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-theme-highlight text-theme-accent">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-s font-bold text-theme-primary block">Results &amp; Conclusion</span>
            <span className="text-[14px] text-theme-secondary">Sahil Tailor</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
