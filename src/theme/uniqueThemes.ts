import { PresentationTheme } from './theme';

/**
 * Unique Light Theme: Terracotta & Ink (Bauhaus / Swiss Studio)
 * Warm architectural limestone, espresso carbon ink, burnt terracotta, and Aegean teal.
 */
export const themeTerracottaInk: PresentationTheme = {
  id: 'terracotta-ink',
  name: 'Terracotta & Ink (Bauhaus Light)',
  isDark: false,
  colors: {
    bg: '#F5F2EB',
    card: '#ECE7DC',
    cardHover: '#E2DDD0',
    primaryText: '#1A1614',
    secondaryText: '#443B35',
    mutedText: '#70655C',
    border: '#D6CFC2',
    accent: '#C2410C',
    accentLight: '#EA580C',
    secondaryAccent: '#0F766E',
    success: '#15803D',
    highlight: '#FFEDD5',
    darkPanel: '#1C1917',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    monoFontFamily: "'JetBrains Mono', monospace",
  },
  animation: {
    durationFast: 0.2,
    durationNormal: 0.35,
    durationSlow: 0.55,
    slideTransition: 0.45,
    ease: 'easeInOut',
  },
};

/**
 * Unique Dark Theme: Carbon & Molten Gold (Noir Studio)
 * Pure warm charcoal-black (zero blue/purple cast), ivory text, molten amber gold, and verdigris teal.
 */
export const themeCarbonGold: PresentationTheme = {
  id: 'carbon-gold',
  name: 'Carbon & Molten Gold (Noir Dark)',
  isDark: true,
  colors: {
    bg: '#10100E',
    card: '#1A1916',
    cardHover: '#262420',
    primaryText: '#FBF8F1',
    secondaryText: '#D6CFC2',
    mutedText: '#9C9486',
    border: '#302D27',
    accent: '#F59E0B',
    accentLight: '#FCD34D',
    secondaryAccent: '#2DD4BF',
    success: '#34D399',
    highlight: '#2B2210',
    darkPanel: '#080807',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    monoFontFamily: "'JetBrains Mono', monospace",
  },
  animation: {
    durationFast: 0.2,
    durationNormal: 0.35,
    durationSlow: 0.55,
    slideTransition: 0.45,
    ease: 'easeInOut',
  },
};
