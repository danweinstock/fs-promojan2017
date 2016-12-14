jQuery(window).ready(function($) {


	// ==========================================================================
	// TABS
	// ==========================================================================
	$(".tabs.pricing li").click(function() {
        $(".tabs.pricing li").removeClass('active');
        $(this).addClass("active");
        $(".tab_content.price").hide();
        var selected_tab = $(this).find("a").attr("href");
        $(selected_tab).fadeIn();
        return false;
    });

	var $premium_tabs = $(".tabs.premium li");
	var premium_active = 0;
	$premium_tabs.each(function(i, tab) {

		var $tab = $(tab);
		$tab.click(function(e) {
			e.preventDefault();

			$premium_tabs.removeClass('active above below');

			// previous tab open?
			if (i == (premium_active + 1)) {
				$premium_tabs.eq(premium_active).addClass('above');

			// next tab open?
			} else if (i == (premium_active - 1)) {
				$premium_tabs.eq(premium_active).addClass('below');
			}

			$(this).addClass('active');


	        $(".tab_content.premium_feature").hide();
	        var selected_tab = $(this).find("a").attr("href");
	        $(selected_tab).fadeIn();
			premium_active = i;
	    });
    });


	var $basic_tabs = $(".tabs.basic li");
	var basic_active = 0;
	$basic_tabs.each(function(i, tab) {

		var $tab = $(tab);
		$tab.click(function(e) {
			e.preventDefault();

			$basic_tabs.removeClass('active above below');

			// previous tab open?
			if (i == (basic_active + 1)) {
				$basic_tabs.eq(basic_active).addClass('above');

			// next tab open?
			} else if (i == (basic_active - 1)) {
				$basic_tabs.eq(basic_active).addClass('below');
			}

			$(this).addClass('active');


	        $(".tab_content.basic_feature").hide();
	        var selected_tab = $(this).find("a").attr("href");
	        $(selected_tab).fadeIn();
			basic_active = i;
	    });
    });


	// ==========================================================================
	// FAQ
	// ==========================================================================
	$('.accordionButton').click(function() {
		$('.accordionButton').removeClass('on');
		$('.accordionContent').slideUp('normal');

		if($(this).next().is(':hidden') == true) {
			$(this).addClass('on');
			$(this).next().slideDown('normal');
		}
	});
	$('.accordionContent').hide();


	// ==========================================================================
	// TOUR
	// ==========================================================================
	if (touchDevice) {
		$('#tour-dropdown li').click(function(e) {
			$(this).toggleClass('hover-state');

		});

	} else {
		$('#tour-dropdown li').hover(
			function() { $(this).addClass('hover-state'); },
			function() { $(this).removeClass('hover-state'); }
		);
	}


	// ==========================================================================
	// FEATURES
	// ==========================================================================
    $(".feature-nav a").click(function() {
        $(".feature-nav li a").removeClass('active');
        $(this).addClass("active");

		var id = $(this).attr("href");
		if (id.indexOf("#") === 0) {
			id = id.substr(1);
		}

        $(".feature_content").hide();
        $(".image-wrapper:visible").fadeOut();

        $('#'+id).fadeIn();
        $('#'+id+'-image').fadeIn();
        return false;
    });
});

jQuery(window).ready(function($) {

	// ==========================================================================
	// TARA'S VIDEO
	// ==========================================================================
	var $close = $('.taras-video .close-video');
	var $player = $('.taras-video');
	var duration = 200;
	var active_video;

	$('.watch-video').each(function(i, video) {
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

		$('.taras-video').append($this_oembed);
		$this_player.find('.player').append($this_oembed);

		$('#tara').addClass('video-play');

		setTimeout(function() {
			$this_oembed.show();
			$this_oembed.focus();
		}, this_duration + 500);

		if(Modernizr.mq('only screen and (max-width: 1023px)')) {
			$('html, body').animate({scrollTop: $('#tara .yoga-instructor').offset().top - 100}, 600);
		}
	}

	function close() {
		$('#tara').removeClass('video-play');

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
