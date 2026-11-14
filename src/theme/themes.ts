import { PresentationTheme, defaultTheme } from './theme';
import {
  theme2,
  themeModernPaper,
  themeCyberDaylight,
  themePrismVibrant,
  themeSynthwaveNeon,
  themeNordicSage,
} from './theme2';
import { themeTerracottaInk, themeCarbonGold } from './uniqueThemes';

export const darkAcademicTheme: PresentationTheme = {
  id: 'dark-academic',
  name: 'Dark Academic',
  isDark: true,
  colors: {
    bg: '#0F172A',
    card: '#1E293B',
    cardHover: '#334155',
    primaryText: '#F8FAFC',
    secondaryText: '#CBD5E1',
    mutedText: '#94A3B8',
    border: '#334155',
    accent: '#38BDF8',
    accentLight: '#7DD3FC',
    secondaryAccent: '#2DD4BF',
    success: '#10B981',
    highlight: '#1E3A8A',
    darkPanel: '#020617',
  },
  borderRadius: { ...defaultTheme.borderRadius },
  typography: { ...defaultTheme.typography },
  animation: { ...defaultTheme.animation },
};

/**
 * All 8 curated themes for the BlackVIP presentation:
 * - Cool & Clean (Default light)
 * - Cyber Obsidian & Electric Sky (Default dark)
 * - Cyber Daylight (1. Light theme similar to Cyber Obsidian)
 * - Prism Spectrum (2. Light theme more colorful)
 * - Synthwave Neon (3. Dark theme more colorful)
 * - Nordic Sage (4. Light theme of your choice - Botanical minimal)
 * - Dark Academic (Refined slate dark)
 * - Warm Editorial Paper (Classic editorial light)
 */
export const availableThemes: PresentationTheme[] = [
  themeTerracottaInk,
  themeCarbonGold,
  defaultTheme,
  theme2,
  themeCyberDaylight,
  themePrismVibrant,
  themeSynthwaveNeon,
  themeNordicSage,
  darkAcademicTheme,
  themeModernPaper,
];

export function applyThemeToCSS(theme: PresentationTheme): void {
  const root = document.documentElement;
  root.style.setProperty('--color-bg', theme.colors.bg);
  root.style.setProperty('--color-card', theme.colors.card);
  root.style.setProperty('--color-card-hover', theme.colors.cardHover);
  root.style.setProperty('--color-primary-text', theme.colors.primaryText);
  root.style.setProperty('--color-secondary-text', theme.colors.secondaryText);
  root.style.setProperty('--color-muted-text', theme.colors.mutedText);
  root.style.setProperty('--color-border', theme.colors.border);
  root.style.setProperty('--color-accent', theme.colors.accent);
  root.style.setProperty('--color-accent-light', theme.colors.accentLight);
  root.style.setProperty('--color-secondary-accent', theme.colors.secondaryAccent);
  root.style.setProperty('--color-success', theme.colors.success);
  root.style.setProperty('--color-highlight', theme.colors.highlight);
  root.style.setProperty('--color-dark-panel', theme.colors.darkPanel);

  if (theme.isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}
