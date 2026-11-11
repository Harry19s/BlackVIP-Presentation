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
          Experimental Setup & Evaluation Protocol
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-4xl">
          Comprehensive empirical testing across synthetic benchmarks, real-world transfer datasets, and out-of-distribution shifts.
        </motion.p>
      </div>

      {/* 4 Expanded Overview Cards */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 items-stretch">
        <ComparisonCard
          title="Datasets & Benchmarks"
          badge="14+ Tasks"
          badgeVariant="neutral"
          icon={Database}
          points={[
            "Synthetic: Biased-MNIST (color bias), Loc-MNIST (spatial shift).",
            "Natural Vision: CIFAR-100, DTD, Flowers102, SVHN, Food101, EuroSAT.",
            "Specialized: Oxford-Pets, Stanford Cars, Caltech-101.",
            "Robustness: ImageNet-C, ImageNet-R (corruptions & distribution shifts).",
          ]}
          footerNote="Diverse vision domains & modalities."
          className="h-full justify-between"
        />

        <ComparisonCard
          title="Backbone Vision Models"
          badge="Zero Access"
          badgeVariant="accent"
          icon={Cpu}
          points={[
            "CLIP (ViT-B/16, ViT-B/32): Multi-modal text-image foundation.",
            "DINO (ViT-B/16): Self-supervised transformer representations.",
            "MoCo-v3: Contrastive self-supervised visual backbone.",
            "ResNet-50: Standard convolutional architecture baseline.",
          ]}
          footerNote="All target backbone weights strictly frozen."
          className="h-full justify-between"
        />

        <ComparisonCard
          title="Compared Baselines"
          badge="SOTA Methods"
          badgeVariant="secondary"
          icon={Sliders}
          points={[
            "Zero-Shot: Untuned foundation model inference baseline.",
            "Linear Probing: Training linear classifier head on frozen features.",
            "White-Box VP: Bahng et al. (with backprop gradient access).",
            "Alternative ZOO: Standard SPSA, RDSA, and ZO-SGD.",
          ]}
          footerNote="Direct peer comparisons across identical budgets."
          className="h-full justify-between"
        />

        <ComparisonCard
          title="Evaluation Regimes"
          badge="Rigorous"
          badgeVariant="success"
          icon={Layers}
          points={[
            "Standard Transfer: Target dataset classification accuracy.",
            "Few-Shot Adaptation: 1-shot, 5-shot, and 10-shot samples per class.",
            "Distribution Shifts: Robustness under 99% correlation bias.",
            "Query Efficiency: Accuracy trajectory per oracle evaluation count.",
          ]}
          footerNote="Standardized CVPR 2023 evaluation protocol."
          className="h-full justify-between"
        />
      </motion.div>

      {/* Implementation Details Banner */}
      <motion.div variants={fadeUp} className="p-3.5 rounded-xl bg-theme-card border border-theme-border text-xs text-theme-secondary flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0" />
          <span>
            <strong className="text-theme-primary">Coordinator Default Configuration: </strong>
            Frozen DINO ViT-B/16 encoder with lightweight convolutional transpose decoder; trigger vector dimension <span className="font-mono text-theme-accent font-semibold">d_t = 512</span>. Total trainable parameters: ~180K.
          </span>
        </div>
        <span className="text-[11px] font-mono text-theme-muted whitespace-nowrap">CVPR 2023 Protocol</span>
      </motion.div>
    </motion.div>
  );
};
