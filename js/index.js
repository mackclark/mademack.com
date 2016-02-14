
$(window).on("scroll", (function() {
    if ($(this).scrollTop()>0)
     {
        $('i.fa').addClass("fade");
     }
    else{
      $('i.fa').removeClass("fade");
     }
 }));


