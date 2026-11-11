import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { Equation } from '../components/Equation';
import { ComparisonCard } from '../components/ComparisonCard';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Activity, GitCommit, CheckCircle2, ShieldAlert } from 'lucide-react';

export const Slide08ZOO: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between"
    >
      <div>
        <SectionLabel part="Part 3" section="Optimization Theory" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Zeroth-Order Optimization (ZOO) Fundamentals
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-theme-secondary mt-1 max-w-3xl">
          Estimating descent directions solely by perturbing parameters and querying loss values.
        </motion.p>
      </div>

      {/* Comparison Cards: FO vs ZO */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
        <ComparisonCard
          title="First-Order Optimization (FOO)"
          badge="Standard Backprop"
          badgeVariant="neutral"
          icon={Activity}
          points={[
            "Relies on analytic gradients: g = nabla_phi L(phi).",
            "Calculated via exact reverse-mode automatic differentiation.",
            "Requires reading/storing intermediate layer activations.",
            "Strictly fails when target model parameters or graphs are sealed.",
          ]}
          footerNote="Standard in SGD, Adam, AdamW, RMSProp."
        />

        <ComparisonCard
          title="Zeroth-Order Optimization (ZOO)"
          badge="Black-Box Gradient-Free"
          badgeVariant="accent"
          icon={GitCommit}
          isFocal={true}
          points={[
            "Relies exclusively on scalar loss evaluations: L(phi + delta).",
            "No backpropagation through model layers or network weights.",
            "Approximates gradient via finite difference or randomized sampling.",
            "Enables optimization over arbitrary non-differentiable or black-box oracles.",
          ]}
          footerNote="Theoretical foundation for SPSA and BlackVIP."
        />
      </motion.div>

      {/* Mathematical Intuition */}
      <motion.div
        variants={fadeUp}
        className="p-4 rounded-xl bg-theme-card border border-theme-border flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-theme-accent">
            Finite Difference Principle
          </span>
          <p className="text-xs text-theme-secondary">
            In 1D calculus, derivative is defined by limits of difference quotients. ZOO generalizes this to high-dimensional parameter spaces via stochastic perturbations:
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-theme-border flex-shrink-0">
          <Equation math="\hat{g}(\phi) \approx \frac{\mathcal{L}(\phi + c \cdot u) - \mathcal{L}(\phi - c \cdot u)}{2c} \cdot u" block={false} />
        </div>
      </motion.div>
    </motion.div>
  );
};

