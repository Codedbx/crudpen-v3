'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden font-bold',
    'transition-[box-shadow,background-color,border-color,color] duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50',
    'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:pointer-events-none disabled:opacity-50',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: [
          'bg-brand-primary text-black',
          'shadow-[0_0_20px_rgba(125,42,232,0.25)]',
          'hover:bg-brand-primary-hover hover:shadow-[0_0_32px_rgba(125,42,232,0.45)]',
        ].join(' '),
        secondary: [
          'border border-border bg-foreground/5 text-foreground',
          'hover:border-brand-primary hover:text-brand-primary',
          'hover:shadow-[0_0_24px_rgba(125,42,232,0.12)]',
        ].join(' '),
        outline: [
          'border border-brand-primary/35 bg-brand-primary/10 text-brand-primary',
          'hover:bg-brand-primary hover:text-black hover:border-brand-primary',
          'hover:shadow-[0_0_24px_rgba(125,42,232,0.2)]',
        ].join(' '),
        solid: 'bg-foreground text-background hover:opacity-90 shadow-sm',
        soft: [
          'border border-brand-primary/30 bg-brand-primary/15 text-brand-primary',
          'hover:bg-brand-primary hover:text-black hover:border-brand-primary',
        ].join(' '),
        inverse: [
          'bg-background text-foreground border border-border',
          'hover:bg-muted hover:shadow-md',
        ].join(' '),
      },
      size: {
        sm: 'px-4 py-2 text-xs',
        md: 'px-6 py-3 text-xs',
        lg: 'px-8 py-4 text-xs',
      },
      radius: {
        full: 'rounded-full',
        xl: 'rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      radius: 'full',
    },
  }
);

type AnimatedButtonProps = VariantProps<typeof buttonVariants> & {
  href?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  shine?: boolean;
  glow?: boolean;
} & {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const motionSpring = { type: 'spring' as const, stiffness: 420, damping: 28 };

function ButtonInner({
  variant,
  icon: Icon,
  iconPosition = 'right',
  children,
  shine = true,
  glow = false,
  iconClassName,
}: Pick<
  AnimatedButtonProps,
  'variant' | 'icon' | 'iconPosition' | 'children' | 'shine' | 'glow'
> & { iconClassName?: string }) {
  const showShine = shine && (variant === 'primary' || variant === 'outline' || variant === 'soft');
  const showGlow = glow && variant === 'primary';

  return (
    <>
      {showGlow && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-brand-primary/30 blur-md animate-btn-glow"
        />
      )}
      {showShine && (
        <span
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 w-1/2 -translate-x-full skew-x-[-12deg]',
            'bg-gradient-to-r from-transparent via-white/35 to-transparent',
            'opacity-0 group-hover:opacity-100 group-hover:animate-btn-shine'
          )}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">
        {Icon && iconPosition === 'left' && (
          <Icon
            className={cn(
              'shrink-0 transition-transform duration-300 ease-out group-hover:-translate-x-0.5',
              iconClassName
            )}
            strokeWidth={2.5}
          />
        )}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && (
          <Icon
            className={cn(
              'shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5',
              iconClassName
            )}
            strokeWidth={2.5}
          />
        )}
      </span>
    </>
  );
}

export function AnimatedButton({
  variant,
  size,
  radius,
  href,
  icon,
  iconPosition,
  children,
  className,
  fullWidth,
  shine,
  glow,
  onClick,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: AnimatedButtonProps) {
  const classes = cn(buttonVariants({ variant, size, radius }), fullWidth && 'w-full', className);
  const iconSize =
    size === 'lg' ? 'h-4 w-4' : size === 'sm' ? 'h-3 w-3' : 'h-3.5 w-3.5';

  const inner = (
    <ButtonInner
      variant={variant}
      icon={icon}
      iconPosition={iconPosition}
      shine={shine}
      glow={glow ?? variant === 'primary'}
      iconClassName={iconSize}
    >
      {children}
    </ButtonInner>
  );

  if (href) {
    return (
      <motion.span
        className={cn('inline-flex', fullWidth && 'w-full')}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={motionSpring}
      >
        <Link
          href={href}
          className={classes}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
        >
          {inner}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={motionSpring}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {inner}
    </motion.button>
  );
}

export { buttonVariants };
