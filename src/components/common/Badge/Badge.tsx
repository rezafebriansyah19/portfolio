import React from 'react';
import styles from './Badge.module.scss';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'real' | 'demo' | 'concept' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  className = '',
}) => {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
