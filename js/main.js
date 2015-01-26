$(document).ready(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		directionNav: true
	});
	$('#single, #double, #suite, #hotel').flexslider({
		animation: "slide",
		controlNav: "thumbnails",
		directionNav: true
	});
	$('.es-select_room li:nth-child(1)').bind('click', function(){
		$("#single, #suite, #hotel").hide();
		$("#double").show();
		$('.es-select_room li').removeClass('clicked');
		$(this).addClass('clicked');
	});
	$('.es-select_room li:nth-child(2)').bind('click', function(){
		$("#double, #suite, #hotel").hide();
		$("#single").show();
		$('.es-select_room li').removeClass('clicked');
		$(this).addClass('clicked');
	});
	$('.es-select_room li:nth-child(3)').bind('click', function(){
		$("#double, #hotel, #single").hide();
		$("#suite").show();
		$('.es-select_room li').removeClass('clicked');
		$(this).addClass('clicked');
	});
	$('.es-select_room li:nth-child(4)').bind('click', function(){
		$("#double, #suite, #single").hide();
		$("#hotel").show();
		$('.es-select_room li').removeClass('clicked');
		$(this).addClass('clicked');
	});
	$('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});
	return false;
});