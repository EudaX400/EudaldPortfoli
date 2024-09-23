// Función para obtener la preferencia de tema
export const getThemePreference = () => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("theme") ?? "system";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

// Función para actualizar el icono según el tema
export const updateIcon = (themePreference) => {
  document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
    element.style.scale = element.id === themePreference ? "1" : "0";
  });
};

// Función para manejar el cambio de tema
export const handleThemeChange = (themePreference) => {
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

  const isDark =
    themePreference === "dark" ||
    (themePreference === "system" && matchMedia.matches);

  // Actualiza el icono
  updateIcon(themePreference);

  // Añadir o quitar la clase "dark" del HTML
  document.documentElement.classList[isDark ? "add" : "remove"]("dark");

  // Escuchar cambios en el sistema si el tema es "system"
  if (themePreference === "system") {
    matchMedia.addEventListener("change", () => {
      const systemIsDark = matchMedia.matches;
      document.documentElement.classList[systemIsDark ? "add" : "remove"]("dark");
    });
  }
};
