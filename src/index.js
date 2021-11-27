import v_ from './library/v_.js'

const darkMode = document.getElementById('dark-mode')
const darkModeMobile = document.getElementById('dark-mode-mobile')
const html = document.querySelector('html')

const handleClickThemeButton = (element) => {
  const changeToLightMode = element.innerHTML.includes('sun')
  let icon = 'sun'
  if (changeToLightMode) {
    html.classList.remove('dark')
    icon = 'moon'
  } else {
    html.classList.add('dark')
    icon = 'sun'
  }
  element.innerHTML = `<i class="fas fa-${icon}"></i>`
}
darkMode.addEventListener('click', () => handleClickThemeButton(darkMode))
darkModeMobile.addEventListener('click', () => handleClickThemeButton(darkModeMobile))

const hambergerButton = document.getElementById('hamberger-btn')
const hamberger1 = document.getElementById('hamberger-1')
const hamberger2 = document.getElementById('hamberger-2')
const hamberger3 = document.getElementById('hamberger-3')
const mobileMenu = document.getElementById('mobile-menu')

hambergerButton &&
  hambergerButton.addEventListener('click', () => {
    hamberger1.classList.toggle('rotate-45')
    hamberger1.classList.toggle('translate-y-1.5')
    hamberger2.classList.toggle('opacity-0')
    hamberger3.classList.toggle('-rotate-45')
    hamberger3.classList.toggle('-translate-y-1.5')
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.add('transition', 'duration-500', 'ease-in-out')
  })

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('.link')) {
      e.preventDefault()
      v_.redirectTo(e.target.href)
    }
  })
  v_.load()
})
