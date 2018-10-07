$(document).ready(function() {

    $(window).on("scroll", onScroll);

    $(window).on("scroll", function() {
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
        var target = this.hash,
        menu = target,
        headerHeight = $(".my_navbar").height(),
        scrollToPosition = $(target).offset().top - headerHeight;
        $target = $(target);
        $('html, body').stop().animate({ 'scrollTop': scrollToPosition }, 600, function(target){
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });


    function onScroll(event){
        var scrollPos = $(window).scrollTop(),
        headerHeight = $(".my_navbar").height();
        $('.my_navbar-right a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top - headerHeight <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.my_navbar-right li a').removeClass("my_link-active");
                currLink.addClass("my_link-active");
            }else{
                currLink.removeClass("my_link-active");
            }
        })
    }
});
