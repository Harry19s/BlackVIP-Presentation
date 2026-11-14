import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { Equation } from '../components/Equation';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Calculator, ArrowRight, CheckCheck, Lightbulb, Zap } from 'lucide-react';

export const Slide10SPSAGradient: React.FC = () => {
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
          SPSA: Gradient Estimation & Parameter Update
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-4xl">
          Constructing the simultaneous gradient vector from scalar loss evaluations and advancing the parameter state.
        </motion.p>
      </div>

      {/* Main Equations Grid */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left Column: Mathematical Formulation */}
        <div className="lg:col-span-6 flex flex-col justify-between p-5 rounded-2xl border border-theme-accent bg-theme-card shadow-slide-card">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5 pb-2 border-b border-theme-border">
              <Calculator className="w-4 h-4" /> Gradient Estimator Formula
            </span>

            <p className="text-xs text-theme-secondary my-2">
              The simultaneous gradient estimator evaluates the difference quotient across all coordinates:
            </p>

            <Equation
              math="\hat{g}_i(\phi_i) = \frac{\mathcal{L}(\phi_i + c_i \Delta_i) - \mathcal{L}(\phi_i - c_i \Delta_i)}{2 c_i \Delta_i}"
              block={true}
              highlight={true}
            />

            <span className="text-xs font-bold uppercase tracking-wider text-theme-primary flex items-center gap-1.5 mt-3 pt-2 border-t border-theme-border/60">
              <ArrowRight className="w-4 h-4 text-theme-accent" /> Standard Parameter Update Step
            </span>

            <Equation
              math="\phi_{i+1} = \phi_i - a_i \hat{g}_i(\phi_i)"
              block={true}
            />
          </div>

          <div className="text-xs text-theme-secondary space-y-2 pt-2 border-t border-theme-border/60">
            <p>
              <strong className="text-theme-primary">Component-wise division: </strong>
              Each element <Equation math="k" block={false} /> of <Equation math="\hat{g}_i" block={false} /> is divided by <Equation math="2 c_i \Delta_{i,k}" block={false} />. Since <Equation math="\Delta_{i,k} \in \{\pm 1\}" block={false} />, this is computationally equivalent to multiplying the scalar loss difference by <Equation math="\Delta_{i,k}" block={false} />.
            </p>
            <p>
              <strong className="text-theme-primary">Learning rate schedule: </strong>
              <Equation math="a_i = a / (i + A)^\alpha" block={false} /> satisfies standard Robbins-Monro convergence criteria.
            </p>
          </div>
        </div>

        {/* Right Column: Educational Illustrative Example */}
        <div className="lg:col-span-6 p-5 rounded-2xl bg-theme-card border border-theme-border shadow-slide-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-theme-border">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4" /> Step-by-Step Educational Example
              </span>
              <span className="text-[10px] font-mono bg-amber-100 dark:bg-amber-950/60 px-2 py-0.5 rounded text-amber-800 dark:text-amber-200">
                Conceptual Demonstration
              </span>
            </div>

            <div className="space-y-2 text-xs text-theme-secondary mt-3">
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0">
                <span>1. Current Parameter Point:</span>
                <Equation math="\phi_i = [1.0, 2.0]^T" block={false} />
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0">
                <span>2. Perturbation (<Equation math="c_i = 0.1, \Delta_i = [+1, -1]^T" block={false} />):</span>
                <span className="font-mono text-theme-primary font-semibold">[+0.1, -0.1]</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0">
                <span>3. Forward Oracle Evaluations:</span>
                <span className="font-mono text-theme-accent font-semibold">L(+) = 0.85 &bull; L(-) = 0.75</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0">
                <span>4. Scalar Loss Difference:</span>
                <Equation math="\Delta \mathcal{L} = 0.85 - 0.75 = 0.10" block={false} />
              </div>

              <div className="p-2.5 rounded-xl bg-theme-highlight border border-theme-accent/30 flex items-center justify-between font-bold text-theme-accent">
                <span>5. Estimated Gradient:</span>
                <Equation math="\hat{g}_i = \frac{0.10}{0.2} \times [+1, -1]^T = [+0.5, -0.5]^T" block={false} />
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2 mt-3">
            <CheckCheck className="w-4 h-4 flex-shrink-0" />
            <span>Notice: Only 2 scalar queries generated simultaneous gradient estimates across all coordinates!</span>
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-3 rounded-xl border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0">
        <span>
          The mathematical expectation <Equation math="\mathbb{E}[\hat{g}_i(\phi_i) \mid \phi_i] = \nabla \mathcal{L}(\phi_i) + \mathcal{O}(c_i^2)" block={false} /> guarantees unbiasedness as <Equation math="c_i \to 0" block={false} />.
        </span>
        <span className="text-[11px] font-mono text-theme-accent font-semibold whitespace-nowrap ml-0 sm:ml-4 self-end sm:self-auto">
          Second-order Taylor expansion bound
        </span>
      </motion.div>
    </motion.div>
  );
};
