let isDark = false;

function changeTheme() {
const themeLink = document.getElementById("theme-style");
const icon = document.getElementById("theme-icon");

if (isDark) {
    themeLink.setAttribute("href", "style.css");
    icon.setAttribute("d", "M21 12.79A9 9 0 0111.21 3 7 7 0 1012.79 21 9 9 0 0121 12.79z"); // Moon
} else {
    themeLink.setAttribute("href", "dark-mode.css");
    icon.setAttribute("d", "M12 4V2M12 22v-2M4.22 4.22l-1.42 1.42M19.78 19.78l-1.42-1.42M2 12H4m16 0h2M4.22 19.78l1.42-1.42M19.78 4.22l-1.42 1.42M12 18a6 6 0 100-12 6 6 0 000 12z"); // Sun
}

isDark = !isDark;
}