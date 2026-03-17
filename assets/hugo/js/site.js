(function () {
  const root = document.documentElement;
  const storageKey = "xpm-theme";
  const readingKey = "xpm-reading-scale";
  const defaultWeather = {
    name: "东莞",
    latitude: 23.0207,
    longitude: 113.7518
  };

  function weatherLabel(code) {
    const map = {
      0: "晴朗",
      1: "大致晴",
      2: "局部多云",
      3: "阴天",
      45: "雾",
      48: "雾凇",
      51: "毛毛雨",
      53: "小雨",
      55: "中雨",
      61: "阵雨",
      63: "降雨",
      65: "大雨",
      71: "小雪",
      73: "降雪",
      75: "大雪",
      80: "阵雨",
      81: "较强阵雨",
      82: "暴雨",
      95: "雷暴"
    };
    return map[code] || "天气更新中";
  }

  function renderWeather(data) {
    const card = document.querySelector("[data-weather-card]");
    if (!card) return;
    const temp = card.querySelector("[data-weather-temp]");
    const summary = card.querySelector("[data-weather-summary]");
    const meta = card.querySelector("[data-weather-meta]");
    if (temp) temp.textContent = data.temp;
    if (summary) summary.textContent = data.summary;
    if (meta) meta.textContent = data.meta;
  }

  function fetchWeather(latitude, longitude, label) {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto";
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (payload) {
        const current = payload.current || {};
        renderWeather({
          temp: Math.round(current.temperature_2m || 0) + "°C",
          summary: weatherLabel(current.weather_code) + " · 体感 " + Math.round(current.apparent_temperature || current.temperature_2m || 0) + "°C",
          meta: (label || defaultWeather.name) + " · 风速 " + Math.round(current.wind_speed_10m || 0) + " km/h"
        });
      })
      .catch(function () {
        renderWeather({
          temp: "--°C",
          summary: "天气获取失败",
          meta: "请稍后刷新重试"
        });
      });
  }

  function initWeather() {
    if (!document.querySelector("[data-weather-card]")) return;
    renderWeather({
      temp: "--°C",
      summary: "正在获取天气...",
      meta: "默认城市：东莞"
    });

    if (!navigator.geolocation) {
      fetchWeather(defaultWeather.latitude, defaultWeather.longitude, defaultWeather.name);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      function (position) {
        fetchWeather(position.coords.latitude, position.coords.longitude, "当前位置");
      },
      function () {
        fetchWeather(defaultWeather.latitude, defaultWeather.longitude, defaultWeather.name);
      },
      {
        timeout: 6000,
        maximumAge: 15 * 60 * 1000
      }
    );
  }

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
    initWeather();
    window.setTimeout(function () {
      syncGiscusTheme(root.getAttribute("data-theme") || "light");
    }, 1200);
  });
})();
