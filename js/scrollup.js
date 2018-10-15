
 $(document).ready(function(){
     $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrollup').fadeIn();
            $('#other').fadeIn();
            $('#resume').fadeIn();
        } else {
            $('#scrollup').fadeOut();
            $('#other').fadeOut();
            $('#resume').fadeOut();
        }
    });

    $('#scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
     
    $('#other').click(function () {
        $("html, body").animate({
            scrollTop: ($('.works-page').offset().top - 50)
        }, 600);
        return false;
     });
    
 });
  