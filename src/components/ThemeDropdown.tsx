import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, ChevronDown } from 'lucide-react';
import { PresentationTheme } from '../theme/theme';
import { availableThemes } from '../theme/themes';

interface ThemeDropdownProps {
  currentTheme: PresentationTheme;
  onSelectTheme: (theme: PresentationTheme) => void;
  className?: string;
}

export const ThemeDropdown: React.FC<ThemeDropdownProps> = ({
  currentTheme,
  onSelectTheme,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-theme-border bg-theme-card hover:bg-theme-cardHover text-theme-primary transition-all text-xs font-semibold shadow-xs"
        title="Select Theme (or press T to cycle)"
      >
        <Palette className="w-3.5 h-3.5 text-theme-accent" />
        <span className="hidden sm:inline font-mono text-[11px] max-w-[130px] truncate">
          {currentTheme.name}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-theme-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Floating Dropdown Menu (pops up above the bottom navigation bar) */}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-72 max-h-[420px] flex flex-col rounded-xl border border-theme-border bg-white dark:bg-slate-900 shadow-2xl p-1.5 z-50 animate-fadeIn text-theme-primary">
          <div className="px-2.5 py-1.5 border-b border-theme-border/60 mb-1 flex items-center justify-between flex-shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-theme-accent">
              Choose Presentation Theme
            </span>
            <span className="text-[10px] font-mono text-theme-muted">
              [T] Cycle
            </span>
          </div>

          <div className="space-y-1 overflow-y-auto pr-0.5 flex-1 max-h-[350px]">
            {availableThemes.map((theme) => {
              const isSelected = theme.id === currentTheme.id;

              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    onSelectTheme(theme);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left text-xs transition-colors ${
                    isSelected
                      ? 'bg-theme-highlight text-theme-accent font-semibold ring-1 ring-theme-accent/30'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-theme-primary'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {/* Visual Color Swatch */}
                    <div
                      className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600 flex-shrink-0 shadow-xs relative overflow-hidden"
                      style={{ backgroundColor: theme.colors.bg }}
                    >
                      <div
                        className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-tl"
                        style={{ backgroundColor: theme.colors.accent }}
                      />
                    </div>

                    <div className="truncate">
                      <span className="block truncate font-medium">{theme.name}</span>
                      <span className="block text-[9px] text-theme-muted font-mono capitalize">
                        {theme.id.replace('-', ' ')}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-theme-accent flex-shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

