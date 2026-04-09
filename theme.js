(function () {
  const root = document.documentElement;
  const storageKey = "dcd-theme";
  const saved = localStorage.getItem(storageKey);

  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(storageKey, theme);
    const label = document.querySelector("[data-theme-label]");
    if (label) label.textContent = theme;
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-theme-toggle]");
    if (!button) return;
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    setTheme(current === "dark" ? "light" : "dark");
  });

  const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
  setTheme(current);
})();
