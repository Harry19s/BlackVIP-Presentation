import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { Equation } from '../components/Equation';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Eye, EyeOff, Lock, HelpCircle } from 'lucide-react';

export const Slide04ProblemFormulation: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between"
    >
      <div>
        <SectionLabel part="Part 1" section="Problem Formulation" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Black-Box Visual Prompting: Problem Formulation
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-theme-secondary mt-1 max-w-3xl">
          Mathematically formalizing adaptation when the vision model acts as a closed forward oracle.
        </motion.p>
      </div>

      {/* Visual Comparison: Open White-Box vs Sealed Black-Box */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
        {/* White-Box Setting */}
        <div className="p-5 rounded-xl border border-theme-border bg-theme-card/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-theme-border/60">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-theme-secondary" />
                <h3 className="font-bold text-base text-theme-primary">White-Box Visual Prompting</h3>
              </div>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-theme-secondary">
                Full Gradient Access
              </span>
            </div>

            <p className="text-xs text-theme-secondary mb-3">
              Standard backpropagation computes analytic gradients through all layers:
            </p>

            <Equation math="\nabla_\phi \mathcal{L} = \frac{\partial \mathcal{L}}{\partial f} \cdot \frac{\partial f}{\partial v} \cdot \frac{\partial v}{\partial \phi}" block={true} />

            <ul className="space-y-1.5 text-xs text-theme-secondary mt-3">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>Requires full knowledge of computational graph & layer activations.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>Allows standard first-order optimizers (SGD, AdamW).</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-[11px] text-theme-muted font-mono text-center">
            &nabla; Backpropagation Enabled &bull; Full Model Introspection
          </div>
        </div>

        {/* Black-Box Setting */}
        <div className="p-5 rounded-xl border border-theme-accent bg-theme-card flex flex-col justify-between shadow-slide-card ring-1 ring-theme-accent/20">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-theme-border/60">
              <div className="flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-theme-accent" />
                <h3 className="font-bold text-base text-theme-primary">Black-Box Visual Prompting</h3>
              </div>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-theme-highlight text-theme-accent">
                Zero Gradient Access
              </span>
            </div>

            <p className="text-xs text-theme-secondary mb-3">
              Target model <Equation math="f_{\text{target}}" block={false} /> is a sealed oracle. Optimization must be gradient-free:
            </p>

            <Equation
              math="\min_{\phi} \mathbb{E}_{(x,y) \sim \mathcal{D}_{\text{down}}} \left[ \mathcal{L}\left( f_{\text{target}}(x + v(x; \phi)), y \right) \right]"
              block={true}
              highlight={true}
            />

            <ul className="space-y-1.5 text-xs text-theme-secondary mt-3">
              <li className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-theme-accent flex-shrink-0" />
                <span>Zero access to parameters <Equation math="\theta_{\text{target}}" block={false} />, architecture, or internal activations.</span>
              </li>
              <li className="flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-theme-accent flex-shrink-0" />
                <span>Only forward loss evaluations <Equation math="\mathcal{L}(\cdot)" block={false} /> or output logits are observable.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 p-2.5 rounded-lg bg-theme-highlight text-[11px] text-theme-accent font-semibold font-mono text-center">
            &cross; Backprop Blocked &bull; Must Estimate Search Direction via Queries
          </div>
        </div>
      </motion.div>

      {/* The Core Question */}
      <motion.div
        variants={fadeUp}
        className="p-3.5 rounded-xl bg-theme-card border border-theme-border text-xs text-theme-secondary flex items-center justify-between"
      >
        <span>
          <strong className="text-theme-primary">The Core Challenge: </strong>
          Input pixel space is huge (e.g. <Equation math="224 \times 224 \times 3 \approx 150\text{k}" block={false} /> dimensions). How can we optimize prompt parameters with only scalar loss feedback?
        </span>
        <span className="text-theme-accent font-semibold whitespace-nowrap ml-4">
          &rarr; Reparameterization + SPSA
        </span>
      </motion.div>
    </motion.div>
  );
};

