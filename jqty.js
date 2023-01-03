
$(function(){
    /* ここにjQueryのコードを書く */

  $(".main-under").click(function(){
    $(".answer-2").slideDown();
  });
  

  $(".pick").click(function(){
    var $ans = $(this).find(".answer");
    var $span = $(this).find("span")

    if($ans.hasClass("close")){
      $ans.removeClass("close");
      $ans.slideUp();
      $span.html("+");
    } else {
      $ans.addClass("close");
      $ans.slideDown();
      $span.html("-");
      };
  });


});
