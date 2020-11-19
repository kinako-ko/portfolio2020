// scrollボタン押下時のアニメーション（するっと降りる）
$(function () {
  $("#scroll").click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
// gnavのスクロール固定
$(function () {
  var startPos = 0,
    winScrollTop = 0;
  $(window).on("scroll", function () {
    winScrollTop = $(this).scrollTop();
    console.log(winScrollTop);
    if (winScrollTop < 1020) {
      if (winScrollTop > startPos) {
        $("#header").addClass("hide");
      } else {
        $("#header").removeClass("hide");
      }
      startPos = winScrollTop;
    } else {
      if ($("#header").hasClass("hide") == true) {
        $("#header").removeClass("hide");
      }
    }
  });
});
// navのカレント表示
$(function () {
  var currentNav = location.pathname;
  console.log(currentNav);
  if (currentNav.match(/about/)) {
    if ($("header").hasClass("current")) {
      $("header").removeClass("current");
      console.log("nan");
    }
    console.log("pi");
    $(".nav-about").addClass("current");
  } else if (currentNav.match(/works/)) {
    console.log("NG");
  }
});
// マーカー付与アニメーション
$(window).scroll(function () {
  $(".maker-in").each(function () {
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight) {
      $(this).addClass("is-active");
    }
  });
});
