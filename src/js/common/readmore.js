function readmore() {
  let isOpenArray = []
  const mediaQueryList = window.matchMedia('(max-width: 20000px)')
  const matchMediaEventListener = () => {
    isOpenArray.length = 0
    const tabContents = document.querySelectorAll('.js-acordion-item')
    const tabs = document.querySelectorAll('.js-acordion-trigger')
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('is-current')
      tabContents[i].classList.remove('is-show')
      tabContents[i].style.maxHeight = '0px'
    }
  }
  matchMediaEventListener(mediaQueryList)
  mediaQueryList.addEventListener('change', matchMediaEventListener)

  if (mediaQueryList.matches) {
    const tabContents = document.querySelectorAll('.js-acordion-item')
    const tabs = document.querySelectorAll('.js-acordion-trigger')
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', function () {
        const arrayTabs = Array.from(tabs)
        const index = arrayTabs.indexOf(this)
        this.classList.remove('is-current')
        tabContents[index].classList.remove('is-show')
        if (isOpenArray[i]) {
          isOpenArray[i] = false
          tabContents[index].style.maxHeight = '0px'
          this.classList.remove('is-current')
          tabContents[index].classList.remove('is-show')
        } else {
          isOpenArray[i] = true
          this.classList.add('is-current')
          tabContents[index].classList.add('is-show')
          let innerHeight = tabContents[index]
            .querySelector('.c-global-navigation-child__inner')
            .getBoundingClientRect().height
          tabContents[index].style.maxHeight = `${innerHeight}px`
        }
      })
    }
  }
}
export default readmore
