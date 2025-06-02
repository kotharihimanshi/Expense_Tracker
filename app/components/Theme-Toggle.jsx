'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-md px-4 py-2 transition-colors duration-300"
    >
      {resolvedTheme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}

export default ThemeToggle;