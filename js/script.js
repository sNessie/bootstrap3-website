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

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
        $(this).removeClass('my_link-active');
    })
    $(this).addClass('my_link-active');
    $("#id").animate({"scrollTop": $("#id").scrollTop() + 100});
    var target = this.hash,
        menu = target,
        headerHeight = $(".my_navbar").height(),
        scrollToPosition = $(target).offset().top - headerHeight;
    $target = $(target);
    $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(target){
        window.location.hash = target;
    });
});



});
