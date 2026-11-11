import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { DiagramNode, ArrowConnector } from '../components/Diagram';
import { Equation } from '../components/Equation';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Award, CheckCircle2, HelpCircle, Sparkles, Image as ImgIcon, Cpu, Zap, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Slide19Conclusion: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.65 },
      colors: ['#2563EB', '#06B6D4', '#0D9488', '#38BDF8', '#818CF8'],
    });
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between gap-4"
    >
      <div>
        <SectionLabel part="Part 6" section="Summary & Conclusion" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Conclusion & Key Research Takeaways
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-4xl">
          BlackVIP establishes a practical, robust foundation for adapting proprietary vision foundation models under strict zero-access constraints.
        </motion.p>
      </div>

      {/* Final Synthesis Diagram */}
      <motion.div
        variants={scaleIn}
        className="p-6 rounded-2xl bg-theme-card border border-theme-border shadow-slide-card flex-1 flex flex-col justify-between items-center"
      >
        <span className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5 pb-2 border-b border-theme-border w-full justify-center">
          <Sparkles className="w-4 h-4" /> The Unified BlackVIP Paradigm
        </span>

        {/* Simplified clean flow */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full my-auto">
          <DiagramNode
            label={<span className="flex items-center justify-center gap-1"><span>Input</span><Equation math="x" block={false} /></span>}
            sublabel="Target Domain"
            type="input"
            icon={<ImgIcon className="w-4 h-4 text-gray-500" />}
            className="w-32 text-xs"
          />

          <ArrowConnector label={<Equation math="x" block={false} />} length="short" />

          <DiagramNode
            label="Coordinator"
            sublabel="Prompt Reparameterizer"
            type="trainable"
            className="w-36 text-xs"
          />

          <ArrowConnector label={<Equation math="v(x; \phi)" block={false} />} length="medium" />

          <DiagramNode
            label={<span className="flex items-center justify-center gap-1"><span>Visual Prompt</span><Equation math="v" block={false} /></span>}
            sublabel={<Equation math="v(x; \phi)" block={false} />}
            type="output"
            className="w-36 text-xs"
          />

          <ArrowConnector label="Forward" length="short" />

          <DiagramNode
            label="Frozen Vision Model"
            sublabel="Target Foundation Backbone"
            type="frozen"
            icon={<Cpu className="w-4 h-4 text-slate-500" />}
            className="w-40 text-xs"
          />
        </div>

        {/* Dual Pillar Callout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-3 border-t border-theme-border/60">
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-theme-border flex items-start gap-3">
            <div className="p-2 rounded-lg bg-theme-highlight text-theme-accent flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <div className="flex items-center gap-1.5 mb-0.5">
                <strong className="text-theme-primary text-xs">SPSA:</strong>
                <Equation math="\mathcal{O}(1)" block={false} highlight={true} className="text-xs font-bold" />
                <span className="text-xs font-bold text-theme-primary">Query Efficiency</span>
              </div>
              <p className="text-theme-secondary text-[11px] leading-relaxed">
                Requires only 2 forward queries per iteration, regardless of parameter dimensionality, making black-box cloud API adaptation economically viable.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-theme-highlight/30 border border-theme-accent/30 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-theme-accent text-white flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <div className="flex items-center gap-1.5 mb-0.5">
                <strong className="text-theme-accent text-xs">SPSA-GC: Look-Ahead Gradient Correction</strong>
              </div>
              <p className="text-theme-secondary text-[11px] leading-relaxed">
                Integrates NAG-inspired momentum projection to dampen zeroth-order stochastic gradient noise, accelerating convergence and outperforming traditional ZOO methods.
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
              Open for Questions, Technical Discussion & In-Depth Walkthroughs.
            </p>
          </div>
        </div>

        <button
          onClick={triggerConfetti}
          className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-theme-accent text-white hover:bg-blue-600 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Celebrate Presentation</span>
        </button>
      </motion.div>
    </motion.div>
  );
};
