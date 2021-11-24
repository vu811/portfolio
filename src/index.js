import v_ from './library/v_.js'

const darkMode = document.querySelector('#dark-mode')
const html = document.querySelector('html')
darkMode.addEventListener('click', () => {
  const isDark = darkMode.innerHTML.includes('moon')
  let icon = 'moon'
  if (isDark) {
    html.classList.remove('dark')
    icon = 'sun'
  } else {
    html.classList.add('dark')
    icon = 'moon'
  }
  darkMode.innerHTML = `<i class="fas fa-${icon}"></i>`
})

//const gg = await v_.get('home')
//document.querySelector('#app').innerHTML = gg
