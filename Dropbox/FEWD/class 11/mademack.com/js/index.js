
$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#carrot').fadeOut(500);
     }
    else
     {
      $('#carrot').fadeIn(500);
     }
 });


