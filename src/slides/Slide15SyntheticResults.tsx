import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { paperFigures } from '../data/paperFigures';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { ShieldAlert, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export const Slide15SyntheticResults: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between gap-4"
    >
      <div>
        <SectionLabel part="Part 5" section="Experimental Evaluation" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Results on Synthetic Datasets: Biased-MNIST & Loc-MNIST
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-4xl">
          Testing whether black-box visual prompts rely on spurious background shortcuts or genuine object morphology under severe distribution shifts.
        </motion.p>
      </div>

      {/* Grid: Paper Figure Placeholder + Empirical Insights */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left: Original Paper Figure Placeholder */}
        <div className="md:col-span-6 flex flex-col justify-between">
          <ImagePlaceholder
            figure={paperFigures.syntheticResults}
            aspectRatio="16 / 10"
            className="h-full justify-between"
          />
        </div>

        {/* Right: Key Empirical Observations */}
        <div className="md:col-span-6 flex flex-col justify-between gap-3">
          <div className="p-4 rounded-xl border border-theme-border bg-theme-card text-xs space-y-2 flex-1">
            <span className="font-bold text-theme-primary flex items-center gap-1.5 text-xs uppercase tracking-wider pb-1 border-b border-theme-border">
              <ShieldAlert className="w-4 h-4 text-theme-accent" /> The Spurious Correlation Stress Test
            </span>
            <p className="text-theme-secondary leading-relaxed">
              In <strong>Biased-MNIST</strong>, digits are intentionally correlated with background colors during training (e.g. 99% of '0's have red backgrounds). At test time, colors are randomized to expose shortcut learning.
            </p>
            <p className="text-theme-secondary leading-relaxed">
              In <strong>Loc-MNIST</strong>, digits are randomly shifted across the image canvas to stress-test spatial translation invariance.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-950/20 text-xs space-y-2 flex-1">
            <span className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 text-xs uppercase tracking-wider pb-1 border-b border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-4 h-4" /> Key Findings from the Paper
            </span>
            <ul className="space-y-2 text-theme-secondary">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong>Linear Probing collapses: </strong> Memorizes spurious color shortcuts and drops catastrophically under extreme 99.9% correlation bias.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong>BlackVIP maintains high accuracy: </strong> The visual prompt counterbalances background color shift, acting as an input-level domain normalizer.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong>Spatial Invariance: </strong> On Loc-MNIST, BlackVIP matches white-box visual prompting performance without gradient access.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-3 rounded-xl border border-theme-border flex items-center justify-between">
        <span className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-theme-accent flex-shrink-0" />
          <span>
            <strong>Key Takeaway: </strong> BlackVIP prevents models from latching onto brittle shortcuts, demonstrating superior intrinsic robustness to distribution corruptions.
          </span>
        </span>
        <span className="text-[11px] font-mono text-theme-accent font-semibold whitespace-nowrap ml-4">
          Figure 3 & Table 1 in paper
        </span>
      </motion.div>
    </motion.div>
  );
};
