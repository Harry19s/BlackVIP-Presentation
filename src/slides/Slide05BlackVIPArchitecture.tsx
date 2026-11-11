import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { DiagramNode, ArrowConnector } from '../components/Diagram';
import { Equation } from '../components/Equation';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { RefreshCw, Image as ImgIcon, Cpu, ShieldCheck, Zap, Sliders, Database } from 'lucide-react';

export const Slide05BlackVIPArchitecture: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between gap-4"
    >
      <div>
        <SectionLabel part="Part 2" section="BlackVIP Framework" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          BlackVIP: Overall Architecture Pipeline
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-4xl">
          A dual-component framework decoupling task-specific prompt generation from the frozen vision backbone, optimized via zeroth-order momentum feedback.
        </motion.p>
      </div>

      {/* Main End-to-End Pipeline Diagram */}
      <motion.div
        variants={scaleIn}
        className="p-5 rounded-2xl bg-theme-card border border-theme-border shadow-slide-card flex flex-col items-center justify-center relative flex-1"
      >
        {/* Forward Pass Flow */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 z-10 w-full my-auto">
          {/* Input Image */}
          <DiagramNode
            label="Input Image x"
            sublabel="Target Domain"
            type="input"
            icon={<ImgIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
            className="w-32"
          />

          <ArrowConnector label="x" />

          {/* Coordinator Box */}
          <div className="p-3.5 rounded-xl border-2 border-dashed border-theme-accent bg-blue-50/60 dark:bg-blue-950/30 flex flex-col items-center gap-2 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-theme-accent">
              Coordinator Network (Reparameterizer)
            </span>
            <div className="flex items-center gap-2">
              <DiagramNode
                label="Frozen SSL Encoder"
                sublabel={<span className="flex items-center justify-center gap-1"><Equation math="f(\cdot)" block={false} /><span>(DINO)</span></span>}
                type="frozen"
                className="w-32 text-xs"
              />
              <ArrowConnector label={<Equation math="f(x) + \phi_t" block={false} />} length="short" />
              <DiagramNode
                label="Trainable Decoder"
                sublabel={<Equation math="g_{\phi_d}(\cdot)" block={false} />}
                type="trainable"
                className="w-32 text-xs"
              />
            </div>
          </div>

          <ArrowConnector label={<Equation math="v(x; \phi)" block={false} />} length="medium" />

          {/* Prompt + Image Combination */}
          <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-theme-highlight border border-theme-accent/30 text-center w-36 shadow-xs">
            <span className="text-xs font-bold text-theme-accent">Prompted Input</span>
            <Equation math="x + v(x; \phi)" block={false} className="text-xs font-semibold" />
            <span className="text-[9px] text-theme-muted mt-0.5">Pixel Frame Overlay</span>
          </div>

          <ArrowConnector label="Forward" length="short" />

          {/* Frozen Black-Box Target Model */}
          <DiagramNode
            label="Black-Box Vision Model"
            sublabel="CLIP / ViT / ResNet"
            type="frozen"
            icon={<Cpu className="w-5 h-5 text-slate-600 dark:text-slate-400" />}
            className="w-40"
          />

          <ArrowConnector label="Predictions" length="short" />

          {/* Loss Oracle */}
          <DiagramNode
            label="Loss Oracle"
            sublabel={<Equation math="\mathcal{L}(\hat{y}, y)" block={false} />}
            type="loss"
            className="w-28"
          />
        </div>

        {/* Backward Feedback Loop via SPSA-GC */}
        <div className="mt-4 pt-3 border-t-2 border-dashed border-theme-border w-full flex items-center justify-between px-5 bg-slate-50 dark:bg-slate-900/50 rounded-xl p-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600 text-white animate-spin">
              <RefreshCw className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-theme-primary">
                SPSA-GC Optimization Feedback Loop (Zeroth-Order)
              </span>
              <p className="text-[11px] text-theme-secondary flex items-center gap-1.5 flex-wrap">
                <span>Evaluates exactly 2 forward losses per step &bull; NAG Look-Ahead Projection &bull; Updates only</span>
                <Equation math="\phi = \{\phi_d, \phi_t\}" block={false} highlight={true} className="text-[11px]" />
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 shadow-xs">
              <ShieldCheck className="w-4 h-4" /> Zero Backprop Needed
            </span>
          </div>
        </div>
      </motion.div>

      {/* 3 Component Highlights Across Bottom */}
      <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-theme-card border border-theme-border">
          <div className="flex items-center gap-2 mb-1">
            <Database className="w-4 h-4 text-slate-500" />
            <strong className="text-theme-primary">1. Frozen SSL Backbone</strong>
          </div>
          <span className="text-theme-secondary text-[11px]">
            Extracts rich semantic visual representations without expanding trainable dimensions.
          </span>
        </div>

        <div className="p-3 rounded-xl bg-theme-card border border-theme-border">
          <div className="flex items-center gap-2 mb-1">
            <Sliders className="w-4 h-4 text-theme-accent" />
            <strong className="text-theme-primary">2. Compact Learnable Decoder</strong>
          </div>
          <span className="text-theme-secondary text-[11px]">
            Transforms latent codes + trigger vector into visual prompts (~180K parameters total).
          </span>
        </div>

        <div className="p-3 rounded-xl bg-theme-card border border-theme-border">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4 text-theme-secondaryAccent" />
            <strong className="text-theme-primary">3. SPSA-GC Optimizer</strong>
          </div>
          <span className="text-theme-secondary text-[11px]">
            Tames zeroth-order gradient noise via Nesterov-style momentum look-ahead.
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};
