/**
 * Animation utilities for consistent motion across the application
 */

// Fade in from below
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

// Fade in from above
export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

// Fade in with scale
export const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.4, ease: 'easeOut' },
};

// Simple fade
export const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

// Stagger container for list animations
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Child item for stagger animations
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

// Hover scale effect
export const hoverScale = (scale = 1.05) => ({
  whileHover: { scale },
  whileTap: { scale: scale - 0.1 },
});

// Hover lift effect
export const hoverLift = (y = -10) => ({
  whileHover: { y },
  transition: { type: 'spring', stiffness: 300 },
});

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

export const pageTransitionConfig = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

// Slide in from left
export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

// Slide in from right
export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

// Spring bounce
export const springBounce = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

// Smooth ease
export const smoothEase = {
  type: 'tween',
  ease: [0.25, 0.1, 0.25, 1],
  duration: 0.5,
};

// Content switch animation (for tabs, etc.)
export const contentSwitch = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.2 },
};

// Create viewport animation trigger
export const viewportOnce = (margin = '-100px') => ({
  viewport: { once: true, margin },
});
