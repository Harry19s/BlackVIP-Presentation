import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { ArrowConnector } from '../components/Diagram';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { ShieldAlert, Sparkles, CheckCircle2, XCircle, Split } from 'lucide-react';

export const Slide03ARvsVP: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between gap-4"
    >
      <div>
        <SectionLabel part="Part 1" section="Background & Prior Art" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Adversarial Reprogramming (AR) vs Visual Prompting (VP)
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-4xl">
          Both paradigms alter input pixels rather than network parameters, but their optimization goals and semantic output mechanisms diverge completely.
        </motion.p>
      </div>

      {/* Side-by-Side Pipeline Comparison */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 items-stretch">
        {/* Adversarial Reprogramming Card */}
        <div className="flex flex-col p-5 rounded-xl border border-theme-border bg-theme-card/70 shadow-slide-card justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-theme-border/60">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-theme-primary">Adversarial Reprogramming (AR)</h3>
                  <span className="text-[11px] text-theme-muted font-mono">Elsayed et al. (ICLR 2019)</span>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                Task Hijacking
              </span>
            </div>

            {/* Visual Pipeline with Visible Flow Arrows */}
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-theme-border/80 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-1 mb-3 overflow-x-auto">
              <div className="w-full sm:w-20 h-12 sm:h-16 rounded-lg border-2 border-rose-400 bg-rose-50 dark:bg-rose-950/20 flex flex-col items-center justify-center text-[10px] text-center p-1 font-semibold text-rose-700 dark:text-rose-300 flex-shrink-0">
                Fixed Noise Frame
              </div>
              <ArrowConnector label="Embed" length="short" responsive="sm" />
              <div className="w-full sm:w-24 h-12 sm:h-16 rounded-lg bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-center text-[11px] font-bold text-slate-700 dark:text-slate-300 flex-shrink-0">
                <span>ImageNet CNN</span>
                <span className="text-[9px] opacity-60">Fixed Weights</span>
              </div>
              <ArrowConnector label="Output" length="short" responsive="sm" />
              <div className="w-full sm:w-auto text-[10px] bg-rose-100 dark:bg-rose-900/40 p-2 rounded-lg font-mono text-rose-800 dark:text-rose-200 text-center flex-shrink-0">
                Hardcoded Label Map
                <span className="block text-[8px] opacity-75">e.g. Dog &rarr; Digit 3</span>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-theme-secondary">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span><strong>Adversarial Trickery:</strong> Forces a network trained for Domain A to output artificial classes of Domain B via static class re-assignment.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span><strong>Destroys Semantics:</strong> Treats pretrained features as a random mathematical hashing function rather than understanding visual concepts.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span><strong>Brittle Generalization:</strong> Extremely sensitive to slight input perturbations and fails under out-of-distribution conditions.</span>
              </li>
            </ul>
          </div>

          <div className="mt-3 p-2 rounded-lg bg-rose-50/50 dark:bg-rose-950/20 text-[11px] font-medium text-rose-700 dark:text-rose-300 text-center border border-rose-200/60">
            Mechanism: Adversarial Hijacking &bull; Output: Artificially Remapped Logits
          </div>
        </div>

        {/* Visual Prompting Card */}
        <div className="flex flex-col p-5 rounded-xl border border-theme-accent bg-theme-card shadow-slide-card ring-1 ring-theme-accent/20 justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-theme-border/60">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-theme-accent text-white dark:text-slate-950">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-theme-primary">Visual Prompting (VP)</h3>
                  <span className="text-[11px] text-theme-accent font-mono">Bahng et al. (ECCV 2022) / BlackVIP</span>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-theme-highlight text-theme-accent border border-theme-accent/30">
                In-Context Steering
              </span>
            </div>

            {/* Visual Pipeline with Visible Flow Arrows */}
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-theme-border/80 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-1 mb-3 overflow-x-auto">
              <div className="w-full sm:w-20 h-12 sm:h-16 rounded-lg border-2 border-theme-accent bg-blue-50 dark:bg-blue-950/20 flex flex-col items-center justify-center text-[10px] text-center p-1 font-semibold text-theme-accent flex-shrink-0">
                Visual Prompt + Image
              </div>
              <ArrowConnector label="Steer" length="short" responsive="sm" />
              <div className="w-full sm:w-24 h-12 sm:h-16 rounded-lg bg-theme-highlight/60 flex flex-col items-center justify-center text-[11px] font-bold text-theme-accent flex-shrink-0">
                <span>Vision Backbone</span>
                <span className="text-[9px] opacity-75">CLIP / ViT / MAE</span>
              </div>
              <ArrowConnector label="Predict" length="short" responsive="sm" />
              <div className="w-full sm:w-auto text-[10px] bg-theme-highlight p-2 rounded-lg font-mono text-theme-accent text-center flex-shrink-0">
                Semantic Target Classes
                <span className="block text-[8px] opacity-75">Natural text/vision alignment</span>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-theme-secondary">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
                <span><strong>In-Context Learning:</strong> Inspired by NLP prompt engineering (e.g. GPT-3 prefix prompts); steers the model's existing knowledge toward the task.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
                <span><strong>Preserves Semantic Manifold:</strong> Leverages the pre-trained visual representations and multi-modal alignment (e.g. CLIP text labels).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
                <span><strong>Robust Generalization:</strong> Demonstrates superior stability under distribution shifts and corruptions.</span>
              </li>
            </ul>
          </div>

          <div className="mt-3 p-2 rounded-lg bg-theme-highlight text-[11px] font-medium text-theme-accent text-center border border-theme-accent/30 font-semibold">
            Mechanism: Semantic In-Context Guidance &bull; Output: Downstream Class Probabilities
          </div>
        </div>
      </motion.div>

      {/* Structured Comparison Matrix Footer */}
      <motion.div variants={fadeUp} className="p-3 rounded-xl bg-theme-card border border-theme-border text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Split className="w-4 h-4 text-theme-accent" />
          <span className="font-bold text-theme-primary">Takeaway: </span>
          <span className="text-theme-secondary">
            BlackVIP adopts the Visual Prompting paradigm because it preserves the rich semantic representations of modern foundation backbones, avoiding artificial label corruption.
          </span>
        </div>
        <span className="text-[11px] font-mono text-theme-accent whitespace-nowrap hidden sm:inline">
          BlackVIP Choice: Visual Prompting
        </span>
      </motion.div>
    </motion.div>
  );
};

