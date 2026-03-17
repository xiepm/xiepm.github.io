(function () {
  const root = document.documentElement;
  const storageKey = "xpm-theme";
  const readingKey = "xpm-reading-scale";

  function syncGiscusTheme(theme) {
    const iframe = document.querySelector("iframe.giscus-frame");
    const host = document.querySelector("[data-giscus-host]");
    if (!iframe || !host || !iframe.contentWindow) return;
    const nextTheme = theme === "dark"
      ? host.getAttribute("data-theme-dark") || "dark_dimmed"
      : host.getAttribute("data-theme-light") || "light";

    iframe.contentWindow.postMessage(
      {
        giscus: {
          setConfig: {
            theme: nextTheme
          }
        }
      },
      "https://giscus.app"
    );
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    const button = document.querySelector("[data-theme-toggle]");
    if (button) {
      button.textContent = theme === "dark" ? "切换至日间模式" : "切换至夜间模式";
    }
    syncGiscusTheme(theme);
  }

  function initTheme() {
    const saved = localStorage.getItem(storageKey) || "light";
    applyTheme(saved);
    const button = document.querySelector("[data-theme-toggle]");
    if (!button) return;
    button.addEventListener("click", function () {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem(storageKey, next);
      applyTheme(next);
    });
  }

  function initReadingScale() {
    const range = document.querySelector("[data-reading-range]");
    const target = document.querySelector("[data-reading-target]");
    const label = document.querySelector("[data-reading-value]");
    if (!range || !target || !label) return;
    const apply = function (value) {
      target.style.setProperty("--reading-scale", value + "%");
      label.textContent = value + "%";
    };
    const saved = localStorage.getItem(readingKey) || "100";
    range.value = saved;
    apply(saved);
    range.addEventListener("input", function () {
      localStorage.setItem(readingKey, range.value);
      apply(range.value);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initReadingScale();
    window.setTimeout(function () {
      syncGiscusTheme(root.getAttribute("data-theme") || "light");
    }, 1200);
  });
})();
