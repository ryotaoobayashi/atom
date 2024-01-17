import lottie from 'lottie-web'
function svgAnime() {
  lottie.loadAnimation({
    container: document.querySelector('.js-svg-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../assets/data/look.json',
    rendererSettings: {
      className: 'fv-logo-animation__svg'
    }
  })
}
export default svgAnime