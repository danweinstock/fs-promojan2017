jQuery(window).ready(function($) {

	// ==========================================================================
	// POSES VIDEO
	// ==========================================================================
	if($('#video').length) {
		function initVideo() {
			if(Modernizr.mq('only screen and (min-width: 1024px)')) {
				var videoInitID = $('.video-wrapper').attr('data-video');
				if(!$('#video').hasClass('jwplayer')) {
					var playerInstance = jwplayer("video");
					playerInstance.setup({
							file: "//content.jwplatform.com/videos/" + videoInitID + "-Fem2054V.mp4",
							mediaid: videoInitID
					});
				}
			} else {
				$('#video').empty().removeAttr('class');
			}
		}
		initVideo();
		// Array that breaks out what time each move starts.
		if($('body.home').length) {
			var moves = [0, 9, 17, 28, 37, 44, 53, 64, 71, 82];
		} else {
			var moves = [0, 9, 17, 28, 37, 44, 53, 64, 71, 82];
		}

		var videoId = $('#video').prop('id');
		var moveToolbar;

		function videoScroll() {
			if(Modernizr.mq('only screen and (min-width: 1024px)')) {
			  var windowHeight = $(window).height(),
			    	gridBottom = windowHeight * .6;

			  $(window).on('scroll', function() {
			    $('#video').each(function() {
			      var thisTop = $(this).offset().top - $(window).scrollTop(),
								thisBottom = thisTop + $(this).height();

			      if ((thisTop + $(this).height() / 2) <= gridBottom && thisBottom >= 100) {
							if(jwplayer(videoId).getState() == "idle" || jwplayer(this).getState() == "paused" || jwplayer(this).getState() == "complete") {
								jwplayer(videoId).play();
							}
			      } else {
							jwplayer(videoId).play(false);
							clearInterval(moveToolbar);
						}

			    });
			  });
			} else {
				$(window).unbind('scroll');
			}
		}

		videoScroll();

		$(window).resize(function() {
			initVideo();
			videoScroll();
		});

		jwplayer(videoId).onPlay(function() {
			videoToolbar();
		});

		function videoToolbar() {
			if(jwplayer(videoId).getState() == "playing") {
				moveToolbar = setInterval(function() {
					if($.inArray(Math.round(jwplayer(videoId).getPosition()), moves) != -1) {
						closestValueInArray(Math.round(jwplayer(videoId).getPosition()));

						$('.video-toolbar .slider').val(closest);
					}
				}, 500);
			} else {
				clearInterval(moveToolbar);
			}
		}

		var closest = null;
		function closestValueInArray(value) {
			closest = null;

			$.each(moves, function(){
			  if (closest == null || Math.abs(this - value) < Math.abs(closest - value)) {
			    closest = this;
			  }
			});
		}

		$('.video-toolbar .slider').on('input', function() {
			clearInterval(moveToolbar);
		});

		$('.video-toolbar .slider').change(function() {
			videoSpot = $(this).val();
			closestValueInArray(videoSpot);

			if(Modernizr.mq('only screen and (min-width: 1024px)')) {
				$(this).val(closest);
				jwplayer(videoId).seek(closest);
				videoToolbar();
			} else {
				var result = Math.round(parseFloat(parseInt($(this).val(), 10) * 100)/ parseInt($(this).attr('max'), 10) / 10) * 10;
				if (result == 0) {
					result = 10;
				}
				$('.video-images li.active').removeClass('active');
				$('.video-images li:nth-child(' + result / 10 + ')').addClass('active');
			}
		});
	}
});
