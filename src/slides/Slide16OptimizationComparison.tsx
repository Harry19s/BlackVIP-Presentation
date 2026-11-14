import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Equation } from '../components/Equation';
import { paperFigures } from '../data/paperFigures';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { LineChart, CheckCircle2, Zap, ArrowDownRight } from 'lucide-react';

export const Slide16OptimizationComparison: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between gap-4"
    >
      <div>
        <SectionLabel part="Part 5" section="Experimental Evaluation" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Optimization Convergence &amp; Query Efficiency
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-3xl">
          Benchmarking SPSA-GC on 100D Rosenbrock (Fig. 3) and real-world API query cost (Fig. 7).
        </motion.p>
      </div>

      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left: Paper Figure Placeholder */}
        <div className="md:col-span-6 flex flex-col justify-between">
          <ImagePlaceholder
            figure={paperFigures.optimizationComparison}
            aspectRatio="16 / 10"
            className="h-full justify-between"
          />
        </div>

        {/* Right: Concise Method Comparison */}
        <div className="md:col-span-6 flex flex-col justify-between gap-3">
          <div className="p-4 rounded-xl border border-theme-border bg-theme-card text-xs space-y-2 flex-1 flex flex-col justify-between">
            <div>
              <span className="font-bold text-theme-primary flex items-center gap-1.5 uppercase tracking-wider pb-1 border-b border-theme-border">
                <LineChart className="w-4 h-4 text-theme-accent" /> 100D Rosenbrock Benchmark (Fig. 3)
              </span>
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-900 border border-theme-border/60">
                  <span className="font-semibold text-theme-secondary">RGF (Baseline):</span>
                  <span className="text-rose-600 dark:text-rose-400">Slow descent; collapses under loss noise.</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-900 border border-theme-border/60">
                  <span className="font-semibold text-theme-secondary">Standard SPSA:</span>
                  <span className="text-theme-muted">Noise-tolerant, but slower convergence.</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-theme-highlight/50 border border-theme-accent/40">
                  <span className="font-bold text-theme-accent">SPSA-GC (Ours):</span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-300">Matches true-gradient SGD-NAG stability.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-theme-muted font-mono flex items-center justify-between">
              <span>Noise Model: <Equation math="\epsilon \sim \mathcal{N}(0, \text{scale}^2)" block={false} /></span>
              <span>Dim: <Equation math="\theta \in \mathbb{R}^{100}" block={false} /></span>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-theme-accent bg-theme-card shadow-slide-card text-xs space-y-2 flex-1 flex flex-col justify-center">
            <span className="font-bold text-theme-accent flex items-center gap-1.5 uppercase tracking-wider pb-1 border-b border-theme-border">
              <Zap className="w-4 h-4" /> Real-World API Query Efficiency (Fig. 7)
            </span>
            <ul className="space-y-2 text-theme-secondary pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-theme-accent mt-0.5 flex-shrink-0" />
                <span><strong>10K Queries (~$12 USD):</strong> On Clarifai Vision API pricing, BlackVIP nearly doubles Zero-Shot accuracy.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-theme-accent mt-0.5 flex-shrink-0" />
                <span><strong>Look-Ahead Correction:</strong> NAG momentum dampens random perturbation spikes across mini-batches.</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-3 rounded-xl border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0">
        <span className="flex items-center gap-2">
          <ArrowDownRight className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>
            <strong>Key Result:</strong> SPSA-GC bridges the gap to first-order SGD-NAG while staying robust under noisy loss evaluations.
          </span>
        </span>
        <span className="text-[11px] font-mono text-theme-accent font-semibold whitespace-nowrap ml-0 sm:ml-4 self-end sm:self-auto">Figure 3 &amp; Figure 7</span>
      </motion.div>
    </motion.div>
  );
};
