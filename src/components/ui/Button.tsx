import React from 'react';

export interface ButtonProps {
  /** The variant of the button */
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'ghost';
  /** The size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is loading */
  loading?: boolean;
  /** Whether the button should take full width */
  fullWidth?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Button content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Left icon */
  leftIcon?: React.ReactNode;
  /** Right icon */
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      fullWidth = false,
      onClick,
      children,
      className = '',
      type = 'button',
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-300',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 disabled:bg-gray-100',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-300',
      success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 disabled:bg-green-300',
      ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500 disabled:text-gray-400',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-4 py-2 text-base gap-2',
      lg: 'px-6 py-3 text-lg gap-2.5',
    };

    const widthClass = fullWidth ? 'w-full' : '';
    const disabledClass = disabled || loading ? 'cursor-not-allowed opacity-60' : 'cursor-pointer';

    return (
      <button
        ref={ref}
        type={type}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${disabledClass} ${className}`}
        disabled={disabled || loading}
        onClick={onClick}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
