$(document).ready(function() {
	// Variables
	// var newsMobile = $('header .grid-mobile .news');

	// Scroll top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100){
			$('.scroll-up').fadeIn();
		} 
		else{
			$('.scroll-up').fadeOut();
		}
	});
	$('.scroll-up').click(function(){
		$("html, body").animate({scrollTop : 0}, 700);
		return false;
	});

	// Get Livescore

	// $.get( "http://api.football-data.org/v2/competitions/", function( data ) {
	// 	// var res = JSON.parse(data);
	// 	var comp = data.competitions;
	// 	// for(var i = 0; i < comp.length; i++) {
	// 	$(".test").html( comp[74].area.id );
	//   	console.log( comp[74].area.name );	
	// 		// }
	// });

	// Sticky Header
	$(window).scroll(function() {    
		if ($(window).scrollTop() > 100) {        
			$('header .row .grid-desktop nav:first-child').slideUp();    
		} else { 
			$('header .row .grid-desktop nav:first-child').slideDown(); 
		}
	});

	$(".info").each(function(i) {
		$(this).on("click", function(e) {
			var flipThis = $(this).parent().parent().parent();
			e.preventDefault();
			flipThis.toggleClass("active");
		});
	});

	// Mobile Navigation
	$('.mobile-toggle').click(function() { 
		if ($('header').hasClass('open-nav')) { 
			$('header').removeClass('open-nav');   
			$('.navbar-mobile').slideUp(); 
		} else { 
			$('header').addClass('open-nav');    
			$('.navbar-mobile').slideDown();
		}
	});

	// Aside
	$('.news, .close-aside').click(function() { 
		if ($(window).width() < 1200 && $('aside').css('trasnform') == null) {
	        $('aside').toggleClass('toggle_aside');
	        $('aside').removeClass('close_aside');
		} else {
			$('aside').toggleClass('close_aside');
		}

		if ($('header').hasClass('open-nav')) {
			$('header').removeClass('open-nav');
			$('.navbar-mobile').slideUp();
		};
	});

	$(window).resize(function() {
		if ($(window).width() > 1200 && $('aside').hasClass('toggle_aside')) {
		 	$('aside').removeClass('toggle_aside');
	 	}
 	});

 	$('.s-cookie-notification-bar a').click(function() {
		$('.s-cookie-notification-dialog').css({'opacity': 1, 'display': 'grid'});
		$('.s-cookie-notification-dialog-background').show();
		// $('body').css('opacity': 0.5);
	});

    setTimeout(function () {
        $(".s-cookie-notification-bar").fadeIn(500);
     }, 1000);
    $(".accept, .close-button").click(function() {
        $(".s-cookie-notification-dialog, .s-cookie-notification-bar").fadeOut(500);
        $(".s-cookie-notification-dialog").removeClass("grid").hide();
        $('.s-cookie-notification-dialog-background').hide();
    }); 

    $('section.casinò article').height($('.back').outerHeight());


	// Grid-mobile navbar

	$('nav a').click(function(event) { 
		$('.navbar-mobile').hide();
		$('header').removeClass('open-nav');
		var id = $(this).attr("href");    
		var offset = 70;    
		var target = $(id).offset().top - offset;    
		$('html, body').animate({ scrollTop: target    }, 500);    event.preventDefault();
	});

});
