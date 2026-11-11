import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { ComparisonCard } from '../components/ComparisonCard';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Cpu, Sliders, Lock, ArrowRight, AlertTriangle } from 'lucide-react';

export const Slide02Motivation: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between"
    >
      <div>
        <SectionLabel part="Part 1" section="Motivation & Background" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Research Motivation: Adapting Foundation Models
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-theme-secondary mt-1 max-w-3xl">
          Vision foundation models are growing exponentially in scale. How do we transfer them to specialized downstream tasks when parameters are inaccessible?
        </motion.p>
      </div>

      {/* Central 3-Way Paradigm Comparison */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        <ComparisonCard
          title="Full Fine-Tuning"
          badge="White-Box Heavy"
          badgeVariant="neutral"
          icon={Cpu}
          points={[
            "Updates all weights (100M - 1B+ params).",
            "Requires substantial GPU memory & backprop.",
            "Risk of catastrophic forgetting on small datasets.",
            "Requires full white-box access to network weights.",
          ]}
          footerNote="Impractical for locked/proprietary APIs."
        />

        <ComparisonCard
          title="Parameter-Efficient (PEFT)"
          badge="White-Box Light"
          badgeVariant="secondary"
          icon={Sliders}
          points={[
            "Inserts adapters, LoRA, or prefix tokens.",
            "Updates only 1-5% of total parameters.",
            "Reduces storage and adaptation overhead.",
            "Still strictly requires internal gradient backprop.",
          ]}
          footerNote="Infeasible when model internals are concealed."
        />

        <ComparisonCard
          title="Black-Box Adaptation"
          badge="Zero-Access (BlackVIP)"
          badgeVariant="accent"
          icon={Lock}
          isFocal={true}
          points={[
            "Weights, gradients & architectures remain untouched.",
            "Interacts purely via forward queries and loss feedback.",
            "Essential for MLaaS APIs, edge IP, and privacy.",
            "Challenge: Optimization without backpropagation.",
          ]}
          footerNote="Core focus of BlackVIP (CVPR 2023)."
        />
      </motion.div>

      {/* Key Takeaway Banner */}
      <motion.div
        variants={fadeUp}
        className="p-4 rounded-xl bg-theme-card border border-theme-border flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-theme-primary">
              The Real-World Dilemma
            </p>
            <p className="text-xs text-theme-secondary">
              High-performing foundation models are increasingly served as black-box APIs (e.g. OpenAI CLIP, Cloud Vision). White-box fine-tuning is impossible in this regime.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-theme-accent whitespace-nowrap">
          <span>Solution: Visual Prompting</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </motion.div>
    </motion.div>
  );
};

