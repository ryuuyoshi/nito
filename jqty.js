
$(function(){
    /* ここにjQueryのコードを書く */

  $(".pick").click(function(){
      var $answer = $(this).find(".answer");

    if($answer.hasClass("close")){
      $answer.slideUp();
      $(".anawer").removeClass("close");
      $(this).find("span").text("*");

      } else {
      $answer.slideDown();
      $answer.addClass("close");
      $(this).find("span").text("-");
      };  
    });
    $(".main-under").click(function(){
      (".answer-2").siidedown();
  });
});
