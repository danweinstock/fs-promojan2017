// ==========================================================================
// device and screen detection
// ==========================================================================
var smallScreen, tabletDevice;
var touchDevice = isMobile.any;
var ie_lte8 = window.attachEvent && !window.addEventListener;
var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );

var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var is_Opera = navigator.userAgent.indexOf("Presto") > -1;
if ((is_chrome)&&(is_safari)) {is_safari=false;}

function testEnv() {
	smallScreen = Modernizr.mq('all and (max-width: 767px)');
	tabletDevice  =  Modernizr.mq('only screen and (min-width : 768px) and (max-width : 1024px)');
}
testEnv();

var fitstar = {
	scrollTop: 0
};

(function( $ ) {
	var $body = $('body');
	if (isMobile.any) {
		$body.addClass('device-mobile');
		if (isMobile.apple.device) {
			$body.addClass('device-ios');
		}
		if (!isMobile.apple.device) {
			$body.addClass('device-not-ios');
		}
	} else {
		$body.addClass('device-desktop device-ios');
	}


})( jQuery );


// ==========================================================================
// Trigger a "redraw" function when the page changes size / orientation
// ==========================================================================
jQuery(window).on('resize orientationchange', function() {
	jQuery(window).trigger('fitstar.redraw');
});


// ==========================================================================
// Trigger a "custom scroll" function to wrap our scroll events
// ==========================================================================
jQuery(window).on('scroll', function() {
	fitstar.scrollTop = $(window).scrollTop();
	jQuery(window).trigger('fitstar.scroll');
});

// Also scroll on touch on iOS
if (iOS) {
	$(window).get(0).addEventListener("touchmove", function(e) {
		fitstar.scrollTop = $(window).scrollTop();
		jQuery(window).trigger('fitstar.scroll');
	});
}

// Run again once all loaded up
jQuery(window).on('load',function() {
	jQuery(window).trigger('fitstar.redraw');
});


// ==========================================================================
// Helper Function: Get animation frame
// ==========================================================================
function getFrame(current, start, stop, from, to, easing) {
	if (current <= start) return from;
	if (current >= stop) return to;

	if (easing != null) {
		return jQuery.easing[easing](
			null,
			current - start,
			from,
			to - from,
			stop - start
		);

	} else {
		var factor = (current - start) / (stop - start);
		return factor*(to - from) + from;
	}
}


// ==========================================================================
// Hero scroll effects
// ==========================================================================
jQuery(document).ready(function($) {
	function heroEffect() {
		// Skip this whole block on smaller screens
		if (Modernizr.mq('all and (min-width: 1024px)')) {
			var $hero = $('.hero-scroll');

			if ($hero.length && !$hero.hasClass('static') && !$('body').hasClass('page-template-page-homepage-php')) {

				var heroHeight = 600;
				var heroTopStart = 70;
				var heroTopEnd =  heroTopStart - 300;
				var $heroChildren = $hero.children();

				$(window).on('fitstar.scroll', function(){
					var scrollTop = fitstar.scrollTop;

					if (scrollTop < heroHeight) {
						$hero.css('display', 'block');

						$hero.css('top', getFrame(scrollTop, 0, heroHeight, heroTopStart, heroTopEnd));
						$heroChildren.css('opacity', getFrame(scrollTop, 0, heroHeight, 1, 0));

					}

					if (scrollTop >= heroHeight) {
						$hero.css('display', 'none');
					}
				});
			}
		} else {
			$(window).unbind('fitstar.scroll');
		}
	}
	heroEffect();

	$(window).resize(function() {
		heroEffect();
	})
});


// ==========================================================================
// Newsletter Signup
// ==========================================================================
function addToYogaList(email, successCallback, errorCallback) {

	// Send to ajax script
	data = {
		action:'subscribe',
		list_id: 'e0cbfcbbb3',
		email: email
	};

	$.ajax({
		type: "POST",
		url: '/wp-content/themes/fitstar_v3/ajax.php?cb=' + Math.random(99999),
		data: data,
		success: successCallback,
		error: errorCallback
	});
}

jQuery(document).ready(function($) {

	// Newlsetter signup
	var $newsletter_signup = $('#newsletter-signup');
	if (!$newsletter_signup.length) return;

	// Load validator
	$.getScript(AppConfig.base_url + "/_/vendor/jquery-validation/dist/jquery.validate.min.js", function(data, textStatus, jqxhr) {

		// Validate input
		$newsletter_signup.validate({
			errorElement: 'em',
			errorClass: 'error',
			onkeyup: function(form) {
				$newsletter_signup.find('.form-error').hide();
			},
			errorPlacement: function(error, element) {
                $(".yoga.email-signup").addClass("error");

                error.insertAfter(element); // Default jquery.validation action.

                $("p.benefits").fadeOut(300);
              	$(".yoga-error").text("Please provide a valid email address.").delay(300).fadeIn(300);
            },
			submitHandler: function(form) {

				// Submit to mailchimp via jsonp
				var form_action = form.action.replace('/post?', '/post-json?').concat('&c=?');
				$(form).find('.form-error').removeClass('hidden').hide();
				$newsletter_signup.parent().removeClass("error");

				if ($newsletter_signup.parent().hasClass("yoga")) {
					var email = $newsletter_signup.find("input[type=text]").val();

					addToYogaList(email, function(data){
						var response = JSON.parse(data);

						if (response.status == "SUCCESS") {
							$('.newsletter-success').hide().removeClass('hidden').delay(350).fadeIn(300);
			                $(form).children().not('.newsletter-success').fadeOut(300);

			                $(".yoga.email-signup").fadeOut();
			                $(".description .benefits").fadeOut();
			                $(".description .intro").fadeOut();
			                $(".yoga-error").fadeOut();
						}
						else {
							var error_message = response.message;

							if (error_message.indexOf("already subscribed") >= 0) {
								error_message = email + " is already subscribed to this mailing list!";
							}
							else if (error_message.indexOf("Invalid Email Address") >= 0) {
								error_message = email + " is not a valid email address. Please try again."
							}

							$(form).find('.form-error').show().html(error_message);
			              	$newsletter_signup.parent().addClass("error");

			              	$("p.benefits").fadeOut(300);
			              	$(".yoga-error").text(error_message).delay(300).fadeIn(300);
						}
					});

					return false;
				}
				else
				{
					$.ajax({
						url: form_action,
						method: 'get',
						dataType: "jsonp",
						data: $(form).serialize(),
						success: function(data) {
							if (data.result != "success") {
				              	$(form).find('.form-error').show().html(data.msg);
				              	$newsletter_signup.parent().addClass("error");
				            } else {
								$('.newsletter-success').hide().removeClass('hidden').delay(350).fadeIn(300);
				                $(form).children().not('.newsletter-success').fadeOut(300);

				                $(".yoga.email-signup").fadeOut();
				                $(".description .benefits").fadeOut();
				                $(".description .intro").fadeOut();
				            }
						},
						error: function(jqXHR, textStatus, errorThrown) {
							// Something went wrong, do something to notify the user.
						}
					});
				}
			}
		});
	});
});


// ==========================================================================
// Videos
// ==========================================================================
jQuery(document).ready(function($) {

	var $header = $('header.global');
	var $close = $('.video-player  .icon-close');

	var $player = $('#inner-video-player');

	var duration = 200;
	var hero_duration = 1000;

	var active_video;

	$('.inner-video').each(function(i, video) {

		$(video).click(function(e) {
			e.preventDefault();
			if (active_video) {
				close();
			}

			play(video);
		});

	});

	$close.click(function(e) { e.preventDefault(); close(); });

	function play(video){

		active_video = video;

		var video_id = $(video).data('video-id');
		var video_src = 'http://player.vimeo.com/video/'+video_id+'?autoplay=1&title=0&badge=0&byline=0&portrait=0';
		var this_duration = duration;
		var $this_oembed = $('<iframe src="' + video_src + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		var $this_player = $player;

		var hero_video = false;
		if (!(smallScreen || tabletDevice) && $(video).attr('id') == 'homepage-video-play') {
			hero_video = true;
		}

		if (hero_video) {

			this_duration = hero_duration;
			$this_player = $('#homepage-video-player');
			var $logo = $('#large-logo');

			$logo.css('z-index', 3000);
			$logo.animate({'top':'40%'}, this_duration).animate({'opacity':0}, this_duration);

		} else {
			$header.addClass('video style-video');
		}

		$this_player.fadeIn(this_duration);
		$this_player.find('.player').append($this_oembed);

		setTimeout(function() {
			$this_oembed.show();
			$this_oembed.focus();
		}, this_duration + 500);
	}

	function close() {

		if (active_video) {
			video = active_video;
		} else {
			return;
		}

		var this_duration = duration;
		var $this_player = $player;

		var hero_video = false;
		if (!(smallScreen || tabletDevice) && $(video).attr('id') == 'homepage-video-play') {
			hero_video = true;
		}

		if (hero_video) {

			this_duration = hero_duration;
			$this_player = $('#homepage-video-player');
			var $logo = $('#large-logo');
		}

		$this_oembed = $this_player.find('iframe');
		$this_oembed.attr('src', "about:blank");
		$this_oembed.remove();

		active_video = null;

		setTimeout(function() {

			if (hero_video) {
				$logo.animate({'opacity':1}, this_duration).animate({'top':'0'}, this_duration, function() {
					$logo.css('z-index', '');
				});

				$this_player.delay(this_duration).fadeOut(this_duration, function(){

				});

			} else {
				$header.removeClass('style-video');

				$this_player.fadeOut(this_duration, function(){
					$header.removeClass('video');
					active_video = null;
				});
			}

		}, 500);
	}
});


// ==========================================================================
// Header Forms
// ==========================================================================
jQuery(document).ready(function($) {

	var $header = $('header.global');
	var $form = $('#inner-header-form');
	var $close = $form.find('.icon-close');

	// Save the initial html for reload
	var gform_html = $form.html();

	// Open the form
	$('.header-form-button').click(function(e) {
		e.preventDefault();
		$header.addClass('form style-form');
		$form.fadeIn(200);
	});

	// Close the form
	$form.on("click", ".button-close, .icon-close", function(e) {
		e.preventDefault();
		$header.removeClass('style-form');
		$form.fadeOut(200, function() {
			$header.removeClass('form');
			$form.html(gform_html);
		});
	});
});

// ==========================================================================
// Fix header on scroll
// ==========================================================================
jQuery(document).ready(function($) {
	var didScroll;
	var lastScrollTop = 0;
	var $header = $('header.global');
	var headerHeight = $header.outerHeight();

	$(window).scroll(function(event){
	    hasScrolled();
	});

	function hasScrolled() {
	    var st = $(window).scrollTop();

	    if(Math.abs(lastScrollTop - st) <= headerHeight)
	        return;

	    if (st > lastScrollTop && st > headerHeight){
	        // Scrolling Down
	        $header.removeClass('visible').addClass('fix');
	    } else if (st <= headerHeight + 450 && st > headerHeight + 200) {
	    	// Close to top
	    	$header.removeClass('visible');
	    } else if (st <= headerHeight + 200) {
	    	// Back at top
	    	$header.removeClass('fix');
	    } else {
	        // Scrolling Up
	        if(st + $(window).height() < $(document).height()) {
	            $header.addClass('visible');
	        }
	    }

	    lastScrollTop = st;
	}
});

// ==========================================================================
// Select Wrapper
// ==========================================================================
jQuery(document).ready(function($) {
	if (!$("#fitstar-store .single-option-selector").parent().hasClass('select-field-wrapper')) {
		$( "#fitstar-store .single-option-selector" ).wrap( "<div class='select-field-wrapper'></div>" );
	}
});

//----------------------------------------------------------------
//  Announcement
//----------------------------------------------------------------
jQuery(document).ready( function($) {

	var $header = $('header.global');

});



jQuery(document).ready(function($) {

	var cookie_name = 'cookie_notice';
	if (AppConfig.cookie_namespace) {
		cookie_name = AppConfig.cookie_namespace + cookie_name;
	}
	var $cbar = $('#cookie-notice');
	var $header = $('header.global');
    var $offsetc = $('.offset-container');


	if (!Cookies.get(cookie_name)) {

		if (!$cbar.length) return;

		$.ajax({
			url: '/site-ajax/has-cookie-bar',
			dataType: 'json',
			data: {},
			success: function (data) {

				// are we showing the bar?
				if (!data.show_bar) return;

                var slide_duration = 200;
                var slide_duration_init = 800;


                // measure the height of the cbar
                var cbar_height;
                function getBarHeight() {
                    if (!$cbar.is(':visible')) {
                        $cbar.show();
                        cbar_height = $cbar.outerHeight();
                        $cbar.hide();
                    }
                }
                // check on redraws
                $(window).on('fitstar.redraw', function() {
                    getBarHeight();
                });
                getBarHeight();

                // hide on scroll
				/*function cookieScroll() {

                   var scroll = $(window).scrollTop();
                    if (!$cbar.hasClass('active')) return;

                    if (scroll >= 5) {
                        $cbar.slideUp(slide_duration);
                        $offsetc.animate({top: 0}, slide_duration);
                    } else {
                        $cbar.slideDown(slide_duration);
                        $offsetc.animate({top: cbar_height}, slide_duration);
                    }

				}
				$(window).scroll(function() {
					cookieScroll();
				});*/

				setTimeout(function(){

					// slide down the cookie bar
					$cbar.addClass('active').slideDown(slide_duration_init);
                    $offsetc.animate({top: (cbar_height)}, slide_duration_init);

				}, 500);


				// clear the bar
				$cbar.find("#close-announcement").click(function(e) {
					e.preventDefault();

					Cookies.set(cookie_name, true, {
						expires: 365,
						domain: AppConfig.cookie_domain
					});

					// close the bar
					$cbar.removeClass('active').slideUp(slide_duration);
                    $offsetc.animate({top: 0}, slide_duration);

				});

			}
		});
    }
});

/**
 * Language Toggle and Detection
 */
jQuery(document).ready(function($) {

    var lang = AppConfig.lang;
    var cookie_name = 'lang';
    if (AppConfig.cookie_namespace) {
        cookie_name = AppConfig.cookie_namespace + cookie_name;
    }
    $('select[name=lang-select]').on('change', function(e) {
        window.location.href = $(this).find(":selected").val();
    });

    var skip_detect = false;
    if ($('body').hasClass('no-lang-detect')) {
        skip_detect = true;
    }

    if (!Cookies.get(cookie_name)) {

        if (!skip_detect) {
            $.ajax(
                {
                    url: '/site-ajax/user-language',
                    dataType: 'json',
                    data: {},
                    success: function (data) {


                        var lang_pref = data.lang_pref;

                        if (lang_pref) {

                            Cookies.set(cookie_name, lang_pref, {
                                domain: AppConfig.cookie_domain
                            });

                            if (lang_pref != lang && AppConfig.lang_redirects[lang_pref]) {
                                window.location = AppConfig.lang_redirects[lang_pref].url;
                            }
                        }

                    }
                }
            );
        }
    } else {
        Cookies.set(cookie_name, lang, {
           domain: AppConfig.cookie_domain
        });
    }
});

//----------------------------------------------------------------
//  BLOG LANDING PAGE
//----------------------------------------------------------------

// match height for all of the blog posts
jQuery(document).ready(function($) {
	if($(".post-list-item").length) {
		$(".post-list-item").matchHeight();
	}
});

// search sidebar
$(document).ready(function(){
  $("#sidebar-search").click(function () {
  	$(this).addClass("current-cat");
      $("#searchform").toggle();
  });
});

// filter blog posts on mobile screen
// leaving this for now until design for this is confirmed
$(document).ready(function(){
	$("#filter-blog-posts").click(function (){
		$(".blog-category-list").toggle();
	});
	$(".close-menu").click(function(){
		$(".blog-category-list").hide();
	});

	$(window).resize(function() {
		if(Modernizr.mq('only screen and (min-width: 768px)')) {
				$(".blog-category-list").removeAttr('style');
		}
	})
});

$("li.cat-item").hover(function() {
     $(".category-post-dropdown").toggleClass( "active" )

});