let isDark = false;

window.addEventListener("DOMContentLoaded", () => {
  const themeLink = document.getElementById("theme-style");
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  // Check saved theme or fallback to system preference
  const savedTheme = localStorage.getItem("theme");

// If the user previously picked "dark" mode → load dark mode.
// OR if no preference is saved but their system prefers dark mode → also load dark mode.
  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    themeLink.setAttribute("href", "dark-mode.css");
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
    isDark = true;
  } else {
    themeLink.setAttribute("href", "style.css");
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";
    isDark = false;
  }
});

function changeTheme() {
  const themeLink = document.getElementById("theme-style");
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  if (isDark) {
    // Switch to light
    themeLink.setAttribute("href", "style.css");
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";
    localStorage.setItem("theme", "light");
  } else {
    // Switch to dark
    themeLink.setAttribute("href", "dark-mode.css");
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
    localStorage.setItem("theme", "dark");
  }

  isDark = !isDark;
}