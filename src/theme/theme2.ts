import { PresentationTheme, defaultTheme } from './theme';

/**
 * Theme: Cyber Obsidian & Electric Sky (Dark Theme)
 */
export const theme2: PresentationTheme = {
  id: 'cyber-obsidian',
  name: 'Cyber Obsidian & Electric Sky',
  isDark: true,
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

/**
 * Theme: Warm Editorial Paper (Light Theme)
 */
export const themeModernPaper: PresentationTheme = {
  id: 'warm-editorial',
  name: 'Warm Editorial Paper',
  isDark: false,
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

/**
 * 1. Theme: Cyber Daylight (Light theme counterpart to Cyber Obsidian)
 * Features cool ice-slate cyber tones, gleaming cards, electric cyan and indigo accents.
 */
export const themeCyberDaylight: PresentationTheme = {
  id: 'cyber-daylight',
  name: 'Cyber Daylight (Light Cyber)',
  isDark: false,
  colors: {
    bg: '#F0F5FA',
    card: '#FFFFFF',
    cardHover: '#E6EFF8',
    primaryText: '#0B1528',
    secondaryText: '#2C405A',
    mutedText: '#5A738E',
    border: '#C8D9EC',
    accent: '#0284C7',
    accentLight: '#38BDF8',
    secondaryAccent: '#6366F1',
    success: '#059669',
    highlight: '#E0F2FE',
    darkPanel: '#0E1726',
  },
  borderRadius: { ...theme2.borderRadius },
  typography: { ...theme2.typography },
  animation: { ...theme2.animation },
};

/**
 * 2. Theme: Prism Spectrum (Light theme more colorful)
 * Features vivid chromatic energy: electric violet, magenta, cyan-teal, and amber accents.
 */
export const themePrismVibrant: PresentationTheme = {
  id: 'prism-vibrant',
  name: 'Prism Spectrum (Vibrant Light)',
  isDark: false,
  colors: {
    bg: '#FBF9FE',
    card: '#FFFFFF',
    cardHover: '#F4EEFC',
    primaryText: '#190E2E',
    secondaryText: '#4A3B69',
    mutedText: '#7C6C9C',
    border: '#E5DCF8',
    accent: '#7C3AED',
    accentLight: '#A855F7',
    secondaryAccent: '#EC4899',
    success: '#10B981',
    highlight: '#F3E8FF',
    darkPanel: '#1E1035',
  },
  borderRadius: { ...defaultTheme.borderRadius },
  typography: { ...defaultTheme.typography },
  animation: { ...defaultTheme.animation },
};

/**
 * 3. Theme: Synthwave Neon (Dark theme more colorful)
 * Features deep cyber-void background with glowing neon pink, electric cyan, and ultraviolet highlights.
 */
export const themeSynthwaveNeon: PresentationTheme = {
  id: 'synthwave-neon',
  name: 'Synthwave Neon (Vibrant Dark)',
  isDark: true,
  colors: {
    bg: '#0F091F',
    card: '#1A1138',
    cardHover: '#291B52',
    primaryText: '#FDF4FF',
    secondaryText: '#E0D0F5',
    mutedText: '#A78BFA',
    border: '#3F2577',
    accent: '#F43F5E',
    accentLight: '#FB7185',
    secondaryAccent: '#06B6D4',
    success: '#10E599',
    highlight: '#341560',
    darkPanel: '#090414',
  },
  borderRadius: { ...theme2.borderRadius },
  typography: { ...theme2.typography },
  animation: { ...theme2.animation },
};

/**
 * 4. Theme: Nordic Sage (Light theme of your choice)
 * Features organic Scandinavian botanical aesthetics: misty herbal sage, rich pine text, and seafoam mint accents.
 */
export const themeNordicSage: PresentationTheme = {
  id: 'nordic-sage',
  name: 'Nordic Sage (Botanical Light)',
  isDark: false,
  colors: {
    bg: '#F3F6F3',
    card: '#FFFFFF',
    cardHover: '#E8EFE8',
    primaryText: '#132A18',
    secondaryText: '#2B4A30',
    mutedText: '#4F7355',
    border: '#CFDBCF',
    accent: '#2D6A4F',
    accentLight: '#52B788',
    secondaryAccent: '#D97706',
    success: '#10B981',
    highlight: '#E8F5E9',
    darkPanel: '#192C1D',
  },
  borderRadius: { ...defaultTheme.borderRadius },
  typography: { ...defaultTheme.typography },
  animation: { ...defaultTheme.animation },
};
