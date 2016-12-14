jQuery(window).ready(function($) {

	// Load owl carousel
	$.getScript(AppConfig.base_url + "/_/vendor/owl-carousel/owl-carousel/owl.carousel.min.js", function(data, textStatus, jqxhr) {

		$(document).ready(function() {

			var owl = $(".success-stories .owl-carousel");

			owl.owlCarousel({
				singleItem: true,
				autoHeight: true
			});

			$(".custom-owlnav .icon-scroll-next").click(function(){
				owl.trigger('owl.next');
			});
			$(".custom-owlnav .icon-scroll-prev").click(function(){
				owl.trigger('owl.prev');
			});

		});
	});

	if ($('body').hasClass('blaze-promo') && Modernizr.mq('only screen and (min-width: 642px)')) {
		$(window).scroll(function() {    
		    var scroll = $(window).scrollTop();

		    if (scroll >= 45) {
		        $("header").addClass("transition");
		    } else {
		        $("header").removeClass("transition");
		    }
		});
	}

	if ($('body').hasClass('signup')) {
		$(window).scroll(function() {    
		    var scroll = $(window).scrollTop();
		    var heroHeight = $('.discover').height();

		    if(!$('header').hasClass('video')) {
			    if (scroll >= heroHeight) {
			        $("header").addClass("appear");
			    } else {
			        $("header").removeClass("appear");
			    }
			}
		});

		$('.inner-video').click(function() {
			$('header').addClass('appear');
			$('body').addClass('no-scroll');
		});

		$('.video-player .icon-close').click(function() {
			$('body').removeClass('no-scroll');
		});
	}

	// ==========================================================================
    // Smooth Scroll
    // ==========================================================================
	$('.smooth-scroll').click(function(e) {
		e.preventDefault();
	    var target = $(this).attr('href');
	    var headerHeight = $('header').height();

	    smoothScroll(target, headerHeight);
	});

	function smoothScroll(target, headerHeight) {
	    $('html,body').stop().animate({
	        scrollTop: $(target).offset().top - headerHeight
	    }, 1200);
	}
});

// ==========================================================================
// iframe
// ==========================================================================

window.onload = function() {

	// ACT AS RECEIVER
	// A function to process messages received by the window.
	function receiveMessage(e) {
		
		// Split string to check string type
		var message = e.data.split('|');

		// if string before pipe is oAuth, open new tab for authentication, otherwise, re-height the iframe
		if (message[0] == "redirect") {
			document.location.href = message[1];
		} 

		if (message[0] == "expand") {
			
			if (message[1] == 1) {
				document.getElementById('receiver1').setAttribute('style', 'height:500px');
			} else if (message[1] == 2) {
				document.getElementById('receiver2').setAttribute('style', 'height:600px');
				document.getElementById('receiver3').setAttribute('style', 'height:600px');
			}
			
			// if (Modernizr.mq('only screen and (max-width: 425px)')) {
			// 	if (document.getElementById('receiver1').offsetHeight == 500) {
			// 		document.getElementById('section-discover').setAttribute('style', 'padding-bottom:525px');
			// 	}

			// 	if (document.getElementById('receiver2').offsetHeight == 600) {
			// 		document.getElementById('section-mobile-cta').setAttribute('style', 'padding-bottom:525px');	
			// 	}
				
			// 	if (document.getElementById('receiver3').offsetHeight == 600) {
			// 		document.getElementById('signup-anchor').setAttribute('style', 'padding-bottom:525px');
			// 	}
			// }
		}
	}

	// Setup an event listener that calls receiveMessage() when the window
	// receives a new MessageEvent.
	window.addEventListener('message', receiveMessage);
}

