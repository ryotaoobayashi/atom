function fadeIn() {
  let targets = document.querySelectorAll('.js-fade')
  let offset
  let delayTime
  if (window.matchMedia('(max-width: 835px)').matches) {
    offset = 100
    delayTime = 0
  } else {
    offset = 300
    delayTime = 500
  }
  let h = window.innerHeight
  for (let target of targets) {
    if (h > target.getBoundingClientRect().top) {
      setTimeout(function () {
        target.classList.add('is-animated')
      }, delayTime)
    } else {
      window.addEventListener('scroll', function () {
        let scroll = window.scrollY
        let pos = target.getBoundingClientRect().top + scroll
        if (scroll > pos - h + offset) {
          target.classList.add('is-animated')
        }
      })
    }
  }
}
export default fadeIn
