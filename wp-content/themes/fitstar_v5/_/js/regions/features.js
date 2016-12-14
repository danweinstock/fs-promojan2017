jQuery(window).ready(function($) {

	// ==========================================================================
	// FEATURES
	// ==========================================================================
	if($('.features-list').length) {
		var $block_parent = $('.features-list');
		var $block = $('.features-list .single-feature');
		var activeImg;

		function activeFeature(feature) {
			if($('body.home').length) {
				if($('body.device-desktop').length) {
					activeImg = feature.find('div.image').attr('data-desktop');
				} else if($('body.device-ios').length) {
					activeImg = feature.find('div.image').attr('data-apple');
				} else {
					activeImg = feature.find('div.image').attr('data-android');
				}
			} else {
				activeImg = feature.find('img').attr('src');
			}
		}

		function generateImages() {
			$('.single-feature').each(function() {
				if($('body.device-ios').length) {
					var proper = $(this).find('div.image').attr('data-apple');
				} else {
					var proper = $(this).find('div.image').attr('data-android');
				}

				$(this).find('div.image').append('<img src="' + proper + '"/>');
			});
		}

		activeFeature($('.single-feature.active'));

		function heroSlider() {
			if (Modernizr.mq('only screen and (min-width: 768px)')) {
				if ($block.hasClass('mobile-slider')) {
					$block.removeClass('mobile-slider');
					$block.removeClass('move-left move-right active beside');

					$block_parent.find('.single-feature:first-child').addClass('active');
					$block_parent.find('.single-feature:first-child').prev().addClass('beside');
					$block_parent.find('.single-feature:first-child').next().addClass('beside');
				}

				$block.mouseover(function() {
					if(!$(this).hasClass('active')) {
						activeFeature($(this));

				  	$block.removeClass('active beside');

				  	$(this).addClass('active');
				  	$(this).prev().addClass('beside');
				  	$(this).next().addClass('beside');
						$('.feature-device .deviceScreen').fadeOut(100);
						setTimeout(function() {
					    $('.feature-device .deviceScreen').attr('src', activeImg);
					    $('.feature-device .deviceScreen').fadeIn(100);
						}.bind(this), 75);
					}
			  });

				$('.feature-device .deviceScreen').attr('src', activeImg);

				$('.feature-mobile-copy').html(' ');
			} else if (!$block.hasClass('mobile-slider')) {
				if($('body.home').length && $('.single-feature div.image').is(':empty')) {
					generateImages();
				}
				$block.addClass('mobile-slider');
				$block.unbind('mouseenter mouseleave mouseover').removeClass('active beside');

				$block_parent.find('.single-feature:nth-child(2)').addClass('active');
				$block_parent.find('.single-feature:nth-child(2)').prev().addClass('beside');
				$block_parent.find('.single-feature:nth-child(2)').next().addClass('beside');

				var content = $block_parent.find('.single-feature:nth-child(2) .feature-copy').html();

				if($('.feature-dots').html() == '') {
					$block.each(function(i) {
						if($(this).hasClass('active')) {
							var active = 'active';
						} else {
							var active = '';
						}
						$('.feature-dots').append('<li><a class="block-' + (i + 1) + ' ' + active + '" href="#"></a></li>');
					});
				} else {
					$('.feature-dots a').removeClass('active');
					$('.feature-dots a.block-' + ($('.single-feature.active').index() + 1)).addClass('active');
				}

				$('.feature-mobile-copy').html(content);

				var sections = $block.find('img');
				// var direction = 0;

				function moveFeatures(block, pastBlock) {
					$block.removeClass('move-left move-right active beside');
					$('.feature-dots a').removeClass('active');

					block.closest('.single-feature').addClass('active');
					block.closest('.single-feature').prev().addClass('beside');
					block.closest('.single-feature').next().addClass('beside');
					$('.feature-dots a.' + block.closest('.single-feature').attr('data-count')).addClass('active');

					var content = block.closest('.single-feature').find('.feature-copy').html();
					$('.feature-mobile-copy').html(content);

					if($('.single-feature.active[data-count="block-1"]').length) {
						$('.single-feature.active').css('margin-left', '204px');
					} else {
						$('.single-feature').css('margin-left', '');
					}

					// if(pastBlock.index() > block.closest('.single-feature').index()) {
					// 	direction = direction + 200;
					// } else if (pastBlock.index() < block.closest('.single-feature').index()) {
					// 	direction = direction - 200;
					// }

					// $('.features-wrap').css('transform', 'translateX(' + direction + 'px)');
				}

				sections.click(function() {
					moveFeatures($(this), $('.single-feature.active'));
				});

				$('.feature-dots a').click(function(e) {
					e.preventDefault();

					properBlock = $('.single-feature[data-count="' + $(this).attr('class').split(' ')[0] + '"]').find('img');

					moveFeatures(properBlock, $('.single-feature.active'));
				});
			}
		}
		heroSlider();

		$(window).resize(function() {
			heroSlider();
		});
	}

});
