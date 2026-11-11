import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { Equation } from '../components/Equation';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Target, Combine, Zap, ShieldCheck } from 'lucide-react';

export const Slide07TriggerVector: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between"
    >
      <div>
        <SectionLabel part="Part 2" section="Coordinator Design" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Trigger Vector & Visual Prompt Generation
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-theme-secondary mt-1 max-w-3xl">
          Fusing image-specific semantic cues with task-specific instructions to synthesize tailored visual prompts.
        </motion.p>
      </div>

      {/* Main Trigger & Feature Fusion Diagram */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
        {/* Visual Fusion Block */}
        <div className="md:col-span-7 p-6 rounded-2xl bg-theme-card border border-theme-border shadow-slide-card flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-theme-accent mb-4 flex items-center gap-1.5">
            <Combine className="w-4 h-4" /> Dual-Stream Conditioning Pipeline
          </span>

          <div className="grid grid-cols-2 gap-4 w-full mb-4">
            {/* Image Stream */}
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-theme-border flex flex-col items-center text-center">
              <span className="text-[11px] font-bold text-theme-primary mb-1">Image Stream (Instance)</span>
              <Equation math="f(x) \in \mathbb{R}^d" block={false} className="text-xs mb-1" />
              <p className="text-[11px] text-theme-muted">
                Extracted by frozen SSL encoder. Varies for every input image <Equation math="x" block={false} />.
              </p>
            </div>

            {/* Task Trigger Stream */}
            <div className="p-3.5 rounded-xl bg-theme-highlight/40 border border-theme-accent/30 flex flex-col items-center text-center">
              <div className="flex items-center gap-1 text-[11px] font-bold text-theme-accent mb-1">
                <Target className="w-3.5 h-3.5" />
                <span>Task Stream (Global)</span>
              </div>
              <Equation math="\phi_t \in \mathbb{R}^{d_t}" block={false} highlight={true} className="text-xs mb-1" />
              <p className="text-[11px] text-theme-secondary">
                Learnable trigger vector. Shared across all instances of the downstream task.
              </p>
            </div>
          </div>

          {/* Fusion Point */}
          <div className="w-full flex items-center justify-center gap-3 py-2 bg-slate-100 dark:bg-slate-800/60 rounded-xl px-4 border border-theme-border/60">
            <Zap className="w-4 h-4 text-theme-accent" />
            <span className="text-xs font-semibold text-theme-primary">
              Conditioning Operation: Concatenation or Linear Projection
            </span>
            <span className="font-mono text-xs text-theme-accent font-bold">[f(x); \phi_t]</span>
          </div>

          {/* Decoder Output */}
          <div className="mt-4 flex items-center justify-center gap-3 w-full">
            <div className="p-3 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md">
              Decoder g_&#123;&phi;_d&#125;
            </div>
            <div className="text-theme-muted">&rarr;</div>
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-400 text-emerald-800 dark:text-emerald-200 text-xs font-bold text-center">
              Visual Prompt v(x; &phi;)
              <span className="block text-[10px] font-mono font-normal opacity-80">Border / Frame perturbation</span>
            </div>
          </div>
        </div>

        {/* Trainable Parameters Summary */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-5 rounded-xl border border-theme-accent bg-theme-card shadow-slide-card">
            <span className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5 mb-2">
              <ShieldCheck className="w-4 h-4" /> Trainable Parameter Set &phi;
            </span>

            <Equation math="\phi = \{ \phi_d, \phi_t \}" block={true} highlight={true} />

            <div className="space-y-2 mt-3 text-xs text-theme-secondary">
              <p>
                <strong className="text-theme-primary">&phi;_d (Decoder Weights): </strong>
                Lightweight convolutional transpose or MLP layers (approx. 100K-180K params).
              </p>
              <p>
                <strong className="text-theme-primary">&phi;_t (Task Trigger Vector): </strong>
                Low-dimensional continuous vector (e.g., 512 dimensions) representing task identity.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-theme-card/60 border border-theme-border text-xs text-theme-muted">
            <strong className="text-theme-primary">Instance-Adaptive & Task-Specific: </strong>
            Unlike static prompts that apply identical pixels to all images, BlackVIP generates prompts tailored to each image's semantic content while enforcing the downstream task goal.
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/60 p-2.5 rounded-lg border border-theme-border">
        By optimizing only <Equation math="\phi = \{\phi_d, \phi_t\}" block={false} />, the zeroth-order search space is reduced by orders of magnitude compared to raw pixel dimensions.
      </motion.div>
    </motion.div>
  );
};

