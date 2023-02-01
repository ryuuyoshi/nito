$(function(){
  $(".check").click(function(){
    $(".its").css("color","green");
    $(".its").fadeIn();
  
  });



  $(".ques").click(function(){
    var $ans = $(this).find(".answer");
    
    if($ans.hasClass("close")) {
      $ans.slideUp();
      $ans.removeClass("close");
    } else {
      $ans.slideDown();
      $ans.addClass("close");
    }
  });

});
