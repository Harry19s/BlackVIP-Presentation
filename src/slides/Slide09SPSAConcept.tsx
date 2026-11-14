import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { Equation } from '../components/Equation';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Shuffle, ArrowUpRight, ArrowDownLeft, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Slide09SPSAConcept: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between gap-4"
    >
      <div>
        <SectionLabel part="Part 3" section="SPSA Optimization" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          SPSA: Simultaneous Perturbation Concept
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-4xl">
          Simultaneous Perturbation Stochastic Approximation (Spall, 1992): Why evaluate coordinate-by-coordinate when you can perturb all parameters simultaneously with only 2 queries?
        </motion.p>
      </div>

      {/* Main Equations and Visual Diagram */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left Column: Equations & Definitions */}
        <div className="md:col-span-6 flex flex-col justify-between gap-3">
          <div className="p-4 rounded-2xl border border-theme-accent bg-theme-card shadow-slide-card flex-1 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5 pb-2 border-b border-theme-border">
                <Zap className="w-4 h-4" /> Dual Perturbation Points
              </span>

              <p className="text-xs text-theme-secondary leading-relaxed mt-2">
                At iteration <Equation math="i" block={false} />, generate a random perturbation vector <Equation math="\Delta_i \in \mathbb{R}^D" block={false} /> with entries drawn independently from a symmetric Bernoulli distribution:
              </p>

              <Equation math="\Delta_{i,k} \in \{-1, +1\} \quad \text{with equal probability } 0.5" block={true} />

              <div className="space-y-2 mt-2">
                <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-theme-border">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Positive Point:</span>
                  <Equation math="\phi_i^+ = \phi_i + c_i \Delta_i" block={false} />
                </div>

                <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-theme-border">
                  <span className="text-xs font-bold text-rose-600 dark:text-rose-400">Negative Point:</span>
                  <Equation math="\phi_i^- = \phi_i - c_i \Delta_i" block={false} />
                </div>
              </div>
            </div>

            <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-theme-border/80 text-[11px] text-theme-secondary">
              Perturbation scale schedule: <Equation math="c_i = c / i^\gamma" block={false} /> where <Equation math="\gamma \approx 0.101" block={false} /> guarantees asymptotic zero-bias convergence.
            </div>
          </div>

          <div className="p-3 rounded-xl bg-theme-highlight/40 border border-theme-accent/30 text-xs text-theme-secondary flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0" />
            <span>
              <strong>Constant Query Complexity: </strong> Standard finite differences require <Equation math="2D" block={false} /> loss queries. SPSA requires <strong>exactly 2 queries</strong> regardless of parameter dimension <Equation math="D" block={false} />!
            </span>
          </div>
        </div>

        {/* Right Column: Conceptual Vector Diagram */}
        <div className="md:col-span-6 p-6 rounded-2xl bg-theme-card border border-theme-border shadow-slide-card flex flex-col justify-between items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-theme-muted mb-2 flex items-center gap-1.5 pb-2 border-b border-theme-border w-full justify-between">
            <span className="flex items-center gap-1.5">
              <Shuffle className="w-4 h-4 text-theme-accent" /> Geometric Perturbation in Parameter Space
            </span>
            <span className="font-mono text-[10px] text-theme-accent">2-Point Oracle</span>
          </span>

          {/* Animated 2D Parameter Perturbation Visualization */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-white dark:bg-slate-900 border border-theme-border p-4 flex items-center justify-center shadow-inner my-auto">
            {/* Center Parameter Point */}
            <motion.div
              className="absolute w-5 h-5 rounded-full bg-theme-accent ring-4 ring-theme-highlight z-20 flex items-center justify-center"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="absolute -bottom-6 text-xs font-bold text-theme-primary whitespace-nowrap bg-theme-card px-2 py-0.5 rounded shadow-xs border flex items-center gap-1">
                <Equation math="\phi_i" block={false} />
                <span className="text-[10px] font-sans text-theme-muted font-normal">(Current)</span>
              </span>
            </motion.div>

            {/* Positive Perturbation Vector */}
            <motion.div
              className="absolute top-4 right-4 flex flex-col items-center bg-emerald-500/10 border border-emerald-500/30 p-2 rounded-xl backdrop-blur-xs shadow-xs"
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-emerald-200" />
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                  <Equation math="\phi_i^+ \to \mathcal{L}^+" block={false} />
                </span>
              </div>
              <div className="text-[11px] text-emerald-700 dark:text-emerald-300 font-mono font-medium">
                <Equation math="+ c_i \Delta_i" block={false} />
              </div>
            </motion.div>

            {/* Negative Perturbation Vector */}
            <motion.div
              className="absolute bottom-4 left-4 flex flex-col items-center bg-rose-500/10 border border-rose-500/30 p-2 rounded-xl backdrop-blur-xs shadow-xs"
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="w-3.5 h-3.5 rounded-full bg-rose-500 ring-2 ring-rose-200" />
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 whitespace-nowrap">
                  <Equation math="\phi_i^- \to \mathcal{L}^-" block={false} />
                </span>
              </div>
              <div className="text-[11px] text-rose-700 dark:text-rose-300 font-mono font-medium">
                <Equation math="- c_i \Delta_i" block={false} />
              </div>
            </motion.div>

            {/* Connecting Dashed Axis */}
            <div className="absolute inset-8 border border-dashed border-slate-300 dark:border-slate-700 rounded-full opacity-40 pointer-events-none" />
            <div className="w-full h-0.5 bg-gradient-to-r from-rose-400 via-theme-accent to-emerald-400 transform rotate-45 opacity-60" />
          </div>

          <div className="mt-2 flex items-center justify-around w-full text-xs font-mono pt-2 border-t border-theme-border/60">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="font-sans text-[11px] uppercase tracking-wide">Query 1:</span>
              <Equation math="\mathcal{L}(\phi_i^+)" block={false} />
            </span>
            <span className="text-theme-muted font-bold">&bull;</span>
            <span className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1.5">
              <span className="font-sans text-[11px] uppercase tracking-wide">Query 2:</span>
              <Equation math="\mathcal{L}(\phi_i^-)" block={false} />
            </span>
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-3 rounded-xl border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0">
        <span>
          Because all entries of <Equation math="\Delta_i" block={false} /> are perturbed simultaneously, SPSA probes the global gradient direction in expectation, achieving an unbiased estimator of <Equation math="\nabla \mathcal{L}(\phi_i)" block={false} />.
        </span>
        <span className="text-[11px] font-mono text-theme-accent font-semibold whitespace-nowrap ml-0 sm:ml-4 self-end sm:self-auto">
          Spall (1992) Proof
        </span>
      </motion.div>
    </motion.div>
  );
};
