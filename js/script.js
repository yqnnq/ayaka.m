
// スクロール
$(function () {
  $('a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href');
    var position = $(elmHash).offset().top;
    $('body,html').animate({ scrollTop: position }, 700);

    return false;
  });

});
