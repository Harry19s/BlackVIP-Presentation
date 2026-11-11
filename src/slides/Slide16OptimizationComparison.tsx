import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
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
          Optimization Algorithm Convergence Comparison
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-4xl">
          Empirically contrasting SPSA-GC with competing zeroth-order optimization baselines across query budgets and downstream loss convergence.
        </motion.p>
      </div>

      {/* Grid: Figure Placeholder + Detailed Analysis */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left: Original Paper Convergence Figure Placeholder */}
        <div className="md:col-span-6 flex flex-col justify-between">
          <ImagePlaceholder
            figure={paperFigures.optimizationComparison}
            aspectRatio="16 / 10"
            className="h-full justify-between"
          />
        </div>

        {/* Right: Comparative Breakdown */}
        <div className="md:col-span-6 flex flex-col justify-between gap-3">
          {/* Method Comparison Card */}
          <div className="p-4 rounded-xl border border-theme-border bg-theme-card text-xs space-y-2 flex-1 flex flex-col justify-between">
            <div>
              <span className="font-bold text-theme-primary flex items-center gap-1.5 uppercase tracking-wider text-xs pb-1 border-b border-theme-border">
                <LineChart className="w-4 h-4 text-theme-accent" /> Convergence Dynamics Across ZOO Algorithms
              </span>
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-900 border border-theme-border/60">
                  <span className="font-semibold text-theme-secondary">ZO-SGD:</span>
                  <span className="text-theme-muted">High loss oscillations; slow descent per query count.</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-900 border border-theme-border/60">
                  <span className="font-semibold text-theme-secondary">Standard SPSA:</span>
                  <span className="text-rose-600 dark:text-rose-400">Steady initial progress, but plateaus early due to variance.</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-theme-highlight/50 border border-theme-accent/40">
                  <span className="font-bold text-theme-accent">SPSA-GC (Proposed):</span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-300">Fastest monotonic descent & lowest terminal loss.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-theme-muted font-mono flex items-center justify-between">
              <span>Query Budget: Standardized</span>
              <span>Metric: Negative Log-Likelihood Loss</span>
            </div>
          </div>

          {/* Theoretical vs Empirical Alignment */}
          <div className="p-4 rounded-xl border border-theme-accent bg-theme-card shadow-slide-card text-xs space-y-2 flex-1">
            <span className="font-bold text-theme-accent flex items-center gap-1.5 uppercase tracking-wider text-xs pb-1 border-b border-theme-border">
              <Zap className="w-4 h-4" /> Why SPSA-GC Outperforms
            </span>
            <ul className="space-y-2 text-theme-secondary pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-theme-accent mt-0.5 flex-shrink-0" />
                <span><strong>Look-Ahead Damping:</strong> The Nesterov anticipation prevents the optimizer from taking wild excursions along noisy instantaneous gradient spikes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-theme-accent mt-0.5 flex-shrink-0" />
                <span><strong>Momentum Smoothing:</strong> Moving averages of gradients cancel out zero-mean orthogonal noise components over iterations.</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-3 rounded-xl border border-theme-border flex items-center justify-between">
        <span className="flex items-center gap-2">
          <ArrowDownRight className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>
            <strong>Key Result: </strong> SPSA-GC consistently reaches target transfer accuracy in <strong>30-40% fewer forward model queries</strong> compared to standard SPSA.
          </span>
        </span>
        <span className="text-[11px] font-mono text-theme-muted whitespace-nowrap ml-4">Figure 4 in original paper</span>
      </motion.div>
    </motion.div>
  );
};
