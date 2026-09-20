import React from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 ${alignClasses} ${className}`}>
      {eyebrow && (
        <div className="inline-block text-[11px] font-bold tracking-wider text-stone-600 dark:text-stone-400 uppercase mb-2">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-950 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-stone-700 dark:text-stone-300 leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
};
