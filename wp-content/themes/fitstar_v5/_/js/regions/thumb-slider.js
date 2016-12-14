jQuery(window).ready(function($) {
	// ==========================================================================
	// THUMB SLIDER
	// ==========================================================================

	if($('#thumb-workout').length) {
		$('#thumb-workout .slider-landing').click(function(e) {
			e.preventDefault();
		});

		var gridWidth = 320;
		var droppables = $('#thumb-workout .slider-landing');
		var overlapThreshold = "90%";

		Draggable.create("#thumb-workout .slider-item", {
		    type:"x",
		    edgeResistance:0.65,
		    bounds:"#thumb-workout .slider",
		    lockAxis:true,
		    throwProps:true,
		    snap: {
		        x: function(endValue) {
		            return Math.round(endValue / gridWidth) * gridWidth;
		        }
		    },
			  onDragEnd:function(e) {
					var i = droppables.length;
					while (--i > -1) {
						if (this.hitTest(droppables[i], overlapThreshold)) {
							window.open($('#thumb-workout .slider-landing').attr('href'));
						}
					}
				}
		});
	}
});
