function spMenuStyle() {
  if (document.querySelector('.js-header-drawer')) {
    let isMenuOpen = false
    const mediaQueryList = window.matchMedia('(min-width: 835px)'),
      headerBox = document.querySelector('.js-header-menu'),
      drawerMenu = document.querySelector('.js-header-drawer'),
      body = document.querySelector('html body')
    const matchMediaEventListener = () => {
      isMenuOpen = false
      drawerMenu.classList.remove('is-open')
      headerBox.classList.remove('is-open')
      body.classList.remove('active')
    }
    const anchors = document.querySelectorAll('a[href^="#"]')
    for (let i = 0; i < anchors.length; i++) {
      anchors[i].addEventListener('click', (e) => {
        if (isMenuOpen) {
          isMenuOpen = false
          drawerMenu.classList.remove('is-open')
          headerBox.classList.remove('is-open')
          body.classList.remove('active')
        }
      })
    }
    mediaQueryList.addEventListener('change', matchMediaEventListener)
    matchMediaEventListener(mediaQueryList)
    drawerMenu.addEventListener('click', function () {
      if (isMenuOpen) {
        isMenuOpen = false
        drawerMenu.classList.remove('is-open')
        headerBox.classList.remove('is-open')
        body.classList.remove('active')
      } else {
        isMenuOpen = true
        drawerMenu.classList.add('is-open')
        headerBox.classList.add('is-open')
        body.classList.add('active')
      }
    })
  } else {
    return
  }
}

export default spMenuStyle
