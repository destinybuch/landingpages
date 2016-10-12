$(document).ready(function(){

	new WOW().init();

	$(window).on("scroll", function() {
	    var scrollDistance = $(window).scrollTop();
	    if(scrollDistance >= 50) {
	    	$("#mainNav").addClass("affix");
	    } else {
	    	$("#mainNav").removeClass("affix");
	    }
	});

	$(document).on("click", ".page-scroll", function(){
		var target = $(this).attr("href");

		$("body").animate({
    		scrollTop: $(target).offset().top
    	}, 1000);	
	});

	$("body").scrollspy({target: "#mainNav"});
});