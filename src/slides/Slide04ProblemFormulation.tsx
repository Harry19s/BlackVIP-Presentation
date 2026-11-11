import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { Equation } from '../components/Equation';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Eye, EyeOff, Lock, CheckCircle2, XCircle, ShieldAlert } from 'lucide-react';

export const Slide04ProblemFormulation: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between gap-4"
    >
      <div>
        <SectionLabel part="Part 1" section="Problem Formulation" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Black-Box Visual Prompting: Problem Formulation
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-4xl">
          Formalizing adaptation when the vision model acts as a closed forward oracle: no parameter reading, no backpropagation, and strictly scalar evaluation feedback.
        </motion.p>
      </div>

      {/* Visual Comparison: Open White-Box vs Sealed Black-Box */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 items-stretch">
        {/* White-Box Setting */}
        <div className="p-5 rounded-xl border border-theme-border bg-theme-card/60 flex flex-col justify-between shadow-slide-card">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-theme-border/60">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-theme-secondary" />
                <h3 className="font-bold text-base text-theme-primary">White-Box Visual Prompting</h3>
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-theme-secondary">
                Full Gradient Access
              </span>
            </div>

            <p className="text-xs text-theme-secondary mb-2">
              Analytic gradients computed via reverse-mode automatic differentiation:
            </p>

            <Equation
              math="\nabla_\phi \mathcal{L} = \frac{\partial \mathcal{L}}{\partial f_{\text{target}}} \cdot \frac{\partial f_{\text{target}}}{\partial v} \cdot \frac{\partial v}{\partial \phi}"
              block={true}
            />

            <ul className="space-y-2 text-xs text-theme-secondary mt-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                <span>Full access to computational graph, layer activations, and model parameters <Equation math="\theta" block={false} />.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                <span>Enables classical first-order optimizers (SGD, AdamW) with single-pass exact gradients.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                <span><strong>Fundamental Flaw:</strong> Completely fails when models are hosted on remote APIs or locked binaries.</span>
              </li>
            </ul>
          </div>

          <div className="mt-3 p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-[11px] text-theme-muted font-mono text-center flex items-center justify-center gap-1.5">
            <Equation math="\nabla" block={false} />
            <span>Backpropagation Required &bull; Full Model Introspection</span>
          </div>
        </div>

        {/* Black-Box Setting */}
        <div className="p-5 rounded-xl border border-theme-accent bg-theme-card flex flex-col justify-between shadow-slide-card ring-1 ring-theme-accent/20">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-theme-border/60">
              <div className="flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-theme-accent" />
                <h3 className="font-bold text-base text-theme-primary">Black-Box Visual Prompting (BlackVIP)</h3>
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-theme-highlight text-theme-accent">
                Zero Gradient Access
              </span>
            </div>

            <p className="text-xs text-theme-secondary mb-2">
              Target model <Equation math="f_{\text{target}}" block={false} /> is an impenetrable oracle. Optimization objective:
            </p>

            <Equation
              math="\min_{\phi} \mathbb{E}_{(x,y) \sim \mathcal{D}_{\text{down}}} \left[ \mathcal{L}\left( f_{\text{target}}(x + v(x; \phi)), y \right) \right]"
              block={true}
              highlight={true}
            />

            <ul className="space-y-2 text-xs text-theme-secondary mt-3">
              <li className="flex items-start gap-2">
                <Lock className="w-4 h-4 text-theme-accent mt-0.5 flex-shrink-0" />
                <span>Zero knowledge of model weights, layer architectures, or hidden activations.</span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="w-4 h-4 text-theme-accent mt-0.5 flex-shrink-0" />
                <span>Only forward evaluation scores <Equation math="\mathcal{L}(\hat{y}, y)" block={false} /> or output probabilities are returned.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span><strong>The BlackVIP Advantage:</strong> Universally compatible with any vision model, local or cloud-hosted.</span>
              </li>
            </ul>
          </div>

          <div className="mt-3 p-2.5 rounded-lg bg-theme-highlight text-[11px] text-theme-accent font-semibold font-mono text-center">
            &cross; Backprop Blocked &bull; Must Estimate Search Direction via Queries
          </div>
        </div>
      </motion.div>

      {/* The Core Challenge Banner */}
      <motion.div
        variants={fadeUp}
        className="p-3.5 rounded-xl bg-theme-card border border-theme-border text-xs text-theme-secondary flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-500 flex-shrink-0" />
          <span>
            <strong className="text-theme-primary">The Core Challenge: </strong>
            Input pixel space is massive (<Equation math="224 \times 224 \times 3 \approx 150{,}528" block={false} /> dimensions). Direct finite differences require millions of API calls.
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="font-semibold text-theme-accent">Solution: Coordinator + SPSA-GC</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
