import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '../../../i18n';
import { useTheme } from '../../../theme/useTheme';
import styles from './ThemeSwitcher.module.scss';

export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = '' }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();
  const isLight = resolvedTheme === 'light';
  const ThemeIcon = isLight ? Moon : Sun;
  const label = isLight ? t.theme.switchToDark : t.theme.switchToLight;

  return (
    <button
      type="button"
      className={`${styles.switcher} ${className}`}
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      aria-label={label}
      title={label}
    >
      <ThemeIcon size={19} aria-hidden="true" />
    </button>
  );
};
