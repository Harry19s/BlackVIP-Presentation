import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { Equation } from '../components/Equation';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { GitPullRequest, ArrowRight, ShieldCheck, Zap, Layers, RefreshCw } from 'lucide-react';

export const Slide13SPSAGC: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between gap-4"
    >
      <div>
        <SectionLabel part="Part 4" section="Core Algorithmic Contribution" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          SPSA with Gradient Correction (SPSA-GC)
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-4xl">
          Fusing simultaneous zeroth-order perturbation with Nesterov-style look-ahead momentum correction to achieve accelerated, stable black-box transfer learning.
        </motion.p>
      </div>

      {/* Main Algorithm & Mathematical Equations Grid */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left Column: The 3 Core Equations */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-2.5">
          {/* Step 1 */}
          <div className="p-3.5 rounded-xl border border-theme-border bg-theme-card flex items-center justify-between gap-4 flex-1">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-theme-accent">
                Step 1: Look-Ahead Projection
              </span>
              <p className="text-xs text-theme-secondary">
                Project parameters forward along current momentum vector <Equation math="m_i" block={false} /> with decay factor <Equation math="\beta \in (0, 1)" block={false} />:
              </p>
            </div>
            <Equation math="\phi_i^{\text{lookahead}} = \phi_i + \beta m_i" block={false} highlight={true} className="text-xs flex-shrink-0" />
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl border border-theme-accent bg-theme-card shadow-slide-card flex flex-col justify-between gap-2 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> Step 2: SPSA Estimate at Look-Ahead & Momentum Update
              </span>
              <span className="text-[10px] font-mono bg-theme-highlight px-2 py-0.5 rounded text-theme-accent font-semibold">
                Only 2 Forward Passes
              </span>
            </div>
            <p className="text-xs text-theme-secondary">
              Perturb around look-ahead point <Equation math="\phi_i^{\text{lookahead}}" block={false} /> to compute <Equation math="\hat{g}_i(\phi_i^{\text{lookahead}})" block={false} />, then update momentum:
            </p>
            <Equation
              math="m_{i+1} = \beta m_i - a_i \hat{g}_i\left(\phi_i + \beta m_i\right)"
              block={true}
              highlight={true}
            />
          </div>

          {/* Step 3 */}
          <div className="p-3.5 rounded-xl border border-theme-border bg-theme-card flex items-center justify-between gap-4 flex-1">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Step 3: Corrected Parameter Update
              </span>
              <p className="text-xs text-theme-secondary">
                Advance parameters by the corrected momentum vector:
              </p>
            </div>
            <Equation math="\phi_{i+1} = \phi_i + m_{i+1}" block={false} className="text-xs flex-shrink-0 font-bold" />
          </div>
        </div>

        {/* Right Column: Comparative Summary */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-theme-card border border-theme-border shadow-slide-card flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-theme-primary flex items-center gap-1.5 pb-2 border-b border-theme-border">
              <GitPullRequest className="w-4 h-4 text-theme-accent" /> Standard SPSA vs SPSA-GC
            </span>

            <div className="space-y-3 text-xs text-theme-secondary mt-3">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-theme-border/60">
                <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Standard SPSA</span>
                <div className="my-1.5">
                  <Equation math="\phi_{i+1} = \phi_i - a_i \hat{g}_i(\phi_i)" block={false} className="text-xs font-semibold" />
                </div>
                <span className="text-[11px] text-rose-600 dark:text-rose-400 block mt-1">
                  High variance; updates follow noisy instantaneous random perturbations.
                </span>
              </div>

              <div className="p-3 rounded-xl bg-theme-highlight/40 border border-theme-accent/30">
                <span className="font-bold text-theme-accent block mb-1">SPSA-GC (BlackVIP)</span>
                <div className="my-1.5">
                  <Equation math="\phi_{i+1} = \phi_i + \beta m_i - a_i \hat{g}_i(\phi_i + \beta m_i)" block={false} highlight={true} className="text-xs font-bold" />
                </div>
                <span className="text-[11px] text-emerald-700 dark:text-emerald-300 block mt-1">
                  Momentum buffer dampens noise; look-ahead prevents oscillation overshoots.
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-theme-border/80 text-[11px] text-theme-secondary flex items-start gap-2 mt-3">
            <ShieldCheck className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
            <span>
              <strong>Crucial Property: </strong> SPSA-GC maintains identical query complexity (2 queries/step) while offering empirical stability in high-dimensional prompt search.
            </span>
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-3 rounded-xl border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0">
        <span>
          <strong className="text-theme-primary">Theoretical Rigor: </strong>
          SPSA-GC does not alter the black-box boundary: the target vision model is queried only for forward evaluations, while the optimizer updates the Coordinator weights and trigger vector.
        </span>
        <span className="text-[11px] font-mono text-theme-accent font-semibold whitespace-nowrap ml-0 sm:ml-4 self-end sm:self-auto">
          O(1) query cost per iteration
        </span>
      </motion.div>
    </motion.div>
  );
};
