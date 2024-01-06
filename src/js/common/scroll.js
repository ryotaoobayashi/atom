import smoothScroll from 'smooth-scroll'
function scroll() {
  new smoothScroll('a[href*="#"]', {
    speed: 400,
    easing: 'easeInOutCubic',
    updateURL: false,
    offset: 50
  })
}
export default scroll
