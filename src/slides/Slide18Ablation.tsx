import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { paperFigures } from '../data/paperFigures';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { SlidersHorizontal, CheckCircle2, Layers } from 'lucide-react';

export const Slide18Ablation: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between"
    >
      <div>
        <SectionLabel part="Part 5" section="Ablation Analysis" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Ablation Study: Dissecting BlackVIP Components
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-theme-secondary mt-1 max-w-3xl">
          Isolating the empirical contributions of the Coordinator, SSL encoder, trigger vector, and optimization scheme.
        </motion.p>
      </div>

      {/* Grid: Paper Figure Placeholder + Ablation Breakdown */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
        {/* Left: Original Paper Ablation Placeholder */}
        <div className="md:col-span-6">
          <ImagePlaceholder
            figure={paperFigures.ablationStudy}
            aspectRatio="16 / 10"
          />
        </div>

        {/* Right: Structured Ablation Findings */}
        <div className="md:col-span-6 space-y-3.5">
          {/* Ablation Table Breakdown */}
          <div className="p-4 rounded-xl border border-theme-border bg-theme-card text-xs space-y-2.5">
            <span className="font-bold text-theme-primary flex items-center gap-1.5 uppercase tracking-wider text-xs">
              <SlidersHorizontal className="w-4 h-4 text-theme-accent" /> Key Ablation Insights (CVPR 2023)
            </span>

            <div className="space-y-2 pt-1">
              <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-theme-border/60">
                <span className="font-bold text-rose-600 dark:text-rose-400 block mb-0.5">
                  1. Without Coordinator (Raw Pixel Optimization):
                </span>
                <span className="text-theme-muted">
                  Optimization completely stalls. Direct pixel search in 150K dimensions produces near zero-shot random walk.
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-theme-border/60">
                <span className="font-bold text-theme-primary block mb-0.5">
                  2. SSL Encoder Choice (DINO vs MAE):
                </span>
                <span className="text-theme-secondary">
                  DINO outperforms MAE. DINO features capture explicit semantic boundaries and class-aware segmentations, which guide prompt generation far more effectively.
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-theme-highlight/40 border border-theme-accent/30">
                <span className="font-bold text-theme-accent block mb-0.5">
                  3. Impact of Trigger Vector &phi;_t:
                </span>
                <span className="text-theme-secondary">
                  Removing &phi;_t drops target transfer performance by 4-8%, confirming that the prompt requires both global task identity and local image context.
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-2.5 rounded-lg border border-theme-border flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0" />
        <span>
          <strong>Architectural Validation: </strong> Every architectural design choice in BlackVIP is empirically justified: the Coordinator provides parameter efficiency, DINO provides semantic priors, and SPSA-GC provides convergence stability.
        </span>
      </motion.div>
    </motion.div>
  );
};

