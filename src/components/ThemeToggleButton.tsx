"use client";

import { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeContext } from '@/context/ThemeContext';

export default function ThemeToggleButton() {
  const context = useContext(ThemeContext);

  if (!context) {
    // This should not happen in a correctly structured app but is a safeguard.
    console.error("ThemeToggleButton must be used within a ThemeProvider");
    return null; 
  }

  const { theme, toggleTheme } = context;

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? 
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" /> : 
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      }
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
