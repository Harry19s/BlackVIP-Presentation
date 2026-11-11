import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { AlertTriangle, TrendingDown, RefreshCw, ZapOff } from 'lucide-react';

export const Slide11SPSALimitations: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between"
    >
      <div>
        <SectionLabel part="Part 4" section="Optimization Analysis" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Limitations of Standard SPSA in Deep Networks
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-theme-secondary mt-1 max-w-3xl">
          While SPSA guarantees unbiased estimates in expectation, its instantaneous variance poses severe challenges in high dimensions.
        </motion.p>
      </div>

      {/* Main Analysis Grid */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
        {/* Core Bottlenecks Cards */}
        <div className="md:col-span-6 space-y-3.5">
          <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20 text-xs text-theme-secondary space-y-1.5">
            <span className="font-bold text-rose-700 dark:text-rose-300 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <ZapOff className="w-4 h-4" /> 1. Extreme Gradient Estimation Noise
            </span>
            <p>
              Sampling a single random vector <span className="font-mono text-theme-primary">&Delta;_i</span> per step creates severe variance. The instantaneous estimate can point at large angles away from the true steepest descent direction.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/20 text-xs text-theme-secondary space-y-1.5">
            <span className="font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" /> 2. Minibatch Sampling Noise
            </span>
            <p>
              In deep learning, loss evaluations occur on stochastic mini-batches <span className="font-mono text-theme-primary">&#123;(x_b, y_b)&#125;</span>. Minibatch variance compounds with the perturbation variance, inducing heavy oscillation.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-theme-border bg-theme-card text-xs text-theme-secondary space-y-1.5">
            <span className="font-bold text-theme-primary flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <RefreshCw className="w-4 h-4 text-theme-accent" /> 3. Slow Convergence in Non-Convex Ravines
            </span>
            <p>
              In ill-conditioned or ravined loss surfaces, high variance forces tiny learning rates, resulting in sluggish convergence and wasted oracle queries.
            </p>
          </div>
        </div>

        {/* Conceptual Trajectory Comparison Graphic */}
        <div className="md:col-span-6 p-6 rounded-2xl bg-theme-card border border-theme-border shadow-slide-card flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-3 pb-2 border-b border-theme-border">
            <span className="text-xs font-bold uppercase tracking-wider text-theme-muted flex items-center gap-1.5">
              <TrendingDown className="w-4 h-4 text-theme-accent" /> Loss Surface Trajectory
            </span>
            <span className="text-[10px] font-mono bg-theme-highlight px-2 py-0.5 rounded text-theme-accent">
              Conceptual Illustration
            </span>
          </div>

          {/* SVG Diagram showing smooth vs erratic trajectory */}
          <div className="w-full h-52 bg-white dark:bg-slate-900 rounded-xl border border-theme-border p-4 relative flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 300 160" className="w-full h-full">
              {/* Contour ellipses for loss landscape */}
              <ellipse cx="230" cy="110" rx="90" ry="45" fill="none" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeWidth="1.5" />
              <ellipse cx="230" cy="110" rx="60" ry="30" fill="none" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeWidth="1.5" />
              <ellipse cx="230" cy="110" rx="30" ry="15" fill="none" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="1.5" />
              <circle cx="230" cy="110" r="4" fill="#0D9488" />
              <text x="240" y="114" className="text-[9px] fill-current text-emerald-600 font-mono font-bold">Optimum &phi;*</text>

              {/* Start point */}
              <circle cx="40" cy="30" r="4" fill="#2563EB" />
              <text x="25" y="20" className="text-[9px] fill-current text-blue-600 font-mono font-bold">Start &phi;_0</text>

              {/* Ideal smooth path (Dashed Green) */}
              <path
                d="M 40 30 Q 140 40 230 110"
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
                strokeDasharray="4 3"
              />

              {/* Erratic Standard SPSA trajectory (Solid Red/Orange) */}
              <path
                d="M 40 30 L 65 60 L 50 85 L 95 70 L 80 120 L 130 95 L 115 135 L 170 120 L 155 150 L 210 130 L 230 110"
                fill="none"
                stroke="#EF4444"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="w-full mt-3 flex items-center justify-between text-xs font-mono">
            <span className="text-rose-500 font-semibold flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-rose-500 inline-block" /> Standard SPSA (High Variance)
            </span>
            <span className="text-emerald-500 font-semibold flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-emerald-500 border-t border-dashed inline-block" /> Ideal Trajectory
            </span>
          </div>
        </div>
      </motion.div>

      {/* Transition Question */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-2.5 rounded-lg border border-theme-border flex items-center justify-between">
        <span>
          <strong className="text-theme-primary">The Key Question: </strong>
          How can we reduce this variance and accelerate descent without paying for additional oracle queries?
        </span>
        <span className="text-theme-accent font-semibold ml-4">&rarr; Nesterov Look-Ahead</span>
      </motion.div>
    </motion.div>
  );
};

