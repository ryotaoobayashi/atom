import $ from 'jquery'

function fvText() {
  function EachTextAnimeControl() {
    $('.eachTextAnime').each(function () {
      var elemPos = $(this).offset().top - 50
      var scroll = $(window).scrollTop()
      var windowHeight = $(window).height()
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('appeartext')
      } else {
        $(this).removeClass('appeartext')
      }
    })
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    EachTextAnimeControl() /* アニメーション用の関数を呼ぶ*/
  }) 

  $(window).on('load', function () {
    EachTextAnimeControl() /* アニメーション用の関数を呼ぶ*/
  })
}

export default fvText
