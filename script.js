let isDark = false;

function changeTheme() {
  const themeLink = document.getElementById("theme-style");
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  if (isDark) {
    // Switch to light
    themeLink.setAttribute("href", "style.css");
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";
  } else {
    // Switch to dark
    themeLink.setAttribute("href", "dark-mode.css");
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
  }

  isDark = !isDark;
}
