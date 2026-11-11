import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { DiagramNode, ArrowConnector } from '../components/Diagram';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { RefreshCw, Image as ImgIcon, Cpu, ShieldCheck } from 'lucide-react';

export const Slide05BlackVIPArchitecture: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between"
    >
      <div>
        <SectionLabel part="Part 2" section="BlackVIP Framework" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          BlackVIP: Overall Architecture Pipeline
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-theme-secondary mt-1 max-w-3xl">
          A modular framework combining an autoencoder-style Coordinator for prompt reparameterization with SPSA-GC gradient-free optimization.
        </motion.p>
      </div>

      {/* Main End-to-End Pipeline Diagram */}
      <motion.div
        variants={scaleIn}
        className="p-6 rounded-2xl bg-theme-card border border-theme-border shadow-slide-card my-auto flex flex-col items-center justify-center relative"
      >
        {/* Forward Pass Flow */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 z-10 w-full">
          {/* Input Image */}
          <DiagramNode
            label="Input Image x"
            sublabel="Target Domain Sample"
            type="input"
            icon={<ImgIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
            className="w-32"
          />

          <ArrowConnector label="x" />

          {/* Coordinator Box */}
          <div className="p-3 rounded-xl border-2 border-dashed border-theme-accent bg-blue-50/50 dark:bg-blue-950/20 flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-theme-accent">
              Coordinator Network
            </span>
            <div className="flex items-center gap-2">
              <DiagramNode
                label="Frozen Encoder"
                sublabel="SSL DINO / MoCo"
                type="frozen"
                className="w-28 text-xs"
              />
              <ArrowConnector label="f(x)" />
              <DiagramNode
                label="Trainable Decoder"
                sublabel="Param: \phi_d"
                type="trainable"
                className="w-28 text-xs"
              />
            </div>
          </div>

          <ArrowConnector label="v(x; \phi)" />

          {/* Prompt + Image Combination */}
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-theme-highlight border border-theme-accent/30 text-center w-28">
            <span className="text-xs font-bold text-theme-accent">Prompted Input</span>
            <span className="text-[10px] font-mono text-theme-secondary">x + v(x; &phi;)</span>
          </div>

          <ArrowConnector label="Forward" />

          {/* Frozen Black-Box Target Model */}
          <DiagramNode
            label="Black-Box Vision Model"
            sublabel="CLIP / ViT / ResNet (Frozen)"
            type="frozen"
            icon={<Cpu className="w-5 h-5 text-slate-600 dark:text-slate-400" />}
            className="w-36"
          />

          <ArrowConnector label="Predictions" />

          {/* Loss Oracle */}
          <DiagramNode
            label="Loss Oracle"
            sublabel="\mathcal{L}(\hat{y}, y)"
            type="loss"
            className="w-28"
          />
        </div>

        {/* Backward Feedback Loop via SPSA-GC */}
        <div className="mt-8 pt-4 border-t-2 border-dashed border-theme-border w-full flex items-center justify-between px-6 bg-slate-50 dark:bg-slate-900/40 rounded-xl p-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-600 text-white animate-spin">
              <RefreshCw className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-theme-primary">
                SPSA-GC Optimization Feedback (Zeroth-Order)
              </span>
              <p className="text-[11px] text-theme-muted">
                Evaluates 2 scalar losses per step &rarr; NAG Look-Ahead &rarr; Updates only Trainable Parameters <span className="font-mono text-theme-accent font-semibold">&phi; = &#123;&phi;_d, &phi;_t&#125;</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Zero Backprop Needed
            </span>
          </div>
        </div>
      </motion.div>

      {/* Highlights */}
      <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="p-3 rounded-lg bg-theme-card border border-theme-border">
          <strong className="text-theme-primary block mb-0.5">1. Frozen Semantic Encoder</strong>
          <span className="text-theme-secondary">Extracts rich representations without adding trainable dimensions.</span>
        </div>
        <div className="p-3 rounded-lg bg-theme-card border border-theme-border">
          <strong className="text-theme-primary block mb-0.5">2. Compact Trainable Decoder</strong>
          <span className="text-theme-secondary">Projects latent features to visual prompt space, keeping parameter size small.</span>
        </div>
        <div className="p-3 rounded-lg bg-theme-card border border-theme-border">
          <strong className="text-theme-primary block mb-0.5">3. SPSA-GC Optimizer</strong>
          <span className="text-theme-secondary">Tames gradient variance using Nesterov-style momentum look-ahead.</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

