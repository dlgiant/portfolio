import React, { forwardRef } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label for the input */
  label?: string;
  /** Helper text below the input */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Size of the input */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the input should take full width */
  fullWidth?: boolean;
  /** Icon to display on the left */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right */
  rightIcon?: React.ReactNode;
  /** Whether the field is required */
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      size = 'md',
      fullWidth = false,
      leftIcon,
      rightIcon,
      required = false,
      className = '',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-5 py-3 text-lg',
    };

    const iconSizes = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
    };

    const inputBaseStyles = `
      w-full
      rounded-lg
      border
      transition-all
      duration-200
      focus:outline-none
      focus:ring-2
      focus:ring-offset-1
      disabled:bg-gray-100
      disabled:cursor-not-allowed
      dark:disabled:bg-gray-800
    `;

    const inputStyles = error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-900 dark:text-red-400'
      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 dark:border-gray-600 dark:focus:border-blue-400';

    const containerWidth = fullWidth ? 'w-full' : 'w-auto';

    return (
      <div className={`${containerWidth} ${className}`}>
        {label && (
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 ${iconSizes[size]}`}>
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            className={`
              ${inputBaseStyles}
              ${inputStyles}
              ${sizes[size]}
              ${leftIcon ? 'pl-10' : ''}
              ${rightIcon ? 'pr-10' : ''}
              ${disabled ? 'opacity-60' : ''}
              bg-white dark:bg-gray-900
              text-gray-900 dark:text-gray-100
              placeholder-gray-400 dark:placeholder-gray-500
            `.trim()}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? 'error-message' : helperText ? 'helper-text' : undefined}
            {...props}
          />
          
          {rightIcon && (
            <div className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 ${iconSizes[size]}`}>
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p id="error-message" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p id="helper-text" className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
