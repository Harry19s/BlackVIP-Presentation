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
      className="h-full flex flex-col justify-between"
    >
      <div>
        <SectionLabel part="Part 4" section="Gradient Correction" />
        <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
          Nesterov's Accelerated Gradient (NAG) Principle
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-theme-secondary mt-1 max-w-3xl">
          Anticipating future trajectory via look-ahead momentum before computing gradient updates.
        </motion.p>
      </div>

      {/* Main Vector Diagram & Comparison */}
      <motion.div variants={scaleIn} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
        {/* Left Column: Classical Momentum vs NAG */}
        <div className="md:col-span-6 space-y-4">
          {/* Classical Momentum */}
          <div className="p-4 rounded-xl border border-theme-border bg-theme-card/60 text-xs text-theme-secondary space-y-2">
            <span className="font-bold text-theme-primary flex items-center gap-1.5 uppercase tracking-wider text-xs">
              <Compass className="w-4 h-4 text-theme-muted" /> Standard Polyak Momentum
            </span>
            <p>
              Computes gradient at current position <Equation math="\phi_i" block={false} />, then adds previous momentum:
            </p>
            <Equation math="m_{i+1} = \beta m_i - a_i \nabla \mathcal{L}(\phi_i)" block={true} />
            <p className="text-theme-muted">
              Problem: If momentum carries the optimizer uphill, the current gradient cannot anticipate the overshoot until the next step.
            </p>
          </div>

          {/* Nesterov Look-Ahead */}
          <div className="p-4 rounded-xl border border-theme-accent bg-theme-card text-xs text-theme-secondary space-y-2 shadow-slide-card">
            <span className="font-bold text-theme-accent flex items-center gap-1.5 uppercase tracking-wider text-xs">
              <FastForward className="w-4 h-4" /> Nesterov Accelerated Gradient (NAG)
            </span>
            <p>
              First performs a <strong>look-ahead jump</strong> along the existing momentum vector, then computes gradient:
            </p>
            <Equation
              math="\phi_i^{\text{lookahead}} = \phi_i + \beta m_i"
              block={true}
              highlight={true}
            />
            <p className="text-theme-primary font-medium">
              Evaluates gradient at <Equation math="\phi_i^{\text{lookahead}}" block={false} />, serving as an <strong>anticipatory brake</strong> that dampens oscillations before overshooting!
            </p>
          </div>
        </div>

        {/* Right Column: Visual Vector Mechanics */}
        <div className="md:col-span-6 p-6 rounded-2xl bg-theme-card border border-theme-border shadow-slide-card flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-theme-muted mb-4 flex items-center gap-1.5">
            Vector Decomposition of NAG
          </span>

          {/* SVG Vector Diagram */}
          <div className="w-full h-56 bg-white dark:bg-slate-900 rounded-xl border border-theme-border p-4 relative flex items-center justify-center">
            <svg viewBox="0 0 320 180" className="w-full h-full">
              {/* Origin Point phi_i */}
              <circle cx="50" cy="130" r="5" fill="#2563EB" />
              <text x="35" y="155" className="text-[11px] fill-current text-blue-600 font-mono font-bold">&phi;_i (Current)</text>

              {/* Momentum Vector beta * m_i */}
              <line x1="50" y1="130" x2="210" y2="60" stroke="#06B6D4" strokeWidth="2.5" markerEnd="url(#arrow-cyan)" />
              <text x="110" y="80" className="text-[11px] fill-current text-cyan-600 font-mono font-bold">&beta; m_i (Momentum)</text>

              {/* Look-ahead point */}
              <circle cx="210" cy="60" r="5" fill="#0D9488" />
              <text x="180" y="45" className="text-[11px] fill-current text-emerald-600 font-mono font-bold">&phi;_i^&#123;lookahead&#125;</text>

              {/* Gradient correction vector from look-ahead point */}
              <line x1="210" y1="60" x2="180" y2="140" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 2" markerEnd="url(#arrow-red)" />
              <text x="215" y="115" className="text-[10px] fill-current text-rose-500 font-mono font-bold">- a_i &nabla;&#123;lookahead&#125;</text>

              {/* Final updated point phi_{i+1} */}
              <circle cx="180" cy="140" r="5" fill="#8B5CF6" />
              <text x="175" y="160" className="text-[11px] fill-current text-purple-600 font-mono font-bold">&phi;_&#123;i+1&#125; (Updated)</text>

              {/* Resultant Vector */}
              <line x1="50" y1="130" x2="180" y2="140" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 2" />

              {/* SVG Markers */}
              <defs>
                <marker id="arrow-cyan" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#06B6D4" />
                </marker>
                <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#EF4444" />
                </marker>
              </defs>
            </svg>
          </div>

          <div className="mt-3 text-xs text-theme-secondary text-center">
            The gradient is queried at the <em>future</em> position <Equation math="\phi_i + \beta m_i" block={false} />, enabling correction <em>before</em> committing the final step.
          </div>
        </div>
      </motion.div>

      {/* Footer Takeaway */}
      <motion.div variants={fadeUp} className="text-xs text-theme-secondary bg-theme-card/80 p-2.5 rounded-lg border border-theme-border flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0" />
        <span>
          <strong>BlackVIP Insight: </strong>
          Since SPSA estimates suffer from noise, substituting the look-ahead position into SPSA provides a natural stabilization mechanism without adding extra queries.
        </span>
      </motion.div>
    </motion.div>
  );
};

