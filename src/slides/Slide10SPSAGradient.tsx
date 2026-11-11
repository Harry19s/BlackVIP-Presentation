import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { Equation } from '../components/Equation';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Calculator, ArrowRight, CheckCheck, Lightbulb } from 'lucide-react';

export const Slide10SPSAGradient: React.FC = () => {
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
          SPSA: Gradient Estimation & Parameter Update
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-theme-secondary mt-1 max-w-3xl">
          Constructing the simultaneous gradient vector from scalar loss evaluations.
        </motion.p>
      </div>

      {/* Main Equations */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto">
        {/* Left Column: Mathematical Formulation */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-5 rounded-xl border border-theme-accent bg-theme-card shadow-slide-card space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5">
              <Calculator className="w-4 h-4" /> Gradient Estimator Formula
            </span>

            <Equation
              math="\hat{g}_i(\phi_i) = \frac{\mathcal{L}(\phi_i + c_i \Delta_i) - \mathcal{L}(\phi_i - c_i \Delta_i)}{2 c_i \Delta_i}"
              block={true}
              highlight={true}
            />

            <span className="text-xs font-bold uppercase tracking-wider text-theme-primary flex items-center gap-1.5 mt-4">
              <ArrowRight className="w-4 h-4 text-theme-accent" /> Parameter Update Step
            </span>

            <Equation
              math="\phi_{i+1} = \phi_i - a_i \hat{g}_i(\phi_i)"
              block={true}
            />

            <div className="text-xs text-theme-secondary space-y-1.5 pt-2 border-t border-theme-border/60">
              <p>
                <strong>Component-wise division: </strong>
                Each element <Equation math="k" block={false} /> of <Equation math="\hat{g}_i" block={false} /> is divided by <Equation math="2 c_i \Delta_{i,k}" block={false} />. Since <Equation math="\Delta_{i,k} \in \{\pm 1\}" block={false} />, this is equivalent to multiplication by <Equation math="\Delta_{i,k}" block={false} />.
              </p>
              <p>
                <strong>Learning rate: </strong>
                <Equation math="a_i > 0" block={false} /> follows standard Robbins-Monro conditions <Equation math="\sum a_i = \infty, \sum a_i^2 < \infty" block={false} />.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Educational Illustrative Example */}
        <div className="lg:col-span-6 p-5 rounded-2xl bg-theme-card border border-theme-border shadow-slide-card space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-theme-border">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4" /> Educational Step-by-Step Example
            </span>
            <span className="text-[10px] font-mono bg-amber-100 dark:bg-amber-950/60 px-2 py-0.5 rounded text-amber-800 dark:text-amber-200">
              Toy Concept &bull; Not Paper Data
            </span>
          </div>

          <div className="space-y-2 text-xs text-theme-secondary">
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-theme-border/80 flex items-center justify-between">
              <span>1. Current Parameter:</span>
              <Equation math="\phi_i = [1.0, 2.0]^T" block={false} />
            </div>

            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-theme-border/80 flex items-center justify-between">
              <span>2. Perturbation with <Equation math="c_i = 0.1, \Delta_i = [+1, -1]^T" block={false} />:</span>
              <span className="font-mono text-theme-primary">[+0.1, -0.1]</span>
            </div>

            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-theme-border/80 flex items-center justify-between">
              <span>3. Evaluate Losses:</span>
              <span className="font-mono text-theme-accent">L(+) = 0.85, L(-) = 0.75</span>
            </div>

            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-theme-border/80 flex items-center justify-between">
              <span>4. Loss Difference:</span>
              <Equation math="\Delta \mathcal{L} = 0.85 - 0.75 = 0.10" block={false} />
            </div>

            <div className="p-2.5 rounded-lg bg-theme-highlight border border-theme-accent/30 flex items-center justify-between font-bold text-theme-accent">
              <span>5. Gradient Estimate:</span>
              <Equation math="\hat{g}_i = \frac{0.10}{0.2} \times [+1, -1]^T = [+0.5, -0.5]^T" block={false} />
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-[11px] text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
            <CheckCheck className="w-4 h-4 flex-shrink-0" />
            <span>Notice: Only 2 scalar queries generated gradient estimates across all coordinates!</span>
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/60 p-2.5 rounded-lg border border-theme-border">
        The expectation <Equation math="\mathbb{E}[\hat{g}_i(\phi_i) \mid \phi_i] = \nabla \mathcal{L}(\phi_i) + \mathcal{O}(c_i^2)" block={false} /> proves asymptotic unbiasedness as <Equation math="c_i \to 0" block={false} />.
      </motion.div>
    </motion.div>
  );
};

