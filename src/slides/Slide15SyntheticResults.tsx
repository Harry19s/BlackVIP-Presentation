import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Equation } from '../components/Equation';
import { paperFigures } from '../data/paperFigures';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { ShieldAlert, CheckCircle2, TrendingUp } from 'lucide-react';

export const Slide15SyntheticResults: React.FC = () => {
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
          Synthetic Benchmarks: Biased-MNIST &amp; Loc-MNIST
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-3xl">
          Stress-testing distribution shift (<Equation math="\rho" block={false} />) and off-center object location invariance.
        </motion.p>
      </div>

      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left: Paper Figure Placeholder */}
        <div className="md:col-span-6 flex flex-col justify-between">
          <ImagePlaceholder
            figure={paperFigures.syntheticResults}
            aspectRatio="16 / 10"
            className="h-full justify-between"
          />
        </div>

        {/* Right: Concise Setup + Table 2 Numbers */}
        <div className="md:col-span-6 flex flex-col justify-between gap-3">
          <div className="p-4 rounded-xl border border-theme-border bg-theme-card text-xs space-y-2">
            <span className="font-bold text-theme-primary flex items-center gap-1.5 uppercase tracking-wider pb-1 border-b border-theme-border">
              <ShieldAlert className="w-4 h-4 text-theme-accent" /> Two Synthetic Stress Tests
            </span>
            <ul className="space-y-1.5 text-theme-secondary">
              <li>
                <strong className="text-theme-primary">Biased-MNIST:</strong> Background color correlates with label (<Equation math="\rho = 0.8, 0.9" block={false} />), inverted to <Equation math="1-\rho" block={false} /> at test.
              </li>
              <li>
                <strong className="text-theme-primary">Loc-MNIST:</strong> Target digit on edges; fake digit in center (<Equation math="1:1" block={false} /> &amp; <Equation math="1:4" block={false} /> size).
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-950/20 text-xs space-y-2.5 flex-1 flex flex-col justify-between">
            <span className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 uppercase tracking-wider pb-1 border-b border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-4 h-4" /> Table 2: 16-Shot Accuracy (%)
            </span>

            <div className="overflow-hidden rounded-lg border border-theme-border bg-white dark:bg-slate-900">
              <table className="w-full text-[11px] font-mono text-left">
                <thead className="bg-theme-card text-theme-muted border-b border-theme-border">
                  <tr>
                    <th className="py-1.5 px-2.5">Method</th>
                    <th className="py-1.5 px-2">Biased (0.8 / 0.9)</th>
                    <th className="py-1.5 px-2">Loc (1:1 / 1:4)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-theme-border/60 text-theme-secondary">
                  <tr>
                    <td className="py-1.5 px-2.5">VP (white-box)</td>
                    <td className="py-1.5 px-2">57.92 / 43.55</td>
                    <td className="py-1.5 px-2">86.79 / 86.54</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2.5">BAR</td>
                    <td className="py-1.5 px-2">53.25 / 53.07</td>
                    <td className="py-1.5 px-2">33.98 / 26.05</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2.5">VP w/ SPSA-GC</td>
                    <td className="py-1.5 px-2">60.34 / 53.86</td>
                    <td className="py-1.5 px-2">16.21 / 25.68</td>
                  </tr>
                  <tr className="bg-emerald-500/10 font-bold text-emerald-700 dark:text-emerald-300">
                    <td className="py-1.5 px-2.5">BlackVIP (Ours)</td>
                    <td className="py-1.5 px-2">66.21 / 62.47</td>
                    <td className="py-1.5 px-2">69.08 / 60.86</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-[11px] text-theme-secondary">
              Input-dependent image prompts beat white-box VP on Biased-MNIST and crush frame-based BAR on Loc-MNIST.
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-3 rounded-xl border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0">
        <span className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-theme-accent flex-shrink-0" />
          <span>
            <strong>32-Shot Loc-MNIST:</strong> BlackVIP reaches <strong>76.97%</strong> (1:1) &amp; <strong>67.97%</strong> (1:4), confirming spatial adaptability.
          </span>
        </span>
        <span className="text-[11px] font-mono text-theme-accent font-semibold whitespace-nowrap ml-0 sm:ml-4 self-end sm:self-auto">
          Table 2, Fig. 4 &amp; Fig. 5
        </span>
      </motion.div>
    </motion.div>
  );
};
