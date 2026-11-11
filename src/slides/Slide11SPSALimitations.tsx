import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { Equation } from '../components/Equation';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { AlertTriangle, TrendingDown, RefreshCw, ZapOff, ArrowRight } from 'lucide-react';

export const Slide11SPSALimitations: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between gap-4"
    >
      <div>
        <SectionLabel part="Part 4" section="Optimization Analysis" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Limitations of Standard SPSA in Deep Networks
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-4xl">
          While SPSA guarantees unbiased estimates in expectation, its instantaneous variance creates severe oscillations and slow convergence in high dimensions.
        </motion.p>
      </div>

      {/* Main Analysis Grid */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Core Bottlenecks Cards */}
        <div className="md:col-span-6 flex flex-col justify-between gap-3">
          <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20 text-xs text-theme-secondary space-y-1.5 flex-1">
            <span className="font-bold text-rose-700 dark:text-rose-300 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <ZapOff className="w-4 h-4" /> 1. Extreme Gradient Estimation Variance
            </span>
            <p className="leading-relaxed">
              Sampling only a single random perturbation vector <Equation math="\Delta_i" block={false} /> per step introduces high stochastic variance. The instantaneous gradient estimate can point at large angles away from true steepest descent.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/20 text-xs text-theme-secondary space-y-1.5 flex-1">
            <span className="font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" /> 2. Compounded Minibatch Data Noise
            </span>
            <p className="leading-relaxed">
              In deep learning, loss evaluations occur over stochastic mini-batches <Equation math="\{(x_b, y_b)\}" block={false} />. Minibatch variation compounds with parameter perturbation variance, leading to erratic loss trajectories.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-theme-border bg-theme-card text-xs text-theme-secondary space-y-1.5 flex-1">
            <span className="font-bold text-theme-primary flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <RefreshCw className="w-4 h-4 text-theme-accent" /> 3. Sluggish Descent in Non-Convex Ravines
            </span>
            <p className="leading-relaxed">
              In ill-conditioned or ravined neural loss surfaces, high variance forces practitioners to adopt tiny learning rates, squandering expensive forward oracle queries.
            </p>
          </div>
        </div>

        {/* Conceptual Trajectory Comparison Graphic */}
        <div className="md:col-span-6 p-6 rounded-2xl bg-theme-card border border-theme-border shadow-slide-card flex flex-col justify-between items-center">
          <div className="w-full flex items-center justify-between pb-2 border-b border-theme-border">
            <span className="text-xs font-bold uppercase tracking-wider text-theme-muted flex items-center gap-1.5">
              <TrendingDown className="w-4 h-4 text-theme-accent" /> Loss Surface Optimization Trajectory
            </span>
            <span className="text-[10px] font-mono bg-theme-highlight px-2 py-0.5 rounded text-theme-accent">
              Conceptual Illustration
            </span>
          </div>

          {/* SVG Diagram showing smooth vs erratic trajectory */}
          <div className="w-full h-56 bg-white dark:bg-slate-900 rounded-xl border border-theme-border p-4 relative flex items-center justify-center overflow-hidden my-auto">
            <svg viewBox="0 0 300 160" className="w-full h-full">
              {/* Contour ellipses for loss landscape */}
              <ellipse cx="230" cy="110" rx="90" ry="45" fill="none" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeWidth="1.5" />
              <ellipse cx="230" cy="110" rx="60" ry="30" fill="none" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeWidth="1.5" />
              <ellipse cx="230" cy="110" rx="30" ry="15" fill="none" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="1.5" />
              <circle cx="230" cy="110" r="5" fill="#0D9488" />
              <foreignObject x="238" y="98" width="100" height="24">
                <div className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                  <span>Optimum</span>
                  <Equation math="\phi^*" block={false} />
                </div>
              </foreignObject>

              {/* Start point */}
              <circle cx="40" cy="30" r="5" fill="#2563EB" />
              <foreignObject x="10" y="8" width="80" height="24">
                <div className="flex items-center gap-1 text-[10px] text-blue-600 dark:text-blue-400 font-bold">
                  <span>Start</span>
                  <Equation math="\phi_0" block={false} />
                </div>
              </foreignObject>

              {/* Ideal smooth path (Dashed Green) */}
              <path
                d="M 40 30 Q 140 40 230 110"
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
                strokeDasharray="4 3"
              />

              {/* Erratic Standard SPSA trajectory (Solid Red) */}
              <path
                d="M 40 30 L 65 60 L 50 85 L 95 70 L 80 120 L 130 95 L 115 135 L 170 120 L 155 150 L 210 130 L 230 110"
                fill="none"
                stroke="#EF4444"
                strokeWidth="2.2"
              />
            </svg>
          </div>

          <div className="w-full pt-2 border-t border-theme-border/60 flex items-center justify-between text-xs font-mono">
            <span className="text-rose-500 font-bold flex items-center gap-1.5">
              <span className="w-3.5 h-1 bg-rose-500 inline-block rounded" /> Standard SPSA (High Oscillation)
            </span>
            <span className="text-emerald-500 font-bold flex items-center gap-1.5">
              <span className="w-3.5 h-1 bg-emerald-500 border-t-2 border-dashed inline-block" /> Ideal Trajectory
            </span>
          </div>
        </div>
      </motion.div>

      {/* Transition Banner */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-3 rounded-xl border border-theme-border flex items-center justify-between">
        <span>
          <strong className="text-theme-primary">The Core Question: </strong>
          How can we reduce this variance and accelerate descent without paying for additional oracle queries?
        </span>
        <span className="text-theme-accent font-semibold flex items-center gap-1">
          <span>Nesterov Momentum Look-Ahead</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </motion.div>
    </motion.div>
  );
};
