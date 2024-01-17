import lottie from 'lottie-web'
function svgAnime() {
  lottie.loadAnimation({
    container: document.querySelector('.js-svg-animation3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../assets/data/robot.json',
    rendererSettings: {
      className: 'logo-animation__svg'
    }
  })
}
export default svgAnime