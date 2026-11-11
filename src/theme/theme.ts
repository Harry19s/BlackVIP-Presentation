export interface ThemeColors {
  bg: string;
  card: string;
  cardHover: string;
  primaryText: string;
  secondaryText: string;
  mutedText: string;
  border: string;
  accent: string;
  accentLight: string;
  secondaryAccent: string;
  success: string;
  highlight: string;
  darkPanel: string;
}

export interface PresentationTheme {
  id: string;
  name: string;
  colors: ThemeColors;
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  typography: {
    fontFamily: string;
    monoFontFamily: string;
  };
  animation: {
    durationFast: number;
    durationNormal: number;
    durationSlow: number;
    slideTransition: number;
    ease: string;
  };
}

export const defaultTheme: PresentationTheme = {
  id: 'cool-clean',
  name: 'Tech & Innovation (Cool & Clean)',
  colors: {
    bg: '#FFFFFF',
    card: '#F0F4F8',
    cardHover: '#E2E8F0',
    primaryText: '#0F172A',
    secondaryText: '#475569',
    mutedText: '#64748B',
    border: '#DCE5EF',
    accent: '#2563EB',
    accentLight: '#60A5FA',
    secondaryAccent: '#06B6D4',
    success: '#0D9488',
    highlight: '#DBEAFE',
    darkPanel: '#111827',
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
    durationNormal: 0.4,
    durationSlow: 0.6,
    slideTransition: 0.45,
    ease: 'easeInOut',
  },
};

