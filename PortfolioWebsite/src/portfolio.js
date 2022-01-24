const hamburgerButton = document.getElementById('hamburger');
const xButton = document.getElementById('x');
const navList = document.getElementById('navList');

function toggleButton() {
    navList.classList.toggle('show');
    xButton.classList.toggle('show');
    hamburgerButton.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);
xButton.addEventListener('click', toggleButton);