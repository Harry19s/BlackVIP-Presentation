import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { Equation } from '../components/Equation';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Shuffle, ArrowUpRight, ArrowDownLeft, Zap } from 'lucide-react';

export const Slide09SPSAConcept: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between"
    >
      <div>
        <SectionLabel part="Part 3" section="SPSA Optimization" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          SPSA: Simultaneous Perturbation Concept
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-theme-secondary mt-1 max-w-3xl">
          Why evaluate coordinate-by-coordinate when you can perturb all parameters simultaneously with only 2 queries?
        </motion.p>
      </div>

      {/* Main Equations and Visual Diagram */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
        {/* Left Column: Equations & Definitions */}
        <div className="md:col-span-6 space-y-4">
          <div className="p-4 rounded-xl border border-theme-accent bg-theme-card shadow-slide-card space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5">
              <Zap className="w-4 h-4" /> Dual Perturbation Points
            </span>

            <p className="text-xs text-theme-secondary leading-relaxed">
              At iteration <Equation math="i" block={false} />, generate a random perturbation vector <Equation math="\Delta_i" block={false} /> with entries drawn independently from a symmetric Bernoulli distribution <Equation math="\{\pm 1\}" block={false} />:
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-theme-border">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 w-24">Positive:</span>
                <Equation math="\phi_i^+ = \phi_i + c_i \Delta_i" block={false} />
              </div>

              <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-theme-border">
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 w-24">Negative:</span>
                <Equation math="\phi_i^- = \phi_i - c_i \Delta_i" block={false} />
              </div>
            </div>

            <p className="text-[11px] text-theme-muted">
              Here, <Equation math="c_i > 0" block={false} /> is the perturbation scale schedule, typically decaying as <Equation math="c_i = c / i^\gamma" block={false} />.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-theme-card/60 border border-theme-border text-xs text-theme-secondary">
            <strong className="text-theme-primary">Constant Query Complexity: </strong>
            Standard finite differences need <Equation math="2D" block={false} /> loss queries per step. SPSA needs <strong>exactly 2 queries</strong> regardless of whether <Equation math="D = 10" block={false} /> or <Equation math="D = 100{,}000" block={false} />!
          </div>
        </div>

        {/* Right Column: Conceptual Vector Diagram */}
        <div className="md:col-span-6 p-6 rounded-2xl bg-theme-card border border-theme-border shadow-slide-card flex flex-col items-center justify-center relative">
          <span className="text-xs font-bold uppercase tracking-wider text-theme-muted mb-4 flex items-center gap-1.5">
            <Shuffle className="w-4 h-4 text-theme-accent" /> Geometric Perturbation in Parameter Space
          </span>

          {/* Animated 2D Parameter Perturbation Visualization */}
          <div className="relative w-64 h-64 rounded-xl bg-white dark:bg-slate-900 border border-theme-border p-4 flex items-center justify-center shadow-inner">
            {/* Center Parameter Point */}
            <motion.div
              className="absolute w-4 h-4 rounded-full bg-theme-accent ring-4 ring-theme-highlight z-20 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="absolute -bottom-5 text-xs font-mono font-bold text-theme-primary whitespace-nowrap">
                &phi;_i (Current)
              </span>
            </motion.div>

            {/* Positive Perturbation Vector */}
            <motion.div
              className="absolute top-8 right-8 flex flex-col items-center"
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-emerald-200" />
              <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-1 whitespace-nowrap">
                &phi;^+ &rarr; Loss \mathcal&#123;L&#125;^+
              </span>
              <div className="text-[10px] text-theme-muted">+ c_i &Delta;_i</div>
            </motion.div>

            {/* Negative Perturbation Vector */}
            <motion.div
              className="absolute bottom-8 left-8 flex flex-col items-center"
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-rose-500 ring-2 ring-rose-200" />
              <span className="text-[11px] font-mono font-bold text-rose-600 dark:text-rose-400 mt-1 whitespace-nowrap">
                &phi;^- &rarr; Loss \mathcal&#123;L&#125;^-
              </span>
              <div className="text-[10px] text-theme-muted">- c_i &Delta;_i</div>
            </motion.div>

            {/* Connecting Dashed Axis */}
            <div className="absolute inset-8 border border-dashed border-slate-300 dark:border-slate-700 rounded-full opacity-40 pointer-events-none" />
            <div className="w-full h-0.5 bg-gradient-to-r from-rose-400 via-theme-accent to-emerald-400 transform rotate-45 opacity-60" />
          </div>

          <div className="mt-4 flex items-center justify-around w-full text-xs font-mono">
            <span className="text-emerald-600 font-semibold">Query 1: \mathcal&#123;L&#125;(\phi_i^+)</span>
            <span className="text-theme-muted">vs</span>
            <span className="text-rose-600 font-semibold">Query 2: \mathcal&#123;L&#125;(\phi_i^-)</span>
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/60 p-2.5 rounded-lg border border-theme-border">
        Because all entries of <Equation math="\Delta_i" block={false} /> are perturbed simultaneously, SPSA probes the global gradient direction in expectation, achieving an unbiased estimator of <Equation math="\nabla \mathcal{L}(\phi_i)" block={false} />.
      </motion.div>
    </motion.div>
  );
};

