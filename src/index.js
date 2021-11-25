import v_ from './library/v_.js'

const darkMode = document.querySelector('#dark-mode')
const darkModeMobile = document.querySelector('#dark-mode-mobile')
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

const hambergerButton = document.querySelector('#hamberger-btn')
const hamberger1 = document.querySelector('#hamberger-1')
const hamberger2 = document.querySelector('#hamberger-2')
const hamberger3 = document.querySelector('#hamberger-3')
const mobileMenu = document.querySelector('#mobile-menu')

hambergerButton.addEventListener('click', () => {
  hamberger1.classList.toggle('rotate-45')
  hamberger1.classList.toggle('translate-y-1.5')
  hamberger2.classList.toggle('opacity-0')
  hamberger3.classList.toggle('-rotate-45')
  hamberger3.classList.toggle('-translate-y-1.5')
  mobileMenu.classList.toggle('hidden')
})

//const gg = await v_.get('home')
//document.querySelector('#app').innerHTML = gg
