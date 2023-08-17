"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* {theme === "light" ? "Dark" : "Light"} */}
      {children}
    </div>
  );
};
