import { PresentationTheme, defaultTheme } from './theme';
import { theme2, themeModernPaper } from './theme2';

export const darkAcademicTheme: PresentationTheme = {
  id: 'dark-academic',
  name: 'Dark Academic',
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

export const availableThemes: PresentationTheme[] = [
  defaultTheme,
  theme2,
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

  if (theme.id === 'cyber-obsidian' || theme.id === 'dark-academic') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}
