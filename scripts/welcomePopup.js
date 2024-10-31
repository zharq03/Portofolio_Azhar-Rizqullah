const welcomePopup = document.createElement('div');
welcomePopup.classList.add('welcome-popup');
welcomePopup.innerHTML = 'Welcome To portofolio Azhar Rizqullah! <button onclick="this.parentElement.style.display=\'none\'">X</button>';
document.body.appendChild(welcomePopup);

setTimeout(() => {
  welcomePopup.classList.add('show');
}, 500);