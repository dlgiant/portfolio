import React, { useEffect } from 'react';

export const ThemeWrapper = ({ theme, children }: { theme: string; children: React.ReactNode }) => {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    if (theme) {
      root.classList.add(theme);
    }
  }, [theme]);

  return <>{children}</>;
};
