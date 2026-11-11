import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { paperFigures } from '../data/paperFigures';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Shield, Sparkles, Award } from 'lucide-react';

export const Slide17Robustness: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between"
    >
      <div>
        <SectionLabel part="Part 5" section="Experimental Evaluation" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Robustness & Few-Shot Transfer Learning
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-theme-secondary mt-1 max-w-3xl">
          Evaluating model behavior under out-of-distribution domain corruptions and extreme sample scarcity.
        </motion.p>
      </div>

      {/* Grid: Figure Placeholder + Insights */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
        {/* Left: Original Paper Robustness Figure Placeholder */}
        <div className="md:col-span-6">
          <ImagePlaceholder
            figure={paperFigures.robustnessShift}
            aspectRatio="16 / 10"
          />
        </div>

        {/* Right: Key Performance Findings */}
        <div className="md:col-span-6 space-y-3.5">
          {/* OOD Robustness Card */}
          <div className="p-4 rounded-xl border border-theme-border bg-theme-card text-xs space-y-2">
            <span className="font-bold text-theme-primary flex items-center gap-1.5 uppercase tracking-wider text-xs">
              <Shield className="w-4 h-4 text-theme-accent" /> Out-of-Distribution (OOD) Robustness
            </span>
            <p className="text-theme-secondary leading-relaxed">
              When tested on corrupted benchmarks (ImageNet-C weather, blur, and noise corruptions), <strong>BlackVIP exhibits significantly less accuracy degradation</strong> than full fine-tuning.
            </p>
            <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[11px] text-emerald-800 dark:text-emerald-200">
              Preserving frozen backbone weights avoids catastrophic forgetting of natural invariant features learned during web-scale pre-training.
            </div>
          </div>

          {/* Few-Shot Adaptation Card */}
          <div className="p-4 rounded-xl border border-theme-accent bg-theme-card shadow-slide-card text-xs space-y-2">
            <span className="font-bold text-theme-accent flex items-center gap-1.5 uppercase tracking-wider text-xs">
              <Sparkles className="w-4 h-4" /> Few-Shot Adaptation (1, 5, 10-shot)
            </span>
            <p className="text-theme-secondary leading-relaxed">
              In low-data regimes where target labels are scarce, full fine-tuning severely overfits within a few epochs. BlackVIP:
            </p>
            <ul className="space-y-1 text-theme-secondary">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-theme-accent" />
                <span>Consistently outperforms linear probing across 1-shot and 5-shot splits.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-theme-accent" />
                <span>Approaches white-box visual prompting accuracy without computing backprop gradients.</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-2.5 rounded-lg border border-theme-border flex items-center gap-2">
        <Award className="w-4 h-4 text-theme-accent flex-shrink-0" />
        <span>
          <strong>Core Conclusion: </strong> BlackVIP provides a dual advantage: robust out-of-distribution generalization and high data-efficiency under strict black-box access constraints.
        </span>
      </motion.div>
    </motion.div>
  );
};

