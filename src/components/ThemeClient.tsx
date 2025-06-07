"use client";

import { useContext, useEffect } from 'react';
import { ThemeContext, type Theme } from '@/context/ThemeContext';

export default function ThemeClient({ children }: { children: React.ReactNode }) {
  const context = useContext(ThemeContext);

  if (!context) {
    console.error("ThemeClient must be used within a ThemeProvider");
    // Fallback rendering children directly, theme functionality might be impaired.
    return <>{children}</>;
  }
  
  const { theme, setTheme } = context;

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme && storedTheme !== theme) {
      setTheme(storedTheme);
    }
    // If no stored theme, it defaults to the initial state of ThemeProvider ('dark')
    // The initial class 'dark' is set on <html> in layout.tsx
  }, [setTheme, theme]);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <>{children}</>;
}
