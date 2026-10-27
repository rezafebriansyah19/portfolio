import { createContext } from 'react';

export type ThemePreference = 'system' | 'light' | 'dark';

export interface ThemeContextType {
  theme: ThemePreference;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: ThemePreference) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
