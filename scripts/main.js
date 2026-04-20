function toggle_theme() {
  const toggle_button = document.getElementById("toggle-theme");

  toggle_button.addEventListener("click", () => {
    const current_theme = document.body.getAttribute("page-theme");

    document.body.setAttribute("page-theme", "dark");
  });
}

window.onload = function () {
  toggle_theme();
};
