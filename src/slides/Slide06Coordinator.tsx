import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { Equation } from '../components/Equation';
import { DiagramNode, ArrowConnector } from '../components/Diagram';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Layers, AlertCircle, CheckCircle2 } from 'lucide-react';

export const Slide06Coordinator: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between"
    >
      <div>
        <SectionLabel part="Part 2" section="Coordinator Design" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Coordinator: Prompt Reparameterization
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-theme-secondary mt-1 max-w-3xl">
          Tackling the curse of dimensionality by moving prompt optimization from raw pixel space into a constrained latent manifold.
        </motion.p>
      </div>

      {/* Main Structural Visual */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto">
        {/* Left Column: Why Direct Optimization Fails */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20 text-xs text-theme-secondary space-y-2">
            <div className="flex items-center gap-2 text-rose-600 font-bold">
              <AlertCircle className="w-4 h-4" />
              <span>The Pixel-Space Optimization Bottleneck</span>
            </div>
            <p>
              Directly optimizing raw prompt pixels means searching in <Equation math="\mathbb{R}^{224 \times 224 \times 3} \approx 150{,}528" block={false} /> dimensions.
            </p>
            <p>
              In black-box zeroth-order optimization, gradient estimation variance scales directly with parameter dimension <Equation math="D" block={false} />:
            </p>
            <Equation math="\operatorname{Var}(\hat{g}_{\text{ZOO}}) \propto \mathcal{O}(D)" block={true} />
            <p className="font-semibold text-rose-700 dark:text-rose-300">
              Direct pixel optimization results in pure gradient noise and divergence!
            </p>
          </div>

          <div className="p-4 rounded-xl border border-theme-border bg-theme-card text-xs space-y-2">
            <span className="font-bold text-theme-primary flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-theme-accent" />
              The Coordinator Solution
            </span>
            <p className="text-theme-secondary leading-relaxed">
              Factorize prompt generation into a <strong>frozen semantic encoder</strong> <Equation math="f(\cdot)" block={false} /> and a <strong>lightweight trainable decoder</strong> <Equation math="g_{\phi_d}(\cdot)" block={false} />.
            </p>
          </div>
        </div>

        {/* Right Column: Coordinator Architecture Diagram */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-theme-card border border-theme-border flex flex-col items-center justify-center shadow-slide-card">
          <div className="w-full flex items-center justify-between mb-4 pb-2 border-b border-theme-border">
            <span className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Autoencoder-Style Coordinator
            </span>
            <span className="text-[11px] font-mono font-semibold text-theme-muted">
              Latent Reparameterization
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 w-full py-4">
            <DiagramNode
              label="Input Image x"
              sublabel="3 × 224 × 224"
              type="input"
              className="w-24 text-[11px]"
            />

            <ArrowConnector label="x" />

            <DiagramNode
              label="Frozen SSL Encoder"
              sublabel="f(\cdot) (DINO ViT)"
              type="frozen"
              className="w-32 text-xs"
            />

            <ArrowConnector label="z = f(x)" />

            <div className="flex flex-col items-center p-2 rounded-lg bg-theme-highlight border border-theme-accent/40 text-center w-28">
              <span className="text-[10px] font-bold text-theme-accent uppercase">Latent Code</span>
              <Equation math="z \in \mathbb{R}^d" block={false} className="text-[11px]" />
            </div>

            <ArrowConnector label="+ \phi_t" />

            <DiagramNode
              label="Trainable Decoder"
              sublabel="g_{\phi_d}(\cdot) (Tiny Conv/MLP)"
              type="trainable"
              className="w-32 text-xs"
            />

            <ArrowConnector label="v(x)" />

            <DiagramNode
              label="Prompt v"
              sublabel="Structured Canvas"
              type="output"
              className="w-24 text-[11px]"
            />
          </div>

          <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-theme-border w-full text-center text-xs text-theme-secondary font-mono flex items-center justify-center gap-2">
            <span>Prompt Formulation:</span>
            <Equation math="v(x; \phi) = g_{\phi_d}([f(x); \phi_t])" block={false} highlight={true} />
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-3 rounded-lg border border-theme-border">
        <strong className="text-theme-primary">Key Advantage: </strong>
        The frozen encoder supplies high-level semantic vision priors (edges, object contours, semantic categories) with zero training cost, while the trainable decoder optimizes only a compact parameter space.
      </motion.div>
    </motion.div>
  );
};
