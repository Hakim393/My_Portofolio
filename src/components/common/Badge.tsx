import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'neutral' | 'accent' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs px-3 py-1 font-medium',
  };

  const variantStyles = {
    default:
      'bg-stone-100 text-stone-900 dark:bg-stone-800 dark:text-stone-100 border border-stone-300 dark:border-stone-700 font-semibold',
    neutral:
      'bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 font-medium',
    accent:
      'bg-emerald-100 text-emerald-950 dark:bg-emerald-950/80 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 font-semibold',
    outline:
      'bg-transparent text-stone-950 dark:text-white border border-stone-300 dark:border-stone-700 font-semibold',
  };

  return (
    <span
      className={`inline-flex items-center rounded-md tracking-tight whitespace-nowrap transition-colors duration-150 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
