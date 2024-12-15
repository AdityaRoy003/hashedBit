function swapTheme() {
    const appDiv = document.getElementById('app');
    const button = document.getElementById('swap');
    appDiv.classList.toggle('night');
    button.classList.toggle('button_night');
}