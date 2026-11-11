import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { Equation } from '../components/Equation';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Target, Combine, Zap, ShieldCheck, CheckCircle2, Split } from 'lucide-react';
import { ArrowConnector } from '../components/Diagram';

export const Slide07TriggerVector: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between gap-4"
    >
      <div>
        <SectionLabel part="Part 2" section="Coordinator Design" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Trigger Vector & Visual Prompt Generation
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-4xl">
          Fusing instance-level semantic representations with task-specific instructions to synthesize tailored, content-aware visual prompts.
        </motion.p>
      </div>

      {/* Main Trigger & Feature Fusion Diagram */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Visual Fusion Block */}
        <div className="md:col-span-7 p-6 rounded-2xl bg-theme-card border border-theme-border shadow-slide-card flex flex-col justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-theme-accent mb-2 flex items-center gap-1.5 pb-2 border-b border-theme-border">
            <Combine className="w-4 h-4" /> Dual-Stream Conditioning Pipeline
          </span>

          <div className="grid grid-cols-2 gap-3 w-full my-auto">
            {/* Image Stream */}
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-theme-border flex flex-col items-center text-center justify-between">
              <div>
                <span className="text-xs font-bold text-theme-primary mb-1 block">Image Stream (Instance)</span>
                <Equation math="f(x) \in \mathbb{R}^d" block={false} className="text-xs mb-1" />
              </div>
              <p className="text-[11px] text-theme-muted mt-2">
                Extracted by frozen SSL encoder. Varies dynamically for every target input image <Equation math="x" block={false} />.
              </p>
            </div>

            {/* Task Trigger Stream */}
            <div className="p-3.5 rounded-xl bg-theme-highlight/40 border border-theme-accent/30 flex flex-col items-center text-center justify-between">
              <div>
                <div className="flex items-center justify-center gap-1 text-xs font-bold text-theme-accent mb-1">
                  <Target className="w-3.5 h-3.5" />
                  <span>Task Stream (Global)</span>
                </div>
                <Equation math="\phi_t \in \mathbb{R}^{d_t}" block={false} highlight={true} className="text-xs mb-1" />
              </div>
              <p className="text-[11px] text-theme-secondary mt-2">
                Learnable continuous trigger vector. Shared across all instances of the downstream task.
              </p>
            </div>
          </div>

          {/* Fusion Point */}
          <div className="w-full flex items-center justify-center gap-3 py-2.5 bg-slate-100 dark:bg-slate-800/60 rounded-xl px-4 border border-theme-border/60 my-2">
            <Zap className="w-4 h-4 text-theme-accent" />
            <span className="text-xs font-semibold text-theme-primary">
              Conditioning Operation: Concatenation or Linear Projection
            </span>
            <Equation math="[f(x); \phi_t]" block={false} highlight={true} className="text-xs font-bold" />
          </div>

          {/* Decoder Output */}
          <div className="flex items-center justify-center gap-3 w-full pt-1">
            <div className="p-2.5 px-4 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md flex items-center gap-1.5">
              <span>Trainable Decoder</span>
              <Equation math="g_{\phi_d}" block={false} className="text-white bg-blue-700/60" />
            </div>
            <ArrowConnector label="Synthesize" length="short" />
            <div className="p-2.5 px-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-400 text-emerald-800 dark:text-emerald-200 text-xs font-bold text-center">
              <div className="flex items-center justify-center gap-1">
                <span>Visual Prompt</span>
                <Equation math="v(x; \phi)" block={false} className="text-emerald-800 dark:text-emerald-200" />
              </div>
              <span className="block text-[10px] font-mono font-normal opacity-80">Frame Overlay Canvas</span>
            </div>
          </div>
        </div>

        {/* Trainable Parameters Summary */}
        <div className="md:col-span-5 flex flex-col justify-between gap-3">
          <div className="p-5 rounded-2xl border border-theme-accent bg-theme-card shadow-slide-card flex-1 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5 mb-2 pb-2 border-b border-theme-border">
                <ShieldCheck className="w-4 h-4" /> Trainable Parameter Set <Equation math="\phi" block={false} />
              </span>

              <Equation math="\phi = \{ \phi_d, \phi_t \}" block={true} highlight={true} />

              <div className="space-y-2 mt-3 text-xs text-theme-secondary">
                <p className="flex items-center gap-1.5 flex-wrap">
                  <Equation math="\phi_d" block={false} highlight={true} className="text-xs font-bold" />
                  <strong className="text-theme-primary">(Decoder Weights):</strong>
                  <span>Lightweight convolutional transpose or MLP layers (~100K-180K params).</span>
                </p>
                <p className="flex items-center gap-1.5 flex-wrap">
                  <Equation math="\phi_t" block={false} highlight={true} className="text-xs font-bold" />
                  <strong className="text-theme-primary">(Task Trigger Vector):</strong>
                  <span>Continuous vector (<Equation math="d_t = 512" block={false} />) representing task identity.</span>
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-theme-border/80 text-[11px] text-theme-secondary flex items-start gap-2 mt-3">
              <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
              <span>
                <strong>Content-Aware Adaptation: </strong> Unlike static visual prompts that apply identical pixels across every image, BlackVIP adapts the prompt to image contents.
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-3 rounded-xl border border-theme-border flex items-center justify-between">
        <span>
          By optimizing only <Equation math="\phi = \{\phi_d, \phi_t\}" block={false} />, the zeroth-order search space is reduced by orders of magnitude compared to raw pixel dimensions.
        </span>
        <span className="text-[11px] font-mono text-theme-accent font-semibold whitespace-nowrap ml-4">
          O(d_decoder + d_trigger) vs O(H x W x C)
        </span>
      </motion.div>
    </motion.div>
  );
};
