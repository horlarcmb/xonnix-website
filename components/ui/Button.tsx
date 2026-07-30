'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98]';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-2',
    md: 'px-5 py-2.5 text-sm gap-2.5',
    lg: 'px-7 py-3.5 text-base gap-3 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] border border-blue-400/30',
    secondary:
      'bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-white/10 hover:border-white/20 shadow-lg',
    outline:
      'bg-transparent hover:bg-white/5 text-slate-200 border border-slate-700 hover:border-slate-500',
    ghost:
      'bg-transparent hover:bg-white/10 text-slate-300 hover:text-white',
  };

  return (
    <button
      className={twMerge(
        clsx(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          fullWidth && 'w-full',
          className
        )
      )}
      {...props}
    >
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};
