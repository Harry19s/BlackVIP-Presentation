import { PresentationTheme, defaultTheme } from './theme';

export const theme2: PresentationTheme = {
  id: 'cyber-obsidian',
  name: 'Cyber Obsidian & Electric Sky',
  colors: {
    bg: '#0B0F19',
    card: '#131B2E',
    cardHover: '#1B2742',
    primaryText: '#F8FAFC',
    secondaryText: '#CBD5E1',
    mutedText: '#94A3B8',
    border: '#23324E',
    accent: '#38BDF8',
    accentLight: '#7DD3FC',
    secondaryAccent: '#818CF8',
    success: '#34D399',
    highlight: '#1E293B',
    darkPanel: '#030712',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
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

export const themeModernPaper: PresentationTheme = {
  id: 'warm-editorial',
  name: 'Warm Editorial Paper',
  colors: {
    bg: '#FDFCF7',
    card: '#F4EFE6',
    cardHover: '#EBE4D8',
    primaryText: '#1C1917',
    secondaryText: '#57534E',
    mutedText: '#78716C',
    border: '#E2D9CC',
    accent: '#0284C7',
    accentLight: '#38BDF8',
    secondaryAccent: '#D97706',
    success: '#059669',
    highlight: '#E0F2FE',
    darkPanel: '#292524',
  },
  borderRadius: { ...defaultTheme.borderRadius },
  typography: { ...defaultTheme.typography },
  animation: { ...defaultTheme.animation },
};

