// ./Components/UI/Button.tsx

import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  ariaLabel?: string;
  id?: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  animate?: boolean;
}

const LoadingSpinner = () => (
  <svg
    className="h-4 w-4 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="3"
    />

    <path
      className="opacity-90"
      fill="currentColor"
      d="M12 3a9 9 0 019 9h-3a6 6 0 00-6-6V3z"
    />
  </svg>
);

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
  id,
  rounded = 'md',
  animate = true,
}) => {
  const sizeClasses = {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-7 py-3.5 text-lg',
  };

  const variantClasses = {
    primary: `
      bg-gold-400
      text-primary-950
      hover:bg-gold-500
      shadow-sm
      hover:shadow-md
    `,

    secondary: `
      bg-white/10
      text-white
      border border-white/10
      hover:bg-white/15
    `,

    outline: `
      bg-transparent
      text-gold-400
      border border-gold-400/60
      hover:bg-gold-400/10
      hover:border-gold-400
    `,

    ghost: `
      bg-transparent
      text-slate-300
      hover:bg-white/5
      hover:text-white
    `,

    danger: `
      bg-red-600
      text-white
      hover:bg-red-700
    `,

    success: `
      bg-emerald-600
      text-white
      hover:bg-emerald-700
    `,

    warning: `
      bg-gold-500
      text-white
      hover:bg-gold-600
    `,
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  };

  const baseClasses = `
    inline-flex
    items-center
    justify-center
    gap-2
    font-medium
    whitespace-nowrap

    transition-colors
    duration-200

    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-gold-400/60
    focus-visible:ring-offset-2
    focus-visible:ring-offset-primary-950

    disabled:pointer-events-none
    disabled:opacity-50

    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${roundedClasses[rounded]}

    ${fullWidth ? 'w-full' : ''}

    ${
      animate
        ? 'hover:-translate-y-px active:translate-y-0'
        : ''
    }

    ${className}
  `;

  const label =
    ariaLabel ||
    (typeof children === 'string' ? children : undefined);

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      aria-label={label}
      aria-busy={loading}
    >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="shrink-0">{icon}</span>
          )}

          <span>{children}</span>

          {icon && iconPosition === 'right' && (
            <span className="shrink-0">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
