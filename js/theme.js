document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Проверяем и устанавливаем текущую тему из локального хранилища
  const currentTheme = localStorage.getItem("theme") || "light-theme";
  body.classList.add(currentTheme);

  // Обработчик события для переключения темы
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");

    // Сохраняем текущую тему в локальное хранилище
    const newTheme = body.classList.contains("dark-theme")
      ? "dark-theme"
      : "light-theme";
    localStorage.setItem("theme", newTheme);
  });
});
