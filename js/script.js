$(document).ready(function() {

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('html').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  $(window).scroll(function() {
  var scroll = $(window).scrollTop();
      if (scroll >= 50) {
          $(".my_navbar").addClass("my_navbar-fixed");

      }else{
          $(".my_navbar").removeClass("my_navbar-fixed");
      }
  });


})
