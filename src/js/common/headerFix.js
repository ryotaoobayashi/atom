function headerFix() {
  const header = document.querySelector('.js-header')
  document.addEventListener('scroll', function () {
    let scroll = window.scrollY
    if (scroll > 700) {
      header.classList.add('is-fixed')
    } else {
      header.classList.remove('is-fixed')
    }
  })
}
export default headerFix
