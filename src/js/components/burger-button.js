const burgerButton = document.getElementById('burger-button')
const menu = document.getElementById('menu')

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('burger-button--active')
  menu.classList.toggle('menu--active')
})