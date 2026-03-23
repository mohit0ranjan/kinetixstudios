import type { Variants, Transition } from "framer-motion";

// ─── Easing ───────────────────────────────────────────────
// Premium cubic-bezier curves (Apple/Linear-grade)

export const ease = {
  /** Snappy out — main workhorse for reveals */
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
  /** Smooth in-out — for layout transitions */
  inOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
  /** Spring-like — for interactive feedback */
  spring: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
} as const;


// ─── Timing ───────────────────────────────────────────────

export const duration = {
  fast: 0.25,
  normal: 0.5,
  slow: 0.7,
  reveal: 0.6,
} as const;

export const stagger = {
  fast: 0.04,
  normal: 0.08,
  slow: 0.12,
} as const;


// ─── Reveal Variants ──────────────────────────────────────
// Use viewport-triggered, play-once animations

/** Fade up — the default reveal. Use sparingly on containers, NOT every child. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: duration.reveal, ease: ease.out, delay },
  }),
};

/** Fade in — no vertical movement, for supplementary elements */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: duration.normal, ease: ease.out, delay },
  }),
};

/** Scale fade — for cards and images */
export const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: duration.reveal, ease: ease.out, delay },
  }),
};

/** Slide in from left — for editorial list items */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: duration.normal, ease: ease.out, delay },
  }),
};


// ─── Stagger Container ───────────────────────────────────
// Wrap children that use the above variants

export const staggerContainer = (
  staggerDelay: number = stagger.normal,
  delayChildren: number = 0.1
): Variants => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});


// ─── Hero-Specific Variants ──────────────────────────────

/** Hero stagger — slower, more dramatic */
export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.reveal, ease: ease.out },
  },
};

/** Hero word reveal — for splitting headlines */
export const heroWordReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

export const heroWord: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: ease.out },
  },
};


// ─── Interactive Variants ─────────────────────────────────

/** Card hover — lift + shadow */
export const hoverLift = {
  whileHover: { y: -4, transition: { duration: duration.fast, ease: ease.out } },
  whileTap: { y: 0, scale: 0.98, transition: { duration: 0.15 } },
};

/** Button press — scale down feedback */
export const buttonPress = {
  whileHover: { scale: 0.97, y: 1 },
  whileTap: { scale: 0.93, y: 3 },
  transition: { duration: 0.2, ease: ease.out } as Transition,
};

/** Icon arrow nudge — for "View all →" links */
export const arrowNudge = {
  whileHover: { x: 4, transition: { duration: duration.fast, ease: ease.out } },
};


// ─── Viewport Config ──────────────────────────────────────

export const viewportOnce = { once: true, margin: "-80px" as const };
export const viewportOnceLoose = { once: true, margin: "-40px" as const };


// ─── Transition Presets ───────────────────────────────────

export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const smoothTransition: Transition = {
  duration: duration.normal,
  ease: ease.out,
};
