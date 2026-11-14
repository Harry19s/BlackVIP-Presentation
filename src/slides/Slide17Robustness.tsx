import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { paperFigures } from '../data/paperFigures';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { Award, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const Slide17Robustness: React.FC = () => {
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
          14-Benchmark Transfer &amp; Resource Efficiency
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-3xl">
          16-shot transfer accuracy across 14 visual domains (Table 3) and train-time memory footprint (Table 4).
        </motion.p>
      </div>

      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left: Paper Figure Placeholder */}
        <div className="md:col-span-6 flex flex-col justify-between">
          <ImagePlaceholder
            figure={paperFigures.robustnessShift}
            aspectRatio="16 / 10"
            className="h-full justify-between"
          />
        </div>

        {/* Right: Table 3 & Table 4 Summary */}
        <div className="md:col-span-6 flex flex-col justify-between gap-3">
          {/* Table 3 Card */}
          <div className="p-4 rounded-xl border border-theme-accent bg-theme-card shadow-slide-card text-xs space-y-2.5 flex-1 flex flex-col justify-between">
            <span className="font-bold text-theme-accent flex items-center gap-1.5 uppercase tracking-wider pb-1 border-b border-theme-border">
              <Sparkles className="w-4 h-4" /> Table 3: 14-Dataset Average (16-Shot)
            </span>

            <div className="grid grid-cols-4 gap-2 text-center font-mono">
              <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-theme-border">
                <div className="text-[10px] text-theme-muted">ZS</div>
                <div className="text-sm font-bold text-theme-secondary">57.6%</div>
                <div className="text-[9px] text-theme-muted">Baseline</div>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-theme-border">
                <div className="text-[10px] text-theme-muted">VP+SPSA-GC</div>
                <div className="text-sm font-bold text-theme-secondary">58.8%</div>
                <div className="text-[9px] text-theme-muted">4/14 wins</div>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-theme-border">
                <div className="text-[10px] text-theme-muted">BAR</div>
                <div className="text-sm font-bold text-theme-secondary">61.4%</div>
                <div className="text-[9px] text-theme-muted">6/14 wins</div>
              </div>
              <div className="p-2 rounded-lg bg-emerald-500/15 border border-emerald-500/40">
                <div className="text-[10px] text-emerald-700 dark:text-emerald-300 font-bold">BlackVIP</div>
                <div className="text-sm font-extrabold text-emerald-700 dark:text-emerald-300">64.0%</div>
                <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold">13/14 wins</div>
              </div>
            </div>

            <ul className="space-y-1 text-[11px] text-theme-secondary">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent flex-shrink-0" />
                <span><strong>CLEVR:</strong> 36.8% vs ZS 14.5% &amp; BAR 18.7% (visual counting).</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent flex-shrink-0" />
                <span><strong>Grad-CAM (Fig. 6):</strong> Broadens or focuses PTM attention per task.</span>
              </li>
            </ul>
          </div>

          {/* Table 4 Card */}
          <div className="p-4 rounded-xl border border-theme-border bg-theme-card text-xs space-y-2">
            <span className="font-bold text-theme-primary flex items-center gap-1.5 uppercase tracking-wider pb-1 border-b border-theme-border">
              <Cpu className="w-4 h-4 text-theme-accent" /> Table 4: Peak Memory &amp; Params (ImageNet)
            </span>
            <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-center">
              <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-theme-border">
                <div className="text-theme-muted">FT (ViT-B/L)</div>
                <div className="font-bold text-rose-600 dark:text-rose-400">21.7G / 76.6G</div>
                <div className="text-[9px] text-theme-muted">86M / 304M</div>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-theme-border">
                <div className="text-theme-muted">VP (ViT-B/L)</div>
                <div className="font-bold text-amber-600 dark:text-amber-400">11.9G / 44.6G</div>
                <div className="text-[9px] text-theme-muted">69K params</div>
              </div>
              <div className="p-2 rounded-lg bg-theme-highlight/60 border border-theme-accent/40">
                <div className="text-theme-accent font-bold">BlackVIP</div>
                <div className="font-extrabold text-emerald-700 dark:text-emerald-300">2.4G / 3.3G</div>
                <div className="text-[9px] text-theme-accent font-bold">9K params</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-3 rounded-xl border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0">
        <span className="flex items-center gap-2">
          <Award className="w-4 h-4 text-theme-accent flex-shrink-0" />
          <span>
            <strong>Key Result:</strong> BlackVIP wins on <strong>13/14 benchmarks</strong> with <strong>9K params</strong> and ~10&times; lower memory than white-box VP.
          </span>
        </span>
        <span className="text-[11px] font-mono text-theme-accent font-semibold whitespace-nowrap ml-0 sm:ml-4 self-end sm:self-auto">Table 3, Table 4 &amp; Fig. 6</span>
      </motion.div>
    </motion.div>
  );
};
