import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { ComparisonCard } from '../components/ComparisonCard';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Cpu, Sliders, Lock, ArrowRight, AlertTriangle, Database, Shield, Zap } from 'lucide-react';

export const Slide02Motivation: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between gap-4"
    >
      <div>
        <SectionLabel part="Part 1" section="Motivation & Background" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Research Motivation: Adapting Foundation Models
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-4xl">
          Vision foundation models are scaling into billions of parameters and increasingly deployed behind opaque API endpoints. How do we adapt them to specialized domains without internal weight or gradient access?
        </motion.p>
      </div>

      {/* Central 3-Way Paradigm Comparison (Expanded & Vertically Stretched) */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1 items-stretch">
        <ComparisonCard
          title="Full Fine-Tuning"
          badge="White-Box Heavy"
          badgeVariant="neutral"
          icon={Cpu}
          points={[
            "Updates 100% of network parameters (100M - 1B+ weights).",
            "Requires immense GPU VRAM to maintain optimizer states & backward activations.",
            "High risk of catastrophic forgetting on small target datasets.",
            "Strictly requires full access to model source code, layers, and weights.",
            "Impractical for commercial cloud APIs or intellectual property-protected models.",
          ]}
          footerNote="Query / Storage Cost: Extremely High &bull; Gradient Access: Mandatory"
          className="h-full justify-between"
        />

        <ComparisonCard
          title="Parameter-Efficient (PEFT)"
          badge="White-Box Light"
          badgeVariant="secondary"
          icon={Sliders}
          points={[
            "Inserts lightweight adapters, LoRA matrices, or prefix prompt tokens.",
            "Updates only 0.5% - 5% of parameters while freezing backbone weights.",
            "Substantially reduces adaptation storage and cross-task switching overhead.",
            "Still fundamentally requires backward automatic differentiation through layers.",
            "Infeasible when models are served as closed black-box endpoints or compiled binaries.",
          ]}
          footerNote="Query / Storage Cost: Moderate &bull; Gradient Access: Mandatory"
          className="h-full justify-between"
        />

        <ComparisonCard
          title="Black-Box Adaptation"
          badge="Zero-Access (BlackVIP)"
          badgeVariant="accent"
          icon={Lock}
          isFocal={true}
          points={[
            "Zero modification of model weights, internal layers, or architecture graphs.",
            "Interacts with target foundation models purely via forward query inputs and loss feedback.",
            "Preserves user privacy, proprietary IP, and supports remote MLaaS vision APIs.",
            "Eliminates catastrophic forgetting by leaving pre-trained features completely intact.",
            "Core Challenge: High-dimensional optimization without backpropagation.",
          ]}
          footerNote="Query / Storage Cost: Minimal &bull; Gradient Access: Strictly Zero"
          className="h-full justify-between"
        />
      </motion.div>

      {/* Real-World Dilemma & Industry Context Footer */}
      <motion.div
        variants={fadeUp}
        className="p-3.5 rounded-xl bg-theme-card border border-theme-border flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex-shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <p className="font-bold text-theme-primary">
              The Real-World Dilemma: Foundation Models As A Service (MLaaS)
            </p>
            <p className="text-theme-secondary mt-0.5">
              Providers expose only REST APIs or input/output pipelines. Traditional backprop is impossible; input-space visual prompting is the only viable transfer mechanism.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0 text-xs font-semibold">
          <span className="px-2.5 py-1 rounded-lg bg-theme-highlight text-theme-accent border border-theme-accent/20 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" /> Solution: Visual Prompting
          </span>
          <ArrowRight className="w-4 h-4 text-theme-accent" />
        </div>
      </motion.div>
    </motion.div>
  );
};
