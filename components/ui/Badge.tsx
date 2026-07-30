import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'blue' | 'cyan' | 'emerald' | 'subtle';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  icon,
  variant = 'blue',
  className,
}) => {
  const variantStyles = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30 shadow-[0_0_12px_rgba(37,99,235,0.2)]',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)]',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]',
    subtle: 'bg-white/5 text-slate-300 border-white/10',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border backdrop-blur-md transition-all',
          variantStyles[variant],
          className
        )
      )}
    >
      {icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{icon}</span>}
      {children}
    </span>
  );
};
