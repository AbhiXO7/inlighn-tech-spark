
import React, { useEffect, useState } from 'react';
import { Moon, Sun, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export type Theme = 'light' | 'dark' | 'cyber';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('cyber');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('light', 'dark', 'cyber-theme');
    
    // Add the selected theme class
    if (theme === 'cyber') {
      root.classList.add('cyber-theme');
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const cycleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'cyber'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      case 'cyber':
        return <Zap className="h-4 w-4" />;
    }
  };

  const getThemeColor = () => {
    switch (theme) {
      case 'light':
        return 'bg-yellow-500';
      case 'dark':
        return 'bg-blue-600';
      case 'cyber':
        return 'bg-gradient-to-r from-cyan-500 to-purple-500';
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="ghost"
        size="sm"
        onClick={cycleTheme}
        className={`relative overflow-hidden rounded-full p-2 ${
          theme === 'cyber' ? 'cyber-glow' : ''
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {getIcon()}
          </motion.div>
        </AnimatePresence>
        
        {/* Background effect */}
        <motion.div
          className={`absolute inset-0 rounded-full ${getThemeColor()} opacity-20`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;
