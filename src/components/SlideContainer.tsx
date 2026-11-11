import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slideVariants } from '../utils/animations';

interface SlideContainerProps {
  currentSlide: number;
  direction: number;
  animationKey: number;
  children: React.ReactNode;
}

export const SlideContainer: React.FC<SlideContainerProps> = ({
  currentSlide,
  direction,
  animationKey,
  children,
}) => {
  return (
    <div className="relative flex-1 w-full h-[calc(100vh-3.75rem)] overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-900/10">
      {/* 16:9 Aspect Presentation Frame */}
      <div className="w-full max-w-7xl h-full max-h-[880px] bg-theme-bg rounded-2xl border border-theme-border shadow-2xl relative overflow-hidden flex flex-col">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`${currentSlide}-${animationKey}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-auto"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

