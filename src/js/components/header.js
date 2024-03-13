const header = document.getElementById('header')

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('header--small')
  } else {
    header.classList.remove('header--small')
  }
})