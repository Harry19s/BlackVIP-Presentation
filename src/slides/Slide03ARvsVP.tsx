import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { ShieldAlert, Sparkles, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export const Slide03ARvsVP: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between"
    >
      <div>
        <SectionLabel part="Part 1" section="Background & Prior Art" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Adversarial Reprogramming (AR) vs Visual Prompting (VP)
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-theme-secondary mt-1 max-w-3xl">
          Both methods modify input pixels rather than network parameters, but their objectives and mapping strategies diverge fundamentally.
        </motion.p>
      </div>

      {/* Side-by-Side Pipeline Comparison */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
        {/* Adversarial Reprogramming Card */}
        <div className="flex flex-col p-5 rounded-xl border border-theme-border bg-theme-card/70 shadow-slide-card">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-theme-border/60">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-rose-500/10 text-rose-600">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-theme-primary">Adversarial Reprogramming (AR)</h3>
                <span className="text-[11px] text-theme-muted font-mono">Elsayed et al. (ICLR 2019)</span>
              </div>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/40 text-rose-600 border border-rose-200">
              Task Hijacking
            </span>
          </div>

          <div className="space-y-3 flex-1 text-xs">
            {/* Visual representation of AR */}
            <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-theme-border/80 flex items-center justify-center gap-2">
              <div className="w-16 h-16 rounded border-2 border-rose-400 bg-rose-50 dark:bg-rose-950/20 flex flex-col items-center justify-center text-[10px] text-center p-1 font-semibold text-rose-700">
                Fixed Noise Frame
              </div>
              <ArrowRight className="w-4 h-4 text-theme-muted" />
              <div className="w-20 h-16 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[11px] font-bold text-slate-700 dark:text-slate-300">
                ImageNet CNN
              </div>
              <ArrowRight className="w-4 h-4 text-theme-muted" />
              <div className="text-[10px] bg-rose-100 dark:bg-rose-900/40 p-1.5 rounded font-mono text-rose-800 dark:text-rose-200">
                Hardcoded Label Map
              </div>
            </div>

            <ul className="space-y-2 text-theme-secondary">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>Forces a network trained for Domain A to output artificial classes of Domain B via static output mapping.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>Often treats the underlying features as random hash functions rather than semantically meaningful representations.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Visual Prompting Card */}
        <div className="flex flex-col p-5 rounded-xl border border-theme-accent bg-theme-card shadow-slide-card ring-1 ring-theme-accent/20">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-theme-border/60">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-theme-accent text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-theme-primary">Visual Prompting (VP)</h3>
                <span className="text-[11px] text-theme-accent font-mono">Bahng et al. (ECCV 2022)</span>
              </div>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-theme-highlight text-theme-accent border border-theme-accent/30">
              In-Context Transfer
            </span>
          </div>

          <div className="space-y-3 flex-1 text-xs">
            {/* Visual representation of VP */}
            <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-theme-border/80 flex items-center justify-center gap-2">
              <div className="w-16 h-16 rounded border-2 border-theme-accent bg-blue-50 dark:bg-blue-950/20 flex flex-col items-center justify-center text-[10px] text-center p-1 font-semibold text-theme-accent">
                Visual Prompt + Image
              </div>
              <ArrowRight className="w-4 h-4 text-theme-accent" />
              <div className="w-20 h-16 rounded bg-theme-highlight/60 flex items-center justify-center text-[11px] font-bold text-theme-accent">
                Vision Backbone
              </div>
              <ArrowRight className="w-4 h-4 text-theme-accent" />
              <div className="text-[10px] bg-theme-highlight p-1.5 rounded font-mono text-theme-accent">
                Semantic Predictions
              </div>
            </div>

            <ul className="space-y-2 text-theme-secondary">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
                <span>Inspired by NLP in-context learning: guides the pretrained model toward downstream tasks naturally.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
                <span>Preserves the semantic alignment and zero-shot reasoning capabilities of foundation models (e.g. CLIP).</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Summary Highlight */}
      <motion.div variants={fadeUp} className="text-xs text-theme-muted bg-theme-card/60 p-3 rounded-lg border border-theme-border">
        <strong className="text-theme-primary">Core Distinction: </strong>
        While AR repurposes networks through adversarial hijacking and artificial class remapping, Visual Prompting steers foundation models using task-aware visual conditioning while honoring pre-trained feature semantics.
      </motion.div>
    </motion.div>
  );
};

