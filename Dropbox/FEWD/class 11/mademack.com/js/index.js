
$(window).on("scroll", (function() {
	console.log($(this).scrollTop())

    if ($(this).scrollTop()>0)
     {
        $('i.fa').addClass("fade");
     }
    else{
      $('i.fa').removeClass("fade");
     }
 }));


