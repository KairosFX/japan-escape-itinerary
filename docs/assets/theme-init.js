(() => {
  const getPreferredTheme = () => {
    try {
      const stored = window.localStorage.getItem("japan-escape-theme");
      if (stored === "light" || stored === "dark") {
        return stored;
      }
    } catch {
      // Ignore storage failures and fall back to the OS theme.
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  document.documentElement.dataset.theme = getPreferredTheme();
})();
