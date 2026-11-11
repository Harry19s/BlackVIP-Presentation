import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { DiagramNode, ArrowConnector } from '../components/Diagram';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Award, CheckCircle2, HelpCircle, Sparkles, Image as ImgIcon, Cpu } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Slide19Conclusion: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#2563EB', '#06B6D4', '#0D9488', '#38BDF8'],
    });
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between"
    >
      <div>
        <SectionLabel part="Part 6" section="Summary & Conclusion" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Conclusion & Key Research Takeaways
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-theme-secondary mt-1 max-w-3xl">
          BlackVIP establishes a practical, robust blueprint for adapting proprietary vision foundation models under strict zero-access constraints.
        </motion.p>
      </div>

      {/* Final Synthesis Diagram */}
      <motion.div
        variants={scaleIn}
        className="p-5 rounded-2xl bg-theme-card border border-theme-border shadow-slide-card my-auto flex flex-col items-center justify-center space-y-4"
      >
        <span className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" /> The Unified BlackVIP Paradigm
        </span>

        {/* Simplified clean flow */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full">
          <DiagramNode
            label="Input Image"
            type="input"
            icon={<ImgIcon className="w-4 h-4 text-gray-500" />}
            className="w-28 text-xs"
          />

          <ArrowConnector label="x" />

          <DiagramNode
            label="Coordinator"
            sublabel="Reparameterization"
            type="trainable"
            className="w-32 text-xs"
          />

          <ArrowConnector label="v(x; \phi)" />

          <DiagramNode
            label="Visual Prompt"
            sublabel="Image + Canvas"
            type="output"
            className="w-32 text-xs"
          />

          <ArrowConnector label="Forward" />

          <DiagramNode
            label="Frozen Vision Model"
            sublabel="Black-Box Target"
            type="frozen"
            icon={<Cpu className="w-4 h-4 text-slate-500" />}
            className="w-36 text-xs"
          />
        </div>

        {/* Dual Pillar Callout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2 border-t border-theme-border/60">
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-theme-border flex items-start gap-3">
            <div className="p-2 rounded-lg bg-theme-highlight text-theme-accent">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <strong className="text-theme-primary block mb-0.5">SPSA &bull; Query Efficiency</strong>
              <p className="text-theme-secondary text-[11px] leading-relaxed">
                Requires only 2 forward queries per iteration, regardless of parameter dimensionality.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-theme-highlight/30 border border-theme-accent/30 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-theme-accent text-white">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <strong className="text-theme-accent block mb-0.5">SPSA-GC &bull; Look-Ahead Correction</strong>
              <p className="text-theme-secondary text-[11px] leading-relaxed">
                Applies NAG look-ahead momentum to dampen zeroth-order gradient noise and accelerate convergence.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Thank you & Questions Footer */}
      <motion.div
        variants={fadeUp}
        className="p-4 rounded-xl bg-gradient-to-r from-theme-card via-theme-highlight/40 to-theme-card border border-theme-border flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-theme-accent text-white">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-theme-primary">
              Thank You for Your Attention!
            </h3>
            <p className="text-xs text-theme-secondary">
              Open for Questions, Discussion & Technical Deep Dives.
            </p>
          </div>
        </div>

        <button
          onClick={triggerConfetti}
          className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-theme-accent text-white hover:bg-blue-600 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Celebrate & Finish</span>
        </button>
      </motion.div>
    </motion.div>
  );
};

