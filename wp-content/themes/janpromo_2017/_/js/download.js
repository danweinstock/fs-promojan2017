
/*
 * Download page
 */
jQuery(document).ready(function($) {
	
	// Load validator
	$.getScript(AppConfig.base_url + "/_/js/vendor/flexslider/jquery.flexslider-min.js", function(data, textStatus, jqxhr) {
		
		var $slider = $('#app-store-reviews');

		$slider.flexslider({
			selector: ".slider > li",
			animation: "fade",
			controlNav: false,
			directionNav: false 
			
		});
		
		$('#slider-control-prev a').click(function(e){
			e.preventDefault();
			$slider.flexslider('prev');
		});

		$('#slider-control-next a').on('click', function(e){
			e.preventDefault();
			$slider.flexslider('next');
		});

	});
	
});
