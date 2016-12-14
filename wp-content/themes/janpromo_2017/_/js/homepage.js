// ==========================================================================
// BANNER
// ==========================================================================
jQuery(window).ready(function($) {
	var count = 1;
	var maxCount = $('.carousel-people .people-nav li').length;

	var nav = $('.carousel-people .people-nav');
	var navLinks = $('.carousel-people .people-nav a');

	var people = $('.carousel-people .people');

	var autopager, timer = false;
	var desktop = false,
			mobile = false;

	navLinks.click(function(e) {
		e.preventDefault();

		if(!$(this).parent('li').hasClass('active')) {
			stopAutopager();

			count = $(this).closest('li').attr('class').replace('person','').replace('past','');

			peopleCarousel(count);
		}
	});

	function peopleCarousel(count) {
		if(!nav.find('.person' + count).hasClass('active')) {
			nav.find('.past').removeClass('past');
			nav.find('.active').removeClass('active').addClass('past');
			nav.find('.person' + count).addClass('active');

			people.find('.past').removeClass('past');
			people.find('.active').removeClass('active').addClass('past');
			people.find('.person' + count).addClass('active');
		}

		var active = people.find('.active');

		var arms = active.attr('stat-arms');
		var chest = active.attr('stat-chest');
		var cardio = active.attr('stat-cardio');
		var core = active.attr('stat-core');
		var back = active.attr('stat-back');
		var legs = active.attr('stat-legs');

		var steps = active.attr('data-steps');
		var calories = active.attr('data-calories');
		var minutes = active.attr('data-minutes');

		// Arms
		if (typeof arms !== typeof undefined && arms !== false) {
			$('.stats .arms').attr('class', 'arms').addClass('level-' + arms);

			$('.stats .arms').find('.level').html(arms);
		} else {
			$('.stats .arms').attr('class', 'arms');
		}

		// Chest
		if (typeof chest !== typeof undefined && chest !== false) {
			$('.stats .chest').attr('class', 'chest').addClass('level-' + chest);

			$('.stats .chest').find('.level').html(chest);
		} else {
			$('.stats .chest').attr('class', 'chest');
		}

		// Cardio
		if (typeof cardio !== typeof undefined && cardio !== false) {
			$('.stats .cardio').attr('class', 'cardio').addClass('level-' + cardio);

			$('.stats .cardio').find('.level').html(cardio);
		} else {
			$('.stats .cardio').attr('class', 'cardio');
		}

		// Core
		if (typeof core !== typeof undefined && core !== false) {
			$('.stats .core').attr('class', 'core').addClass('level-' + core);

			$('.stats .core').find('.level').html(core);
		} else {
			$('.stats .core').attr('class', 'core');
		}

		// Back
		if (typeof back !== typeof undefined && back !== false) {
			$('.stats .back').attr('class', 'back').addClass('level-' + back);

			$('.stats .back').find('.level').html(back);
		} else {
			$('.stats .back').attr('class', 'back');
		}

		// Legs
		if (typeof legs !== typeof undefined && legs !== false) {
			$('.stats .legs').attr('class', 'legs').addClass('level-' + legs);

			$('.stats .legs').find('.level').html(legs);
		} else {
			$('.stats .legs').attr('class', 'legs');
		}


		// Steps
		if (typeof steps !== typeof undefined && steps !== false) {
			$('.data .steps span').html(steps);
		}

		// Calories
		if (typeof calories !== typeof undefined && calories !== false) {
			$('.data .calories span').html(calories);
		}

		// Minutes
		if (typeof minutes !== typeof undefined && minutes !== false) {
			$('.data .minutes span').html(minutes);
		}

		if (Modernizr.mq('all and (min-width: 768px)')) {
			if(!timer) {
				startAutopager();
			}
		} else {
			// add "visible" to carousel container.
			$('.carousel-people').css('visibility', 'visible');
		}
	}

	function carousel() {
		if(count < maxCount) {
			count++;
		} else {
			count = 1;
		}

		peopleCarousel(count);
	};

	function startAutopager() {
			autopager = window.setInterval(carousel, 7000);

			timer = true;
	}

	function stopAutopager() {
			window.clearInterval(autopager);

			timer = false;
	}

	function triggerCarousel() {
		if (Modernizr.mq('all and (min-width: 768px)')) {
			// This stuff stops the carousel if the user goes to a different tab
			if(!desktop) {
				startAutopager();
				window.addEventListener('focus', startAutopager);
				window.addEventListener('blur', stopAutopager);

				desktop = true;
				mobile = false;
			}
		} else if(!mobile) {
			var size = 3;
			var x = Math.floor(Math.random() * (size)) + 1;
			peopleCarousel(x);

			stopAutopager();

			mobile = true;
			desktop = false;
		}
	}
	triggerCarousel();

	$(window).resize(function() {
		triggerCarousel();
	});


});

// ==========================================================================
// DEVICE TEST APP LINK
// ==========================================================================
jQuery(window).ready(function($) {
	if($('body.device-not-ios').length) {
		$('.app-download-link').attr('href', 'https://play.google.com/store/apps/details?id=com.fitstar.pt&referrer=utm_source%3Dwebsite%26utm_content%3Dhomepage');
	}
});



// ==========================================================================
// GOALS
// ==========================================================================
jQuery(window).ready(function($) {
	var goals = $('.goals .show-modal');
	var open = false;
	var expandTweens = [];

	function expand(one, two, three, four, goalsHeight, goalsWidth) {
		expandTweens = [];
		expandTweens.push(TweenLite.to(one, .2, {opacity: 0}));
		expandTweens.push(TweenLite.to(two, .4, {delay: 0.2, top: 0, left: 0}));
		expandTweens.push(TweenLite.to(two, .5, {delay: 0.6, height: goalsHeight, width: goalsWidth / 3.7, maxWidth: goalsWidth / 3.7}));
		expandTweens.push(TweenLite.to(three, .1, {delay: 1.1, left: 0}));
		expandTweens.push(TweenLite.to(four, .2, {delay: 1.2, opacity: 1}));
	}

	function reset(one, two, three, four) {
		TweenLite.set(one, {clearProps:"all"});
		TweenLite.set(two, {clearProps:"all"});
		TweenLite.set(three, {clearProps:"all"});
		TweenLite.set(four, {clearProps:"all"});
	}

	function goalModal(goal) {
		var parent = goal.closest('li');

		$('.goals li').removeClass('active');

		if (Modernizr.mq('all and (min-width: 768px)')) {
			$('.goals').removeAttr('style');
			var firstElement = parent.find('.original .show-modal');
			var firstElementContent = parent.find('.show-modal').children();
			var secondElement = parent.find('.details');
			var thirdElement = parent.find('.details .title h2');
			var fourthElement = parent.find('.details div:not(.title)');
			if(!open) {
				var goalsHeight = $('.goals').outerHeight(),
						goalsWidth = $('.goals').outerWidth();

				firstElement.addClass('focused');
				expand(firstElementContent, firstElement, thirdElement, fourthElement, goalsHeight, goalsWidth);

				secondElement.delay(1100).fadeIn('fast');

				parent.find('.details').children('div').css('height', goalsHeight);
			} else {
				firstElement.removeClass('focused');
				secondElement.hide();
				reset(firstElementContent, firstElement, thirdElement, fourthElement);
			}
		} else {
			$('.goals li .details').removeAttr('style');
			$('.goals li .details .title').removeAttr('style');
			if(!open) {
				$('html, body').animate({scrollTop: $('.goals').offset().top - 100}, 400);

				$('.goals').height(parent.find('.details').outerHeight());
			} else {
				$('.goals').height('auto');
			}
		}

		if(!open) {
			parent.addClass('active');

			open = true;
		} else {
			open = false;
		}
	}

	goals.click(function(e) {
		e.preventDefault();

		goalModal($(this));
	});

	$(window).resize(function() {
		if($('.goals li.active').length) {
			goalModal($('.goals li.active'));
		}
	});
});


// ==========================================================================
// TRAINER INTRO AND VIDEOS
// ==========================================================================

jQuery(document).ready(function($) {

	function trainerReveal(trainerBox) {
		if(Modernizr.mq('only screen and (min-width: 1024px)')) {
			var trainer = trainerBox.closest('.single-trainer').attr('class').split(' ')[1];

			if($('.video-play').length) {
				if(trainer == 'lea') {
					trainerName = 'adrian';
				} else {
					trainerName = 'lea';
				}
				close(trainerName);
			}

			if(!$('.trainers-heading.hide').length) {
				$('.trainers-heading').slideUp(200).addClass('hide');
				$('.single-trainer.adrian').addClass('clear');
			}

			$('.meet').removeClass('active');
			trainerBox.addClass('active');

			$('.single-trainer').removeClass('shrink active');
			$('.single-trainer:not(.' + trainer + ')').addClass('shrink');
			$('.single-trainer.' + trainer).addClass('active');
			$('.trainer-text:not(.about-' + trainer + '-hidden)')
			  .animate(
			    { opacity: 0 },
			    { queue: false, duration: 200 }
			  ).slideUp(200).removeClass('visible');

			$('.about-' + trainer + '-hidden').css('opacity', 0).addClass('visible')
			  .slideDown(200)
			  .animate(
			    { opacity: 1 },
			    { queue: false, duration: 200 }
			  );
		} else {
			$('.trainers-heading').removeClass('hide');
			$('.single-trainer').removeClass('shrink active clear');
			$('.trainer-text').removeClass('visible').css('opacity', 1);
		}
	}
	$('.meet').click(function(e) {
		e.preventDefault();

		trainerReveal($(this));
	});

	$(window).resize(function() {
		if($('.single-trainer.active').length) {
			trainerReveal($('.single-trainer.active .meet'));
		}
	});

	// ==========================================================================
	// TRAINER VIDEO
	// ==========================================================================
	var $close = $('.trainer-video .close-video');
	var $player = $('.trainer-video');
	var duration = 200;
	var active_video;

	$('.watch-video').each(function(i, video) {
		$(video).click(function(e) {
			e.preventDefault();
			var trainerName = $(this).attr('data-name');

			if (active_video) {
				close(trainerName);
			}

			play(video, trainerName);
		});

	});

	$close.click(function(e) {
		e.preventDefault();

		var trainerName = $(this).attr('data-name');
		close(trainerName);
	});

	function play(video, trainerName){
		active_video = video;

		var video_id = $(video).data('video-id');
		var video_src = 'http://player.vimeo.com/video/'+video_id+'?autoplay=1&title=0&badge=0&byline=0&portrait=0';
		var this_duration = duration;
		var $this_oembed = $('<iframe src="' + video_src + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		var $this_player = $player;

		$('.' + trainerName + '-video').append($this_oembed);
		$this_player.find('.player').append($this_oembed);

		$('.single-trainer.' + trainerName).addClass('video-play video-position');
		$('.trainer-text.about-' + trainerName + '-hidden').addClass('play');

		setTimeout(function() {
			$this_oembed.show();
			$this_oembed.focus();
		}, this_duration + 500);

		if(Modernizr.mq('only screen and (max-width: 1023px)')) {
			$('html, body').animate({scrollTop: $('.single-trainer.'  + trainerName).offset().top - 100}, 600);
		}
	}

	function close(trainerName) {
		console.log(trainerName);
		$('.single-trainer.' + trainerName).removeClass('video-play');
		$('.trainer-text.about-' + trainerName + '-hidden').removeClass('play');

		setTimeout(function() {
			$('.single-trainer.' + trainerName).removeClass('video-position');
		}, 250);

		if (active_video) {
			video = active_video;
		} else {
			return;
		}

		var this_duration = duration;
		var $this_player = $player;

		$this_oembed = $this_player.find('iframe');
		$this_oembed.attr('src', "about:blank");
		$this_oembed.remove();

		active_video = null;
	}

});
