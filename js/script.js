$(document).ready(function() {

  $(window).scroll(function() {
  var scroll = $(window).scrollTop();
      if (scroll >= 50) {
          $(".my_navbar").addClass("my_navbar-fixed");

      }else{
          $(".my_navbar").removeClass("my_navbar-fixed");
      }
  });


})
