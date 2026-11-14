import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { Equation } from '../components/Equation';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import { FastForward, Compass, CheckCircle2 } from 'lucide-react';

export const Slide12NAG: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col justify-between gap-4"
    >
      <div>
        <SectionLabel part="Part 4" section="Gradient Correction" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Nesterov's Accelerated Gradient (NAG) Principle
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xs sm:text-sm text-theme-secondary mt-1 max-w-4xl">
          Anticipating future trajectory via look-ahead momentum before computing gradient updates to prevent overshoot.
        </motion.p>
      </div>

      {/* Main Vector Diagram & Comparison Grid */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left Column: Classical Momentum vs NAG */}
        <div className="md:col-span-6 flex flex-col justify-between gap-3">
          {/* Classical Momentum */}
          <div className="p-4 rounded-xl border border-theme-border bg-theme-card/60 text-xs text-theme-secondary space-y-2 flex-1">
            <span className="font-bold text-theme-primary flex items-center gap-1.5 uppercase tracking-wider text-xs pb-1 border-b border-theme-border">
              <Compass className="w-4 h-4 text-theme-muted" /> Standard Polyak Momentum
            </span>
            <p className="mt-1">
              Computes gradient at current position <Equation math="\phi_i" block={false} />, then adds previous momentum:
            </p>
            <Equation math="m_{i+1} = \beta m_i - a_i \nabla \mathcal{L}(\phi_i)" block={true} />
            <p className="text-theme-muted">
              Problem: If existing momentum carries the optimizer uphill, the current gradient cannot anticipate the overshoot until the subsequent step.
            </p>
          </div>

          {/* Nesterov Look-Ahead */}
          <div className="p-4 rounded-xl border border-theme-accent bg-theme-card text-xs text-theme-secondary space-y-2 shadow-slide-card flex-1">
            <span className="font-bold text-theme-accent flex items-center gap-1.5 uppercase tracking-wider text-xs pb-1 border-b border-theme-border">
              <FastForward className="w-4 h-4" /> Nesterov Accelerated Gradient (NAG)
            </span>
            <p className="mt-1">
              First performs a <strong>look-ahead jump</strong> along the existing momentum vector, then computes gradient:
            </p>
            <Equation
              math="\phi_i^{\text{lookahead}} = \phi_i + \beta m_i"
              block={true}
              highlight={true}
            />
            <p className="text-theme-primary font-medium">
              Evaluating the gradient at <Equation math="\phi_i^{\text{lookahead}}" block={false} /> acts as an <strong>anticipatory brake</strong> that dampens oscillations before the overshoot occurs!
            </p>
          </div>
        </div>

        {/* Right Column: Visual Vector Mechanics (Fixed ViewBox & Crisp Non-Overlapping Alignment) */}
        <div className="md:col-span-6 p-5 rounded-2xl bg-theme-card border border-theme-border shadow-slide-card flex flex-col justify-between items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-theme-muted mb-1 flex items-center gap-1.5 pb-2 border-b border-theme-border w-full justify-between">
            <span>Vector Decomposition of NAG</span>
            <span className="text-theme-accent font-mono text-[10px]">Look-Ahead Mechanics</span>
          </span>

          {/* SVG Vector Diagram */}
          <div className="w-full h-60 bg-white dark:bg-slate-900 rounded-xl border border-theme-border p-2 relative flex items-center justify-center my-auto overflow-hidden">
            <svg viewBox="0 0 420 220" className="w-full h-full select-none">
              <defs>
                <marker id="arrow-cyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#06B6D4" />
                </marker>
                <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#EF4444" />
                </marker>
                <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#8B5CF6" />
                </marker>
              </defs>

              {/* Subtle background trajectory guide curve */}
              <path
                d="M 50 160 Q 200 120 300 70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-slate-200 dark:text-slate-800"
                strokeDasharray="4 4"
              />

              {/* 1. Momentum Vector: (60, 160) -> (280, 70) */}
              <line
                x1="60"
                y1="160"
                x2="272"
                y2="74"
                stroke="#06B6D4"
                strokeWidth="2.5"
                markerEnd="url(#arrow-cyan)"
              />

              {/* 2. Gradient Correction Vector from look-ahead point: (280, 70) -> (240, 165) */}
              <line
                x1="280"
                y1="70"
                x2="243"
                y2="158"
                stroke="#EF4444"
                strokeWidth="2.5"
                strokeDasharray="5 3"
                markerEnd="url(#arrow-red)"
              />

              {/* 3. Resultant Combined Update Vector: (60, 160) -> (240, 165) */}
              <line
                x1="60"
                y1="160"
                x2="232"
                y2="165"
                stroke="#8B5CF6"
                strokeWidth="2"
                strokeDasharray="4 2"
                markerEnd="url(#arrow-purple)"
              />

              {/* Point 1: Origin Point phi_i */}
              <circle cx="60" cy="160" r="5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />
              {/* Origin Point Label */}
              <foreignObject x="10" y="172" width="105" height="28">
                <div className="flex items-center justify-center gap-1 bg-blue-500/10 border border-blue-500/30 rounded px-1.5 py-0.5 text-blue-600 dark:text-blue-400 text-[10px] font-bold shadow-xs">
                  <Equation math="\phi_i" block={false} />
                  <span className="text-[9px] font-sans font-normal text-theme-muted">(Current)</span>
                </div>
              </foreignObject>

              {/* Momentum Vector Label Badge */}
              <foreignObject x="110" y="85" width="125" height="28">
                <div className="flex items-center justify-center gap-1 bg-cyan-500/10 border border-cyan-500/30 rounded px-1.5 py-0.5 text-cyan-600 dark:text-cyan-400 text-[10px] font-bold shadow-xs">
                  <Equation math="+\beta m_i" block={false} />
                  <span className="text-[9px] font-sans font-normal text-theme-muted">(Momentum)</span>
                </div>
              </foreignObject>

              {/* Point 2: Look-ahead point */}
              <circle cx="280" cy="70" r="5.5" fill="#0D9488" stroke="#FFFFFF" strokeWidth="1.5" />
              {/* Look-ahead Label Badge (Placed above without collision) */}
              <foreignObject x="205" y="20" width="170" height="30">
                <div className="flex items-center justify-center gap-1 bg-emerald-500/10 border border-emerald-500/30 rounded px-2 py-0.5 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold shadow-xs">
                  <Equation math="\phi_i^{\text{look}} = \phi_i + \beta m_i" block={false} />
                </div>
              </foreignObject>

              {/* Gradient Correction Label Badge (Placed to the right without collision) */}
              <foreignObject x="285" y="108" width="130" height="30">
                <div className="flex items-center justify-center gap-1 bg-rose-500/10 border border-rose-500/30 rounded px-1.5 py-0.5 text-rose-600 dark:text-rose-400 text-[9.5px] font-bold shadow-xs">
                  <Equation math="- a_i \nabla_{\text{look}}" block={false} />
                </div>
              </foreignObject>

              {/* Point 3: Final updated point phi_{i+1} */}
              <circle cx="240" cy="165" r="5.5" fill="#8B5CF6" stroke="#FFFFFF" strokeWidth="1.5" />
              {/* Final Updated Label Badge (Placed below) */}
              <foreignObject x="175" y="180" width="130" height="30">
                <div className="flex items-center justify-center gap-1 bg-purple-500/10 border border-purple-500/30 rounded px-1.5 py-0.5 text-purple-600 dark:text-purple-400 text-[10px] font-bold shadow-xs">
                  <Equation math="\phi_{i+1} = \phi_i + m_{i+1}" block={false} />
                </div>
              </foreignObject>
            </svg>
          </div>

          <div className="pt-2 border-t border-theme-border/60 text-xs text-theme-secondary text-center w-full">
            The gradient is queried at the <em>future</em> look-ahead position <Equation math="\phi_i + \beta m_i" block={false} />, enabling correction <em>before</em> committing the final step.
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-3 rounded-xl border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0">
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0" />
          <span>
            <strong>BlackVIP Insight: </strong>
            Since SPSA estimates suffer from noise, substituting the look-ahead position into SPSA provides a natural stabilization mechanism without adding extra queries.
          </span>
        </span>
        <span className="text-[11px] font-mono text-theme-accent font-semibold whitespace-nowrap ml-0 sm:ml-4 self-end sm:self-auto">
          Anticipatory Damping
        </span>
      </motion.div>
    </motion.div>
  );
};
