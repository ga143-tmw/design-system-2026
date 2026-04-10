(function () {
  function updateThemeIcon() {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    document.querySelectorAll("[data-ds26-theme-icon]").forEach((icon) => {
      icon.innerHTML = isLight ? "&#9789;" : "&#9728;";
    });
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-theme-toggle]")) {
      requestAnimationFrame(updateThemeIcon);
    }

    const tab = event.target.closest("[data-ds26-tab]");
    if (!tab) return;

    const scope = tab.closest("[data-ds26-tabs]");
    if (!scope) return;

    const value = tab.getAttribute("data-ds26-tab");
    scope.querySelectorAll("[data-ds26-tab]").forEach((item) => {
      item.classList.toggle("is-active", item === tab);
    });

    const panels = scope.querySelector(".ds26-tab-panels");
    if (!panels) return;

    panels.querySelectorAll("[data-ds26-panel]").forEach((panel) => {
      panel.classList.toggle("is-active", panel.getAttribute("data-ds26-panel") === value);
    });
  });

  updateThemeIcon();
})();
