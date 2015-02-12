
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


if($.device  == (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))){
	$('#carrot').hide();
	$('#slide-1').addClass('mobile-slide-1');
	$('#slide-2').addClass('mobile-slide-2');
	$('#slide-3').addClass('mobile-slide-3 ');
}
