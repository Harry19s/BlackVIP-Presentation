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
    <div className="relative flex-1 min-h-0 w-full overflow-hidden flex items-center justify-center p-1.5 sm:p-3 md:p-4 bg-theme-bg">
      {/* Dynamic Presentation Canvas adapting to full window */}
      <div className="w-full h-full min-h-0 bg-theme-bg rounded-xl border border-theme-border/60 shadow-xl relative overflow-hidden flex flex-col">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`${currentSlide}-${animationKey}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full p-3 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto overflow-x-hidden overscroll-contain [&>*]:h-auto [&>*]:min-h-full md:[&>*]:h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
