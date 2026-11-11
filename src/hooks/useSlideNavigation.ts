import { useState, useCallback } from 'react';
import { slidesMeta } from '../data/slides';

export function useSlideNavigation(initialSlide = 1) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [direction, setDirection] = useState<number>(0);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const totalSlides = slidesMeta.length;

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
      setAnimationKey((prev) => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 1) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
      setAnimationKey((prev) => prev + 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((slideIndex: number) => {
    if (slideIndex >= 1 && slideIndex <= totalSlides && slideIndex !== currentSlide) {
      setDirection(slideIndex > currentSlide ? 1 : -1);
      setCurrentSlide(slideIndex);
      setAnimationKey((prev) => prev + 1);
      setIsOverviewOpen(false);
    }
  }, [currentSlide, totalSlides]);

  const goToFirst = useCallback(() => {
    if (currentSlide !== 1) {
      setDirection(-1);
      setCurrentSlide(1);
      setAnimationKey((prev) => prev + 1);
    }
  }, [currentSlide]);

  const goToLast = useCallback(() => {
    if (currentSlide !== totalSlides) {
      setDirection(1);
      setCurrentSlide(totalSlides);
      setAnimationKey((prev) => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const replayAnimation = useCallback(() => {
    setAnimationKey((prev) => prev + 1);
  }, []);

  const toggleOverview = useCallback(() => {
    setIsOverviewOpen((prev) => !prev);
  }, []);

  const toggleNotes = useCallback(() => {
    setIsNotesOpen((prev) => !prev);
  }, []);

  return {
    currentSlide,
    totalSlides,
    direction,
    animationKey,
    isOverviewOpen,
    isNotesOpen,
    nextSlide,
    prevSlide,
    goToSlide,
    goToFirst,
    goToLast,
    replayAnimation,
    toggleOverview,
    toggleNotes,
    setIsOverviewOpen,
    setIsNotesOpen,
  };
}

