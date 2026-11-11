import React from 'react';

interface SectionLabelProps {
  section: string;
  part?: string;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  section,
  part,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-2 mb-2 ${className}`}>
      {part && (
        <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-theme-accent text-white">
          {part}
        </span>
      )}
      <span className="text-xs font-medium uppercase tracking-wider text-theme-muted">
        {section}
      </span>
    </div>
  );
};

