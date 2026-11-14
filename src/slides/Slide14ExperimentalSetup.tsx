import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { ComparisonCard } from '../components/ComparisonCard';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Database, Cpu, Sliders, Layers, CheckCircle2 } from 'lucide-react';

export const Slide14ExperimentalSetup: React.FC = () => {
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
          Experimental Setup &amp; Evaluation Protocol
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-3xl">
          Evaluated across 14 diverse transfer benchmarks, 2 synthetic stress tests, and 100D Rosenbrock optimization.
        </motion.p>
      </div>

      {/* 4 Compact Overview Cards */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 items-stretch">
        <ComparisonCard
          title="Datasets"
          badge="14 + 2 Tasks"
          badgeVariant="neutral"
          icon={Database}
          points={[
            "14 Transfer Benchmarks: Caltech, Pets, Cars, Flowers, Food, Aircraft, SUN, DTD.",
            "Structured & Scene: SVHN, EuroSAT, RESISC45, CLEVR, UCF101, ImageNet.",
            "2 Synthetic: Biased-MNIST (color shift) & Loc-MNIST (edge location).",
          ]}
          footerNote="Sec. 5.1 & Table 3"
          className="h-full justify-between"
        />

        <ComparisonCard
          title="Target & Encoder"
          badge="Black-Box PTM"
          badgeVariant="accent"
          icon={Cpu}
          points={[
            "Default Target PTM: CLIP ViT-B/16 (zero-shot text-image classifier).",
            "Backbone Ablation: RN50, RN101, ViT-B/32, ViT-B/16 (Table 5).",
            "Coordinator Encoder: Frozen ImageNet vit-mae-base (MAE).",
          ]}
          footerNote="Target weights strictly frozen"
          className="h-full justify-between"
        />

        <ComparisonCard
          title="Baselines"
          badge="Fair Budgets"
          badgeVariant="secondary"
          icon={Sliders}
          points={[
            "ZS: CLIP Zero-Shot classifier baseline.",
            "BAR: Black-box Adversarial Reprogramming (37K params).",
            "VP w/ SPSA-GC: Frame prompt (69K params) + SPSA-GC.",
            "White-Box Upper Bounds: VP, LP, and Full Fine-Tuning (FT).",
          ]}
          footerNote="Tables 2, 3 & 4"
          className="h-full justify-between"
        />

        <ComparisonCard
          title="Evaluation Protocol"
          badge="16-Shot Default"
          badgeVariant="success"
          icon={Layers}
          points={[
            "Few-Shot Split: 16-shot training, full test set (3 repeated runs).",
            "Synthetic Regimes: 16-shot & 32-shot under ρ ∈ {0.8, 0.9} & 1:1 / 1:4.",
            "Efficiency Metrics: Peak memory (MB), params, API queries & cost.",
          ]}
          footerNote="CVPR 2023 Protocol"
          className="h-full justify-between"
        />
      </motion.div>

      {/* Implementation Details Banner */}
      <motion.div variants={fadeUp} className="p-3.5 rounded-xl bg-theme-card border border-theme-border text-xs text-theme-secondary flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0" />
          <span>
            <strong className="text-theme-primary">Coordinator Default: </strong>
            Frozen <span className="font-mono text-theme-accent font-semibold">vit-mae-base</span> encoder + lightweight decoder &rarr; only <strong className="text-theme-primary">9K learnable parameters</strong> (Table 4).
          </span>
        </div>
        <span className="text-[11px] font-mono text-theme-muted whitespace-nowrap">Section 5.1 &amp; Table 4</span>
      </motion.div>
    </motion.div>
  );
};
