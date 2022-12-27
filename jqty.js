
$(function(){
    /* ここにjQueryのコードを書く */
  $(".test").click(function(){
    $(".go").fadeIn(600);
  });
  
  $(".setsu").click(function(){
    $(".mei").fadeIn();
  });
  



  $(".acodion").click(function(){
      var $whatis = $(this).find(".whatis");
      var $view = $(this).find(".view");

    if($(".whatis").hasClass("close")){
      $whatis.slideUp();
      $whatis.removeClass("close");
      $view.text("◆");

      } else {
      $whatis.slideDown();
      $whatis.addClass("close");
      $view.text("◇");
      };  
    
  });

});
