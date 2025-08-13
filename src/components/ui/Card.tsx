import React from 'react';

export interface CardProps {
  /** Card title */
  title?: string;
  /** Card subtitle */
  subtitle?: string;
  /** Card content */
  children: React.ReactNode;
  /** Card footer content */
  footer?: React.ReactNode;
  /** Card image source */
  image?: string;
  /** Card image alt text */
  imageAlt?: string;
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Whether the card should have a shadow */
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Whether the card should have a border */
  border?: boolean;
  /** Whether the card is hoverable */
  hoverable?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  footer,
  image,
  imageAlt = '',
  padding = 'md',
  shadow = 'md',
  border = true,
  hoverable = false,
  onClick,
  className = '',
}) => {
  const paddingSizes = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const shadowSizes = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const borderClass = border ? 'border border-gray-200 dark:border-gray-700' : '';
  const hoverClass = hoverable ? 'hover:shadow-lg transition-shadow duration-300 cursor-pointer' : '';
  const clickableClass = onClick ? 'cursor-pointer' : '';

  const cardContent = (
    <>
      {image && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className={`${padding !== 'none' ? paddingSizes[padding] : ''}`}>
        {(title || subtitle) && (
          <div className="mb-4">
            {title && (
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="text-gray-700 dark:text-gray-300">
          {children}
        </div>
      </div>

      {footer && (
        <div className={`border-t border-gray-200 dark:border-gray-700 ${paddingSizes[padding]} bg-gray-50 dark:bg-gray-800/50 rounded-b-lg`}>
          {footer}
        </div>
      )}
    </>
  );

  const cardClasses = `
    bg-white dark:bg-gray-800 
    rounded-lg 
    ${shadowSizes[shadow]} 
    ${borderClass} 
    ${hoverClass} 
    ${clickableClass} 
    ${className}
  `.trim();

  if (onClick) {
    return (
      <div
        className={cardClasses}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick();
          }
        }}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <div className={cardClasses}>
      {cardContent}
    </div>
  );
};

export default Card;
