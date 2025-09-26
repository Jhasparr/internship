import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [dark, setDark] = useState(() => {

    const stored = localStorage.getItem("dark-mode");
    if (stored !== null) return stored === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  }, [dark]);

  return [dark, setDark] as const;
};

export default useDarkMode;
