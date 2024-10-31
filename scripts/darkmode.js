
const darkToggle = document.getElementById('dark-toggle');
const body = document.body;

if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  darkToggle.checked = true;
}

darkToggle.addEventListener('change', () => {
  if (darkToggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'disabled');
  }
});

document.querySelector("#toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
