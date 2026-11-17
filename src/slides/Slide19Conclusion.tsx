import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { DiagramNode, ArrowConnector } from '../components/Diagram';
import { Equation } from '../components/Equation';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Award, CheckCircle2, Sparkles, Image as ImgIcon, Cpu } from 'lucide-react';

export const Slide19Conclusion: React.FC = () => {
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-3 w-full my-auto py-2">
          <DiagramNode
            label={<span className="flex items-center justify-center gap-1"><span>Input</span><Equation math="x" block={false} /></span>}
            sublabel="Target Domain"
            type="input"
            icon={<ImgIcon className="w-4 h-4 text-gray-500" />}
            className="w-44 md:w-auto md:flex-1 md:min-w-0 md:max-w-[12rem] text-xs"
          />

          <ArrowConnector label={<Equation math="x" block={false} />} length="short" responsive="md" className="flex-shrink-0" />

          <DiagramNode
            label="Coordinator"
            sublabel="Prompt Reparameterizer"
            type="trainable"
            className="w-44 md:w-auto md:flex-1 md:min-w-0 md:max-w-[13rem] text-xs"
          />

          <ArrowConnector label={<Equation math="v(x; \phi)" block={false} />} length="medium" responsive="md" className="flex-shrink-0" />

          <DiagramNode
            label={<span className="flex items-center justify-center gap-1"><span>Visual Prompt</span><Equation math="v" block={false} /></span>}
            sublabel={<Equation math="v(x; \phi)" block={false} />}
            type="output"
            className="w-44 md:w-auto md:flex-1 md:min-w-0 md:max-w-[13rem] text-xs"
          />

          <ArrowConnector label="Forward" length="short" responsive="md" className="flex-shrink-0" />

          <DiagramNode
            label="Frozen Vision Model"
            sublabel="Target Foundation Backbone"
            type="frozen"
            icon={<Cpu className="w-4 h-4 text-slate-500" />}
            className="w-44 md:w-auto md:flex-1 md:min-w-0 md:max-w-[14rem] text-xs"
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
            <div className="p-2 rounded-lg bg-theme-accent text-white dark:text-slate-950 flex-shrink-0">
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

      {/* Footer Takeaway */}
      <motion.div
        variants={fadeUp}
        className="text-xs text-theme-secondary bg-theme-card/80 p-3 rounded-xl border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0"
      >
        <span>
          <strong className="text-theme-primary">Core Impact: </strong>
          BlackVIP enables private, memory-efficient adaptation of closed-weight foundation models with only 9K learnable parameters.
        </span>
        <span className="text-[11px] font-mono text-theme-accent font-semibold whitespace-nowrap ml-0 sm:ml-4 self-end sm:self-auto">
          CVPR 2023 · BlackVIP
        </span>
      </motion.div>
    </motion.div>
  );
};
