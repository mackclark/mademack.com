
$(window).on("scroll", (function() {
    if ($(this).scrollTop()>0)
     {
        $('i.fa-chevron-down').addClass("fade");
     }
    else{
      $('i.fa-chevron-down').removeClass("fade");
     }
 }));


