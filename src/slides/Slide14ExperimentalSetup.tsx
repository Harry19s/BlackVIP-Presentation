import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { ComparisonCard } from '../components/ComparisonCard';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Database, Cpu, Sliders, Layers } from 'lucide-react';

export const Slide14ExperimentalSetup: React.FC = () => {
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
          Experimental Setup & Evaluation Protocol
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-theme-secondary mt-1 max-w-3xl">
          Comprehensive empirical testing across synthetic benchmarks, real-world transfer datasets, and out-of-distribution shifts.
        </motion.p>
      </div>

      {/* 4 Overview Cards */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-auto">
        <ComparisonCard
          title="Datasets & Benchmarks"
          badge="14+ Tasks"
          badgeVariant="neutral"
          icon={Database}
          points={[
            "Synthetic: Biased-MNIST (color bias), Loc-MNIST (position shift).",
            "Natural: CIFAR-100, DTD, Flowers102, SVHN, Food101, EuroSAT.",
            "Robustness: ImageNet-C, ImageNet-R (corruptions & style shifts).",
          ]}
          footerNote="Spans diverse vision domains."
        />

        <ComparisonCard
          title="Backbone Vision Models"
          badge="Zero Access"
          badgeVariant="accent"
          icon={Cpu}
          points={[
            "CLIP (ViT-B/16, ViT-B/32): Multi-modal vision-language foundation.",
            "DINO (ViT-B/16): Self-supervised transformer backbone.",
            "MoCo-v3 & ResNet-50: Contrastive and convolutional baselines.",
          ]}
          footerNote="All backbone weights strictly frozen."
        />

        <ComparisonCard
          title="Compared Baselines"
          badge="SOTA Methods"
          badgeVariant="secondary"
          icon={Sliders}
          points={[
            "Zero-Shot: Untuned foundation model baseline.",
            "Linear Probing: Training linear classifier head.",
            "White-Box VP: Bahng et al. (with backprop).",
            "Alternative ZOO: Standard SPSA, RDSA, and ZO-SGD.",
          ]}
          footerNote="Direct peer comparisons."
        />

        <ComparisonCard
          title="Evaluation Regimes"
          badge="Rigorous"
          badgeVariant="success"
          icon={Layers}
          points={[
            "Full Downstream Transfer: Target dataset accuracy.",
            "Few-Shot Adaptation: 1-shot, 5-shot, and 10-shot samples.",
            "Out-of-Distribution: Robustness to spurious correlation.",
            "Query Budget: Convergence per oracle evaluation count.",
          ]}
          footerNote="Standardized experimental protocol."
        />
      </motion.div>

      {/* Implementation Details */}
      <motion.div variants={fadeUp} className="p-3.5 rounded-xl bg-theme-card border border-theme-border text-xs text-theme-secondary flex items-center justify-between">
        <div>
          <strong className="text-theme-primary">Coordinator Default Configuration: </strong>
          Frozen DINO ViT-B/16 encoder with lightweight convolutional transpose decoder; trigger vector dimension <span className="font-mono text-theme-accent font-semibold">d_t = 512</span>.
        </div>
        <span className="text-[11px] font-mono text-theme-muted">CVPR 2023 Protocol</span>
      </motion.div>
    </motion.div>
  );
};

