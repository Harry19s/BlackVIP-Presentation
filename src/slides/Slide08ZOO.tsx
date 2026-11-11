import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { Equation } from '../components/Equation';
import { ComparisonCard } from '../components/ComparisonCard';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Activity, GitCommit, CheckCircle2, ShieldAlert, Table } from 'lucide-react';

export const Slide08ZOO: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between gap-4"
    >
      <div>
        <SectionLabel part="Part 3" section="Optimization Theory" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Zeroth-Order Optimization (ZOO) Fundamentals
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-4xl">
          Estimating mathematical descent directions solely by perturbing parameters and querying loss values without backpropagation.
        </motion.p>
      </div>

      {/* Comparison Cards: FO vs ZO */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 items-stretch">
        <ComparisonCard
          title="First-Order Optimization (FOO)"
          badge="Standard Backprop"
          badgeVariant="neutral"
          icon={Activity}
          points={[
            <span key="1">
              Relies on exact analytic gradients: <Equation math="g = \nabla_\phi \mathcal{L}(\phi)" block={false} highlight={true} className="text-xs" />.
            </span>,
            "Calculated via exact reverse-mode automatic differentiation.",
            "Requires reading/storing intermediate layer activations across all layers.",
            "Memory complexity scales with network depth and batch size.",
            "Strictly fails when target model parameters or computational graphs are sealed.",
          ]}
          footerNote="Standard in SGD, Adam, AdamW &bull; Queries: 1 Forward + 1 Backward"
          className="h-full justify-between"
        />

        <ComparisonCard
          title="Zeroth-Order Optimization (ZOO)"
          badge="Black-Box Gradient-Free"
          badgeVariant="accent"
          icon={GitCommit}
          isFocal={true}
          points={[
            <span key="1">
              Relies exclusively on scalar loss evaluations: <Equation math="\mathcal{L}(\phi \pm \delta)" block={false} highlight={true} className="text-xs" />.
            </span>,
            "No backpropagation through model layers or network weights.",
            "Approximates gradient via finite difference or randomized simultaneous sampling.",
            "Memory complexity is completely independent of target model depth.",
            "Enables optimization over arbitrary non-differentiable or black-box oracles.",
          ]}
          footerNote="Theoretical foundation for SPSA and BlackVIP &bull; Queries: Forward Passes Only"
          className="h-full justify-between"
        />
      </motion.div>

      {/* Mathematical Intuition & Query Complexity Breakdown */}
      <motion.div
        variants={fadeUp}
        className="p-3.5 rounded-xl bg-theme-card border border-theme-border flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-theme-accent">
            Finite Difference Approximation
          </span>
          <p className="text-xs text-theme-secondary">
            ZOO probes directional derivatives along perturbation direction <Equation math="u" block={false} /> with step size <Equation math="c > 0" block={false} />:
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-theme-border flex-shrink-0 shadow-xs">
          <Equation math="\hat{g}(\phi) \approx \frac{\mathcal{L}(\phi + c \cdot u) - \mathcal{L}(\phi - c \cdot u)}{2c} \cdot u" block={false} highlight={true} />
        </div>
      </motion.div>
    </motion.div>
  );
};
