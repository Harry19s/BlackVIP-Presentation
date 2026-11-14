import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { paperFigures } from '../data/paperFigures';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { SlidersHorizontal, CheckCircle2, Cpu } from 'lucide-react';

export const Slide18Ablation: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between gap-4"
    >
      <div>
        <SectionLabel part="Part 5" section="Ablation Analysis" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Ablation Study: Backbones &amp; Coordinator Design
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-3xl">
          Validating architecture-agnostic transfer (Table 5) and SSL pre-training + SPSA-GC synergy (Table 6) on EuroSAT.
        </motion.p>
      </div>

      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left: Paper Ablation Placeholder */}
        <div className="md:col-span-6 flex flex-col justify-between">
          <ImagePlaceholder
            figure={paperFigures.ablationStudy}
            aspectRatio="16 / 10"
            className="h-full justify-between"
          />
        </div>

        {/* Right: Table 5 & Table 6 Compact Breakdown */}
        <div className="md:col-span-6 flex flex-col justify-between gap-3">
          {/* Table 5: Backbone Ablation */}
          <div className="p-4 rounded-xl border border-theme-border bg-theme-card text-xs space-y-2">
            <span className="font-bold text-theme-primary flex items-center gap-1.5 uppercase tracking-wider pb-1 border-b border-theme-border">
              <Cpu className="w-4 h-4 text-theme-accent" /> Table 5: Target Backbones (EuroSAT)
            </span>
            <ul className="space-y-1.5 text-theme-secondary text-[11px]">
              <li>
                <strong className="text-rose-600 dark:text-rose-400">CNN Bottleneck:</strong> BAR &amp; VP+SPSA-GC fail on RN50 (26.9% &amp; 34.7% vs ZS 37.5%).
              </li>
              <li>
                <strong className="text-emerald-700 dark:text-emerald-300">BlackVIP (ViT-B/16 Coord.):</strong> Improves every backbone &rarr; <strong>60.2% avg</strong> (RN50: 48.4%, RN101: 51.3%, ViT-B/16: 73.1%).
              </li>
            </ul>
          </div>

          {/* Table 6: Coordinator Weights x SPSA */}
          <div className="p-4 rounded-xl border border-theme-accent bg-theme-card shadow-slide-card text-xs space-y-2 flex-1 flex flex-col justify-between">
            <span className="font-bold text-theme-accent flex items-center gap-1.5 uppercase tracking-wider pb-1 border-b border-theme-border">
              <SlidersHorizontal className="w-4 h-4" /> Table 6: Coordinator Weights &times; Optimizer
            </span>

            <div className="overflow-hidden rounded-lg border border-theme-border bg-white dark:bg-slate-900">
              <table className="w-full text-[11px] font-mono text-left">
                <thead className="bg-theme-card text-theme-muted border-b border-theme-border">
                  <tr>
                    <th className="py-1.5 px-2.5">Encoder Pre-training</th>
                    <th className="py-1.5 px-2">SPSA</th>
                    <th className="py-1.5 px-2">SPSA-GC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-theme-border/60 text-theme-secondary">
                  <tr>
                    <td className="py-1.5 px-2.5">Zero-Shot Baseline</td>
                    <td className="py-1.5 px-2" colSpan={2}>47.9%</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2.5">Scratch (Random Init)</td>
                    <td className="py-1.5 px-2">49.6%</td>
                    <td className="py-1.5 px-2">49.5%</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2.5">Supervised Pre-trained</td>
                    <td className="py-1.5 px-2">59.4%</td>
                    <td className="py-1.5 px-2">65.2%</td>
                  </tr>
                  <tr className="bg-emerald-500/10 font-bold text-emerald-700 dark:text-emerald-300">
                    <td className="py-1.5 px-2.5">SSL (MAE) — BlackVIP</td>
                    <td className="py-1.5 px-2">69.4%</td>
                    <td className="py-1.5 px-2">73.1% (+3.7%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-3 rounded-xl border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0">
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0" />
          <span>
            <strong>Takeaway:</strong> SSL MAE features outperform supervised/scratch encoders, and SPSA-GC adds <strong>+3.7%</strong> over standard SPSA.
          </span>
        </span>
        <span className="text-[11px] font-mono text-theme-accent font-semibold whitespace-nowrap ml-0 sm:ml-4 self-end sm:self-auto">Table 5 &amp; Table 6</span>
      </motion.div>
    </motion.div>
  );
};
